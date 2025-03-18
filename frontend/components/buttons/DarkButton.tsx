"use client"
import { ReactNode } from "react"

export const DarkButton =({children, onClick}:{children:ReactNode ,onClick: ()=> void}) => {
    return <div onClick={onClick} className="px-6 py-2 bg-purple-700 text-white font-bold rounded cursor-pointer hover:shadow-md " >
        {children}
    </div>    
}