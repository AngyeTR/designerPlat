import { useRef } from "react";
import { Button } from "./uikit/button"
import { useNavigate } from "react-router-dom";
import { Controller } from "./Controller";

export const WidgetsContainer =({setItems, items, count, setCount})=>{
    const nav = useNavigate()
    const itemsRef = useRef(new Map())
    const getMap = ()=>{return itemsRef.current}

    const addWidget = (type)=>{
        console.log(type, )
        setItems([...items,{id: `${type}-${count}`, h:"2" , w:"2", content:null, style:null}]);
        setTimeout(()=>{grid.makeWidget(getMap().get(count))}, 5)
        setCount(prev => prev+1)}  

    const saveLayout = () => {
        const layout = grid.save(false)
        layout.forEach((item, index) => {item.content = items[index].content})
        layout.forEach((item, index) => {item.style = items[index].style})
        localStorage.setItem("grid-layout", JSON.stringify(layout))
        nav("/")};
    
    return (
        <div className="border border-zinc-400 w-full m-1 rounded-lg p-1 pt-2">
            <Button onClick={()=>saveLayout()} className="justify-self-center w-[80%] ">Guardar</Button>
            <div className="flex justify-center sm:flex-col mt-2 justify-self-center">
                <Controller type="text" handleClick={addWidget}/>
                <Controller type="title" handleClick={addWidget}/>
                <Controller type="button" handleClick={addWidget}/>
                <Controller type="comparer" handleClick={addWidget}/>
                <Controller type="video" handleClick={addWidget}/>
                <Controller type="image" handleClick={addWidget}/>
                {/* <Controller type="container" handleClick={addWidget}/> */}
            </div>
        </div>)
}