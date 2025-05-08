import { useState } from "react";
import { Button } from "../components/uikit/button"
import { Field } from "./uikit/fieldset";
import { Label } from "./uikit/fieldset";
import { HiOutlineFilm } from "react-icons/hi";
import { Select} from "./uikit/select"
import { Modal } from "./Modal";
import { Input } from "./uikit/input";

export const ResourcesView = ({collection, data, setData})=> {
    const [file, setFile]  = useState(null)
    const [editor, setEditor] = useState(false)
    return ( 
        <>
        {collection ? 
            <div>
                <h1>{collection.name}</h1>
                {collection.data.length == 0 ? <h3 className="my-10">Esta colección aún no tiene recursos</h3>:
                <div className="flex  flex-wrap gap-2 p-6">
                    {collection.data.map(item=> 
                    <div onClick={()=>setFile(item)} className="border border-zinc-300 place-items-center m-1 w-[120px] rounded-lg h-[120px] p-1 hover:border-2 hover:border-zinc-500">
                        <p>{item.name}</p>
                        {item.type== "image" ?<img className="rounded-md size-[90px] p-1" src={item.url}/> :
                        <div className="rounded-md content-center size-[90px] p-1"><HiOutlineFilm className="justify-self-center size-16"/></div>}
                    </div>)}
                </div>}
                <Button className="block" onClick={()=>setEditor(true) }>Añadir archivo a la colección</Button>
            </div> 
            : <div className="h-[200px] content-center "><h3>Seleccione una colección para ver sus recursos</h3></div>}     
        {editor && 
                <Modal>
                    <Field className="w-md bg-zinc-50 p-5 m-3 rounded-lg shadow-xl border border-zinc-200">
                    <Label >Nuevo archivo</Label>
                    {/* <input  onChange={e=> (setVariable(prev => ({...prev, ["label"] : e.target.value})))}  placeholder="Ingrese Texto del Botón" className="block bg-white border border-zinc-600 rounded-lg my-2 px-1 w-sm text-sm py-1"/> */}
                    <Select className="my-1">
                        <option value={null}>Seleccione una colección</option>
                        {data.map(item => <option value={item.name}>{item.name}</option>)}
                    </Select>
                    <Select className="my-1">
                        <option value={null}>Seleccione una tipo de archivo</option>
                        <option value="image">Imagen</option>
                        <option value="video">Video</option>
                    </Select>
                    <Input type="file"  className="my-1"/>
                    <Input placeholder="Nombre del archivo"  className="my-1" />
                    <Button type="submit" className="mx-1 my-2" >Guardar</Button>
                    <Button className="mx-1 my-2" onClick={()=> setEditor(false)}>Cancelar</Button>
                </Field>
                </Modal> }
                {file && 
                <Modal>
                    <div className="h-fit w-fit">
                    {file.type == "image" ? <img className="h-lg w-lg block" src={file.url}/> :
                    <iframe src= {file.url} allow="autoplay; encrypted-media" allowFullScreen title="Video de presentación"className="w-xl h-xl"></iframe>}
                    <Button className="mx-1 my-2" onClick={()=> setFile(null)}>Cerrar</Button>
                    </div>
                </Modal> }
        </>
    )
}