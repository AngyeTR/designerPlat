import { useState, useEffect } from "react"
import { LayoutsTable } from "../components/LayoutsTable"
import { Fieldset, Label } from "../components/uikit/fieldset";
import { Input } from "../components/uikit/input";
import { Select } from "../components/uikit/select";
import { products, layouts } from "../utils/sampleData";
import { Button } from "../components/uikit/button";
import { Divider} from "../components/uikit/divider"
import { useNavigate } from "react-router-dom";

export const HomePage = ()=>{
    const nav = useNavigate()
    
    useEffect(() => {}, []);
    return (
        <div className="w-[90vw] justify-items-center mt-5" >
            <div className="justify-items-start">
                <Fieldset className="grid grid-cols-5 gap-1  w-full m-6 max-w-xl">
                <Input className="col-span-2 h-fit mt-6 " placeholder=" Nombre del Layout"/>
                <Select  className="col-span-2">
                    <option>Seleccione un Producto</option>
                    {products.map(product => <option value={product.id}>{product.name}</option>)}
                </Select>
                <Button className="h-fit mt-6 ">Crear </Button>
            </Fieldset>
             <Fieldset className="grid grid-cols-5 gap-1 max-w-xl  w-full m-6">
                <Select  className="col-span-2">
                    <option>Seleccione un Layout</option>
                    {layouts.map(layout => <option value={layout.id}>{layout.name}</option>)}
                </Select>
                <Button className="h-fit ">Clonar </Button>
            </Fieldset>
             <Button onClick={()=>nav("/resources")} className="h-fit mb-6 mx-6 justify-self-start justifyself-left">Ver recursos </Button>
            </div>
            <Divider />
            <LayoutsTable/>
        </div>
    )
}