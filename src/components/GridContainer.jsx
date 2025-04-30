import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { HiOutlineTrash } from "react-icons/hi";
import { useEffect, useRef, useState } from 'react'
import { ImageWidget } from '../widgets/ImageWidget';
import { TextWidget } from "../widgets/TextWidget"
import { TitleWidget } from '../widgets/TitleWidget';
import { ButtonWidget } from '../widgets/ButtonWidget';
import { VideoWidget } from '../widgets/VideoWidget';
import { ComparerWidget } from '../widgets/ComparerWidget';
import { GridWidget } from '../widgets/GridWidget';

export const GridContainer = ({canEdit, setItems, items})=> {
  const itemsRef = useRef(new Map())
  const getMap = ()=>{return itemsRef.current}
  const removeWidget = (id) => {setItems((prev) => prev.filter((w) => w.id !== id));
  if (grid) {const el = document.getElementById(id)
      if (el) { grid.removeWidget(el)}}}

  const editWidget = (id, content, style)=>{
    console.log(style, content)
    const newItem = items.filter((item)=> item.id == id )[0]
    newItem["content"] = content
    newItem["style"] = style
    const filteredItems = items.filter((item)=> item.id != id )
    filteredItems.push(newItem)
    setItems(filteredItems);
    setTimeout(()=>{grid.makeWidget(getMap().get(count))}, 5)
    console.log(newItem)
  }

  useEffect(()=>{
    grid = GridStack.init({float: true, cellHeight: 100, margin: 1, staticGrid: !canEdit, disableResize: !canEdit, disableDrag: !canEdit})
    console.log("items", items)
    return () => {grid.destroy(false)}
  },[ items])

  const render=(item, index)=>{
    const type = item.id.split("-")[0]
    const dictionary = {
      image: <ImageWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
      text:  <TextWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
      title: <TitleWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>, 
      button: <ButtonWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/> , 
      video: <VideoWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/> ,
      comparer: <ComparerWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
    container: <GridWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>
    }
   return dictionary[type]}

  return (
    <>
    <div className='grid-stack w-full border border-zinc-900 h-[80vh]' >
    {items?.map((cat, index)=>
    (
      <div className='grid-stack-item' gs-w={cat?.w} gs-h={cat?.h} key={cat?.id} gs-id={cat.id} gs-x={cat.x} gs-y={cat.y} gs-content={cat.content}
      ref={(node)=>{
        const map = getMap();
        if(node){
          map.set((cat.id), node)
        } else {map.delete(cat.id)}
        }}>
          <div className='grid-stack-item-content content-center min-w-[50px] min-h-[20px] h-full' >
            {canEdit && <button onClick={() => removeWidget(( cat.id))}
            className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded z-300">
           <HiOutlineTrash className="size-4" /></button>}
            {render(cat, index)}
            {/* <GridWidget /> */}
        <div className = "grid-stack-item" gs-w="4" gs-h="3" gs-sub-grid="true">
        <div className = "grid-stack-item-content"><div className='grid-stack subgrid'></div></div>

        </div>
            
            </div>
            
        </div> ))}
  </div>   
  </>)
  
}


