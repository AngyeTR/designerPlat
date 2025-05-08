import { useState } from "react"
import { Button } from "./uikit/button"
import { Modal } from "./Modal"
import { Label } from "./uikit/fieldset"
import { Input } from "./uikit/input"
import { Field } from "./uikit/fieldset"

export const CollectionsList = ({collection, setCollection, data, setData})=> {
    const [editor, setEditor] = useState(null)
    const [newCollection, setNewCollection] = useState(null)
    console.log(data)
const save=()=>{
    console.log(newCollection)
    setData(prev => [...prev, {name:newCollection, data: [] }])
    setEditor(false)
}

    return ( 
        <div  className="border border-zinc-400 w-full m-1 rounded-lg p-1 pt-2">
        <h2>Colecciones</h2>
    <div className="  m-1">
    {data && data.map(col => <h3 onClick={()=> setCollection(col)} className="font-medium my-3 hover:underline">{col.name} <span className="text-xs">- {col.data.length} archivos</span></h3>)}</div>
    <Button onClick={()=>setEditor(true)}>Añadir Colección</Button>
    {editor && 
     <Modal >
        <Field   className="w-md bg-zinc-50 p-5 m-3 rounded-lg shadow-xl border border-zinc-200">
            <Label >Nueva Colección</Label>
            <Input name="url" placeholder="Ingrese Nombre de la colección" onChange={(e)=> setNewCollection(e.target.value)}/>
            <Button type="submit" className="mx-1 my-2" disabled={!newCollection || newCollection?.length==0} onClick={save}>Guardar</Button>
            <Button className="mx-1 my-2" onClick={()=> setEditor(false)}>Cancelar</Button>
        </Field>
    </Modal>}
        </div>
    )
}