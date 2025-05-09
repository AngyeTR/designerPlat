import { useState } from "react";
import { Button } from "../components/uikit/button"
import { HiOutlineFilm } from "react-icons/hi";
import { Modal } from "./Modal";
import { NewResourceForm } from "./NewResourceForm";

export const ResourcesView = ({collection, data})=> {
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
                    <NewResourceForm data={data} setEditor={setEditor}/>
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