import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { useEffect, useRef, useState } from 'react'
import { ImageWidget } from '../widgets/ImageWidget';
import { TextWidget } from "../widgets/TextWidget"
import { Button } from "../components/uikit/button"
import { TitleWidget } from '../widgets/TitleWidget';
import { ButtonWidget } from '../widgets/ButtonWidget';
import { useNavigate } from 'react-router-dom';

export const GridContainer = ({canEdit, setItems, items})=> {
  const itemsRef = useRef(new Map())
  const nav = useNavigate()
  const getMap = ()=>{return itemsRef.current}
  const removeWidget = (id) => {setItems((prev) => prev.filter((w) => w.id !== id));
  
  if (grid) {const el = document.getElementById(id)
      if (el) { grid.removeWidget(el)}}}

  useEffect(()=>{
    grid = GridStack.init({float: true, cellHeight: 100, margin: 1, staticGrid: !canEdit, disableResize: !canEdit, disableDrag: !canEdit})
    return () => {grid.destroy(false)}
  },[ items])

  return (
    <>
    <div className='grid-stack w-full border border-zinc-900 h-[80vh]' >
    {items?.map((cat)=>
    (
      <div className='grid-stack-item' gs-w={cat?.w} gs-h={cat?.h} key={cat?.id} gs-id={cat.id} gs-x={cat.x} gs-y={cat.y} gs-content={cat.content}
      ref={(node)=>{
        const map = getMap();
        if(node){
          map.set((cat.id), node)
        } else {map.delete(cat.id)}
        }}>
          <div className='grid-stack-item-content content-center min-w-[50px] min-h-[20px] h-full' >
            {canEdit && <button 
            onClick={() => removeWidget(( cat.id))}
            className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded">
              ✕
              </button>}
        {(cat.id.split("-")[0]) == "image" ?  <ImageWidget content={cat.content}/> : 
        (cat.id.split("-")[0]) == "text" ? <TextWidget content={cat.content}/> : 
        (cat.id.split("-")[0]) == "title" ? <TitleWidget content={cat.content}/> : <ButtonWidget />}
    </div>
  </div> )
)}
  </div>   
  </>)}


