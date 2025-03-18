import {ReactNode} from "react";


export const LinkButton = ({children , onClick} : {children:ReactNode , onClick: ()=> void}) => {
    return <div onClick={onClick} className="px-4 py-2 cursor-pointer hover:bg-slate-100 text-sm font-light rounded">  
        {children}
    </div>
}
