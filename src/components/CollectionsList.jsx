import { useState } from "react"
import { Button } from "./uikit/button"
import { Modal } from "./Modal"
import { Label } from "./uikit/fieldset"
import { Input } from "./uikit/input"
import { Field } from "./uikit/fieldset"
import { postFolder } from "../API/api"

export const CollectionsList = ({collection, setCollection, data})=> {
    const user = {email: "angie.rodriguez@tambora.co", companyId: 1}

    const [editor, setEditor] = useState(null)
    const [dataSet, SetDataSet] = useState({files:[], isActive: true, createdBy: user.email, modifiedBy:	user.email, idCompany: user.companyId,})
    const [error, setError] = useState(false)
    const closeModal = ()=> {
        setEditor(false)
        setError(false)
    }

    const save= async()=>{
        try {
            const res  = await postFolder(dataSet)
            res?.isValid ? setEditor(false) : console.log(res)
            } catch (error) {setError("algo salió mal. Intenta de nuevo") }     }

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
            <Input name="url" placeholder="Ingrese Nombre de la colección" onChange={e=> SetDataSet(prev => ({...prev, ["name"] : e.target.value}))}/>
            <Button type="submit" className="mx-1 my-2" disabled={!dataSet.name} onClick={save}>Guardar</Button>
            <Button className="mx-1 my-2" onClick={closeModal}>Cancelar</Button>
            {error  && <p className="text-red-600 pt-5 ">Ups! Algo salió mal. Intenta de nuevo</p> }
        </Field>
    </Modal>}
        </div>
    )
}