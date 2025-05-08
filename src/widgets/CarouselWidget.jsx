import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi";
import { useState } from 'react';
import { Field } from "../components/uikit/fieldset";
import { Input } from "../components/uikit/input";
import { Button } from "../components/uikit/button";
import { Label } from "../components/uikit/fieldset";
import { Modal } from "../components/Modal";

export const CarouselWidget = (content, id, edit, editable) => {
  const [editor, setEditor] = useState(false)
    let items = [{url:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"},
        {url: null},
        {url:"https://wallpapers.com/images/high/autumn-streets-full-screen-hd-desktop-4pkhsz8q9vwm3g4y.webp"}]
    // content && (items = content)
  const [current, setCurrent] = useState(0);
  const prev = () => {setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));};
  const next = () => {setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));};

  const save = ()=> {
    edit(id, variable)
    setEditor(false)}
    
  return (
    <>
    { items.length == 0 ?  
      <div className="w-full flex  justify-self-center place-content-center bg-white/5">        
        <button onClick={()=>setEditor(true)} className="absolute top-1 right-10 bg-blue-500 text-white px-2 py-1  h-6 text-[6px] rounded z-300 hover:border hover:border-zinc-500 cursor-pointer"><HiOutlinePencil className="size-4"/></button>
        <img src="https://i.pinimg.com/736x/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg" alt="Image not available" className="h-80 w-80" /></div> :
      <div className={`relative rounded-lg overflow-hidden max-w-6xl mx-auto`}>
        <button onClick={()=>setEditor(true)} className="absolute top-1 right-10 bg-blue-500 text-white px-2 py-1  h-6 text-[6px] rounded z-300 hover:border hover:border-zinc-500 cursor-pointer"><HiOutlinePencil className="size-4"/></button>
      <div className="w-[95%] mx-auto flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        { items.map((item, index) => (
          <div key={index} className="bg-white/20 w-full flex-shrink-0 p-4">
         <img src={item?.url ? item?.url : "https://i.pinimg.com/736x/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg"} className="h-full w-full object-cover" />
         </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"><HiChevronLeft/></button>
      <button onClick={next} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"><HiChevronRight/></button>
    </div>}
    {editor  && (
           <Modal > 
            <Field className="w-md bg-zinc-50 p-5 m-3 rounded-lg shadow-xl border border-zinc-200">
                <Label >Carusel</Label>
                <Input name="url" placeholder="Ingrese URL de la imagen" onChange={e=> setVariable(e.target.value)}/>
                <Button type="submit" className="mx-1 my-2" onClick={save}>Guardar</Button>
                <Button className="mx-1 my-2" onClick={()=> setEditor(false)}>Cancelar</Button>
            </Field>
           </Modal>
          )}   
  </>
  );
};