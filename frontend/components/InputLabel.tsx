export const InputLabel = ({label_name,type, name,value,field, onChange}:{label_name:string, type:string, name:string, value:string, field:string, onChange:(e:any)=>any}) => {
    return <div>
         <label className="flex flex-col font-bold">
            {label_name}
            <input
            type={type}
            name={name}
            placeholder={name}
            value={field}
            onChange={onChange}
            className="w-full border pl-4 p-2 rounded-xl"
        />
      </label>       
    </div>
}