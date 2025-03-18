"use client"
import { Appbar } from "../../../components/Appbar";
import { DarkButton } from "../../../components/buttons/DarkButton";

export default function(){
    return <div>
        <Appbar/>
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg w-full">
                <div className="flex justify-between pr-8">
                    <div className="text-2xl font-bold ">
                        My zaps
                    </div>
                    <DarkButton onClick={()=>{}}>
                        Create
                    </DarkButton>
                </div>
            </div>
        </div>
    </div>    
}