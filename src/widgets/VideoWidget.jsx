import { useState } from "react"
import { HiOutlinePencil } from "react-icons/hi";
import { Button } from "../components/uikit/button"
import { Input } from "../components/uikit/input"
import { Field, Label } from "../components/uikit/fieldset" 
import { Modal } from "../components/Modal";
 
export const VideoWidget = ({content,  id, edit, editable})=>{
  const [editor, setEditor] = useState(false)
  const [variable, setVariable] = useState("")
  const url = content ? String(content) : "https://www.youtube.com/embed/-VGQxQHLXEI?si=trey54RoReblOwn4"
  const save = ()=> {
    edit(id, variable)
    setEditor(false)}

    return (
      <>
        {(!editor && editable )&& <button onClick={()=>setEditor(true)} className="absolute top-1 right-10 bg-blue-500 text-white px-2 py-1  h-6 text-[6px] rounded z-300 hover:border hover:border-zinc-500 cursor-pointer"><HiOutlinePencil className="size-4"/></button>}
        <iframe src= {url} allow="autoplay; encrypted-media" allowFullScreen title="Video de presentación"className="w-[95%] h-[95%]"></iframe>
        {editor && 
        <Modal>
          <Field   className="w-md bg-zinc-50 p-5 m-3 rounded-lg shadow-xl border border-zinc-200">
            <Label >Video</Label>
            <Input name="url" placeholder="Ingrese URL del video" onChange={e=> setVariable(e.target.value)}/>
            <Button type="submit" className="mx-1 my-2" onClick={save}>Guardar</Button>
            <Button className="mx-1 my-2" onClick={()=> setEditor(false)}>Cancelar</Button>
          </Field>
        </Modal>}
      </>  
    )}