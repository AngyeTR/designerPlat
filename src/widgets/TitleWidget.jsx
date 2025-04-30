import { HiOutlinePencil } from "react-icons/hi";
import { Heading } from "../components/uikit/heading"
import { useState } from "react"
import { Button } from "../components/uikit/button"
import { Input } from "../components/uikit/input"
import { Field, Label } from "../components/uikit/fieldset" 
import { TextController } from "../components/controllers/TextController";

export const TitleWidget = ({content, id, edit, editable, style})=>{
  const [editor, setEditor] = useState(false)
  const [variable, setVariable] = useState("")
  const [styles, setStyles] = useState(style ? style : {})

  const save = ()=> {
    edit(id, variable, styles)
    setEditor(false)}

    return (
    <div className="rounded-lg m-0 self-center items-center">
      {(!editor && editable )&& <button onClick={()=>setEditor(true)} className="absolute top-1 right-10 bg-blue-500 text-white px-2 py-1  h-6 text-[6px] rounded z-300 hover:border hover:border-zinc-500 cursor-pointer"><HiOutlinePencil className="size-4"/></button>}
      {editor && <Field className="absolute top-1 left-1 bg-zinc-50 p-3 m-1 rounded-lg">
        <Label >Título</Label>
        <Input name="url" placeholder="Ingrese el Título" onChange={e=> setVariable(e.target.value)}/>
        <TextController styles={styles} setStyles={setStyles}/>
        <Button type="submit" className="mx-1 my-2" onClick={save}>Guardar</Button>
        <Button className="mx-1 my-2" onClick={()=> setEditor(false)}>Cancelar</Button>
      </Field>}
      <Heading className="p-2" style={styles ? styles : null}>{content ? content : "Lorem ipsum dolor sit amet"} </Heading>
    </div>)
}