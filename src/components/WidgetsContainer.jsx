import { useState, useRef } from "react";
import { Button } from "./uikit/button"
import { Field, Label } from "../components/uikit/fieldset";
import { useNavigate } from "react-router-dom";
export const WidgetsContainer =({setItems, items, count, setCount})=>{
    console.log(count)
    const nav = useNavigate()
    const itemsRef = useRef(new Map())
    const getMap = ()=>{return itemsRef.current}
    const addWidget = (type, content)=>{
        console.log(type, content)
        setItems([...items,{id: `${type}-${count}`, h:"2" , w:"2", content:content}]);
        setTimeout(()=>{grid.makeWidget(getMap().get(count))}, 5)
        setCount(prev => prev+1)
        console.log("cuenta", count)
    }  

    const saveLayout = () => {
        const layout = grid.save(false)
        layout.forEach((item, index) => {item.content = items[index].content})
        localStorage.setItem("grid-layout", JSON.stringify(layout))
        nav("/")};
    
const TextInput = ()=> {
    const [text, setText] = useState("")
    return (
        <Field className="bg-zinc-100 p-2 rounded-lg m-1 shadow-lg">
            <Label>Texto </Label>
            <input  onChange={e=> setText(e.target.value)} placeholder="ingrese mensaje" className="bg-white mx-2 border border-zinc-600 rounded-lg px-1"/>
            <Button onClick={()=>addWidget("text", text)} >Añadir</Button>
        </Field>
    )
}

const ImageInput = ()=> {
    const [text, setText] = useState(null)
    return (
        <Field className="bg-zinc-100 p-2 rounded-lg m-1 shadow-lg">
            <Label> Imagen </Label>
            <input  onChange={e=> setText(e.target.value)} placeholder="ingrese url" className="bg-white border border-zinc-600 rounded-lg px-1"/>
            <Button onClick={()=>addWidget("image", text)} >Añadir</Button>
        </Field>
    )
}

const TitleInput = ()=> {
    const [text, setText] = useState(null)
    return (
        <Field className="bg-zinc-100 p-2 rounded-lg m-1 shadow-lg">
            <Label> Titulo </Label>
            <input  onChange={e=> setText(e.target.value)} placeholder="ingrese Título" className="bg-white border border-zinc-600 rounded-lg px-1"/>
            <Button onClick={()=>addWidget("title", text)} >Añadir</Button>
        </Field>
    )
}

    return (
          <>
            {/* <Button onClick={()=>addWidget("image")}>Añadir Imagen</Button>
            <Button onClick={()=>addWidget("title")}>Añadir Titulo</Button>
            <Button onClick={()=>addWidget("title", "Nuevo titulo")}>Añadir Nuevo Titulo</Button>
            <Button onClick={()=>addWidget("text")}>Añadir Texto</Button> */}
            <Button onClick={()=>addWidget("button")}>Añadir Boton</Button>
            <Button onClick={()=>saveLayout()}>Guardar cambios</Button>
            <TitleInput />
            <ImageInput />
            <TextInput />
            
              </>
    )
}