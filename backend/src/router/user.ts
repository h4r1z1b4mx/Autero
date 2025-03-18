import { Router } from "express";
import { authMiddleware } from "../middleware";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import jwt from 'jsonwebtoken';
import { JWT_PASSWORD } from "../config";

const router = Router();

router.post("/signup", async (req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);
    if(!parsedData.success){
        res.status(411).json({
            message:"Incorrect inputs"
        });
    }
    const userExists = await prismaClient.user.findFirst({
        where:{
            //@ts-ignore
            email:parsedData.data.username
        }
    }); 

    if(userExists){
        res.status(403).json({
            message:"User already exists"
        });
    }
    await prismaClient.user.create({
        data:{
            //@ts-ignore
            email:parsedData.data.username, 
            //need to store password in hash 
            //@ts-ignore
            password:parsedData.data.password,
            //@ts-ignore
            name:parsedData.data.name
        }
    });

    //await sendEmail();

    res.json({
        message:"Please verify your account"
    });
});

router.post("/signin", async(req, res) => {
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);
    if(!parsedData.success){
        res.status(411).json({
            message:"Incorrect inputs"
        });
    }
    const user = await prismaClient.user.findFirst({
        where:{
            //@ts-ignore
            email:parsedData.data.username,
            //@ts-ignore
            password:parsedData.data.password
        }
    });     

    if(!user){
        res.status(403).json({
            message: "Sorry credentials are incorrect"
        });
    }
    //Sign the jwt
    const token =  jwt.sign({
        //@ts-ignore
        id:user.id
    }, JWT_PASSWORD);
    res.json({
        token:  token
    });

});
//@ts-ignore
router.get('/',  authMiddleware, async (req, res)=> {
    //@ts-ignore
    const id = req.id;
    const user  = await prismaClient.user.findFirst({
        where:{
            id,
        },select:{
            name:true, 
            email:true
        }
    });
    res.json({
        user
    });
});

 export const userRouter = router;