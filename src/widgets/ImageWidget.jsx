import { useState } from "react"
import { HiOutlinePencil } from "react-icons/hi";
import { Button } from "../components/uikit/button"
import { Input } from "../components/uikit/input"
import { Field, Label } from "../components/uikit/fieldset"

export const ImageWidget = ({content, id, edit, editable})=>{
    const [editor, setEditor] = useState(false)
    const [variable, setVariable] = useState("")
    const url = content ? String(content) : "https://i.pinimg.com/736x/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg"
    const save = ()=> {
        edit(id, variable)
        setEditor(false)}

    return (
        <div className={`min-w-[100px] min-h-[100px] w-[100%] h-[98%] bg-[url(${url})] z-0 rounded-lg bg-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url('${url}')` }}>
        {(!editor && editable )&& <button onClick={()=>setEditor(true)} className="absolute top-1 right-10 bg-blue-500 text-white px-2 py-1  h-6 text-[6px] rounded z-300 hover:border hover:border-zinc-500 cursor-pointer"><HiOutlinePencil className="size-4"/></button>}
            {editor && 
                <Field className="bg-zinc-50 p-3 m-1 rounded-lg">
                     <Label >Imagen</Label>
                    <Input name="url" placeholder="Ingrese URL de la imagen" onChange={e=> setVariable(e.target.value)}/>
                    <Button type="submit" className="mx-1 my-2" onClick={save}>Guardar</Button>
                    <Button className="mx-1 my-2" onClick={()=> setEditor(false)}>Cancelar</Button>
                </Field>}
        </div>        
    )}