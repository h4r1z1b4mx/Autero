import { PrismaClient } from "@prisma/client";
import { JsonObject } from "@prisma/client/runtime/library";
import { Kafka } from "kafkajs";

const primsaclient = new PrismaClient();

const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
});

const TOPIC_NAME = "zap-events";
async function main(){
    const consumer = kafka.consumer({ groupId: 'main-worker' })
    await consumer.connect();

    const producer = kafka.producer();
    await producer.connect();

    await consumer.subscribe({ topic: 'zap-events', fromBeginning: true })
    await consumer.run({
        autoCommit:false,
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            partition,
            offset: message.offset,
            value: message.value?.toString(),
          })
          
          if(!message.value?.toString()){
            return;
          }

          const parsedValue = JSON.parse(message.value?.toString());  
          const zapRunId = parsedValue.zapRunId;
          const stage = parsedValue.stage;

          const zapRunDetail = await primsaclient.zapRun.findFirst({
            where:{
              id:zapRunId
            },
            include:{
              zap:{
                include:{
                  actions:{
                    include:{
                      type:true
                    }
                  }
                }
              }
            }
          }) 

          const currentAction = zapRunDetail?.zap.actions.find(x => x.sortingOrder === stage);
          if(!currentAction){
            console.log("Current action not found");
            return;
          }

          if(currentAction.type.id == "email"){
             console.log("Sending an email");
             const body = (currentAction.metadata as JsonObject)?.body;
             const to = (currentAction.metadata as JsonObject)?.email;
            const zapMetaData = zapRunDetail?.metadata;  
          }

          if(currentAction.type.id == "send-sol"){
            console.log("Sending an solana");
          }


          await new Promise(r => setTimeout(r, 500));
          
          const zapId = message.value?.toString();
          const lastStage = (zapRunDetail?.zap.actions?.length || 1) - 1;

          if(lastStage !== stage){
            await producer.send({
              topic:TOPIC_NAME,
              messages:[{
                value:JSON.stringify({
                  stage:stage + 1, 
                  zapRunId
                })
              }]
            });
          }


          console.log("Processing done");

          await consumer.commitOffsets([{
            topic:TOPIC_NAME,
            partition: partition, 
            offset: (parseInt(message.offset)+1).toString()
          }]);

        },
    }
)
    
}

main();
