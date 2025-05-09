import { useState } from "react";
import { Field } from "./uikit/fieldset";
import { Label } from "./uikit/fieldset";
import { Select} from "./uikit/select"
import { Input } from "./uikit/input";
import { Button } from "../components/uikit/button";
import { getBase64 } from "../utils/actions";
import { postImage, postFile } from "../API/api";

export const NewResourceForm = ({setEditor, data})=>{
    const user = {email: "angie.rodriguez@tambora.co", companyId: 1}
    const [file, setFile] = useState(false)
    const [dataSet, SetDataSet] = useState({  isActive: true, createdBy: user.email, modifiedBy:	user.email, idCompany: user.companyId,})
    const [error, setError] = useState(false)

    const saveFile=(file)=> {
        setFile(file)
        SetDataSet(prev => ({...prev, ["name"] : file.name}))}

    const save = async ()=>
    {   
        let base64 = null
        try {
            console.log(dataSet.name)
            base64 = await getBase64(file).then(res => {return res})
            const data ={name: dataSet["name"], "base64": base64, "imageType": 2}
            const url  = await postImage(data).then(res => {return res})
            dataSet["url"] = url
            console.log(dataSet)
            const res  = await postFile(dataSet)
            res?.isValid ? setEditor(false) : setError(res?.errorMessages[0])
        } catch (error) {setError("algo salió mal. Intenta de nuevo") }     
    }

    return (
    <Field className="w-md bg-zinc-50 p-5 m-3 rounded-lg shadow-xl border border-zinc-200">
        <Label >Nuevo archivo</Label>
        <Select className="my-1" onChange={e=> SetDataSet(prev => ({...prev, ["idFolder"] : parseInt(e.target.value)}))}>
            <option value={null}>Seleccione una colección</option>
            {data.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </Select>
        <Select className="my-1" onChange={e=> SetDataSet(prev => ({...prev, ["type"] : e.target.value}))}>
            <option value={null}>Seleccione una tipo de archivo</option>
            <option value="image" key="image">Imagen</option>
            <option value="video" key="video">Video</option>
        </Select>
        <input className="rounded-lg border border-zinc-300 my-1 h-[50px] p-1 w-full" type="file" accept="image/*" onChange={(e)=>saveFile(e.target.files[0])}/>
        {error  && <p className="text-red-600 pt-5 ">Ups! Algo salió mal: {error}</p> }
        { file && <Input placeholder={file.name}  className="my-1" onChange={e=>SetDataSet(prev => ({...prev, ["name"] : e.target.value}))}/>}
        <Button type="submit" className="mx-1 my-2" onClick={save} >Guardar</Button>
        <Button className="mx-1 my-2" onClick={()=> setEditor(false)}>Cancelar</Button>
    </Field>
    )
}


