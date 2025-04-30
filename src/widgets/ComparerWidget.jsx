import React, { useState, useRef } from 'react';
import { Button } from "../components/uikit/button"
import { HiOutlinePencil } from "react-icons/hi";
import { Input } from "../components/uikit/input"
import { Field, Label } from "../components/uikit/fieldset" 

export const ComparerWidget = ({ content, id, edit, editable }) => {
  const [editor, setEditor] = useState(false)
  const [variable, setVariable] =  useState({label:"", url:""})
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef(null);
  const beforeImg = content?.before ? content.before : "https://future-store-con.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0652%2F0268%2F3956%2Ffiles%2FWyOuIma.jpg%3Fv%3D1718300094&w=384&q=80"
  const afterImg = content?.after ? content.after : "https://future-store-con.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0652%2F0268%2F3956%2Ffiles%2FFfjoQ9g.jpg%3Fv%3D1718300060&w=384&q=80"

  const save = ()=> {
          edit(id, variable)
          setEditor(false)}

  const handleSliderChange = (e) => {setSliderValue(e.target.value)}

  return (
    <>
    {(!editor && editable )&& <button onClick={()=>setEditor(true)} className="absolute top-1 right-10 bg-blue-500 text-white px-2 py-1  h-6 text-[6px] rounded z-300 hover:border hover:border-zinc-500 cursor-pointer"><HiOutlinePencil className="size-4"/></button>}
    {editor && <Field className="absolute top-1 left-1 bg-zinc-50 p-3 m-1 rounded-lg z-40">
        <Label >Comparador</Label>
        <Input  onChange={e=> (setText(prev => ({...prev, ["before"] : e.target.value})))}  placeholder="Ingrese URl de imagen del Antes" className="block bg-white border border-zinc-600 rounded-lg my-2 px-1"/>
        <Input  onChange={e=> setText(prev => ({...prev, ["after"] : e.target.value}))} placeholder="Ingrese URl de imagen del Después" className="block my-2 bg-white border border-zinc-600 rounded-lg px-1"/>
        <Button type="submit" className="mx-1 my-2" onClick={save}>Guardar</Button>
        <Button className="mx-1 my-2" onClick={()=> setEditor(false)}>Cancelar</Button>
      </Field>}
    <div className="slider-container relative w-[100%] h-[100%] overflow-hidden rounded-[8px]" ref={containerRef}>
      <img src={beforeImg} alt="Before" className="slider-image  absolute top-0 left-0 w-[100%] h-[100%] object-cover" />
      <div className="after-image-wrapper absolute top-0 left-0 h-[100%] w-[100%] overflow-hidden z-1"
        style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}>
        <img src={afterImg} alt="After" className='w-[100%] h-[100%] object-cover'  />
      </div>
      <input type="range" min="0" max="100" value={sliderValue} onChange={handleSliderChange}
        className="slider-range b absolute bottom-[15px] left-[50%] -translate-x-[50%] w-[80%] z-20 opacity-80"/>
      <div
        className="slider-handle absolute top-0 bottom-0 w-[2px] bg-black border border-amber-50 z-1 -translate-x-[50%]"
        style={{ left: `${sliderValue}%` }}/>
    </div>
    </>
  );
};
