import { useState, useEffect } from "react"
import { collections} from "../utils/sampleData"
import { HiOutlineFilm } from "react-icons/hi";
import { Select } from "./uikit/select"
import { getByCompanyId } from "../API/api";

export const CollectionSelector = ({variable, setVariable, type})=> {
    const [collection, setCollection] = useState(null)
    const [data, setData] = useState(collections())

    useEffect(() => {getByCompanyId(1).then((res) => {res?.isValid ? setData(res) : setData(collections())});}, []);

    const renderList =()=>{
        const items = data.filter(item=> item.name == collection)
        return (<div className="my-2">
        {items[0] && items[0].data.filter(item=> item.type == type).map(item => 
           <div className={`flex justify-center items-center ${variable == item.url && "border border-zinc-400 rounded-lg p-0"} hover:underline`} onClick={()=>setVariable(item.url)}>
            <p>{item.name}</p> 
           {type == "image" ? <img className="w-[60px] h-[60px] mx-2" src={item.url}/> : <HiOutlineFilm className="justify-self-center size-16"/>}</div>)}
        </div>)}
    
    return (<>
        <Select className="my-2" onChange={(e)=>setCollection(e.target.value)}>
        <option value={null} key={null}>Seleccione una colección</option>
        {data.map(item => <option  value={item.name} key={item.name}>{item.name}</option>)}
        </Select>
        {collection && renderList()}    
    </>)
}