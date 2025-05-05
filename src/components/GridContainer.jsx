import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { Field } from './uikit/fieldset';
import { HiOutlineTrash } from "react-icons/hi";
import { useEffect, useRef, useState } from 'react'
import { ImageWidget } from '../widgets/ImageWidget';
import { TextWidget } from "../widgets/TextWidget"
import { TitleWidget } from '../widgets/TitleWidget';
import { ButtonWidget } from '../widgets/ButtonWidget';
import { VideoWidget } from '../widgets/VideoWidget';
import { ComparerWidget } from '../widgets/ComparerWidget';
import { GridWidget } from '../widgets/GridWidget';

export const GridContainer = ({canEdit, setItems, items, count, layoutColor, setLayoutColor})=> { 
  console.log(layoutColor)
  const styles = {backgroundColor: layoutColor["backgroundColor"],  
      backgroundImage: `url('${layoutColor["backgroundImage"]}')`,  backgroundSize: 'cover',
      backgroundPosition: 'center', repeat: "no-repeat",  backgroundBlendMode: 'multiply' }
  const itemsRef = useRef(new Map())
  const getMap = ()=>{return itemsRef.current}
  const removeWidget = (id) => {setItems((prev) => prev.filter((w) => w.id !== id));
  if (grid) {const el = document.getElementById(id)
      if (el) { grid.removeWidget(el)}}}

  const editWidget = (id, content, style)=>{
    console.log(id, content)
    const newItem = items.filter((item)=> item.id == id )[0]
    const ind = items.findIndex(item => item.id === id)
    newItem["content"] = content
    newItem["style"] = style
    let filteredItems = [...items]
    filteredItems[ind] = newItem
    setItems(filteredItems);
    setTimeout(()=>{grid.makeWidget(getMap().get(count))}, 5)
  }

  useEffect(()=>{
    grid = GridStack.init({float: true, cellHeight: 50, column:4, acceptWidgets: true, columnOpts:{breakpoints:[{w:480, c:1}]},
      margin: 1, staticGrid: !canEdit, disableResize: !canEdit, disableDrag: !canEdit})
    return () => {grid.destroy(false)}
    console.log(items)
  },[ ,items])

  const render=(item)=>{
    const type = item.id.split("-")[0]
    const dictionary = {
      image: <ImageWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
      text:  <TextWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
      title: <TitleWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>, 
      button: <ButtonWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/> , 
      video: <VideoWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/> ,
      comparer: <ComparerWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
    container: <GridWidget content={item.content} id={item.id} edit={editWidget} canEdit={canEdit} style={item.style}/>
    }
   return dictionary[type]}

  return (
    <>
    <div className='grid-stack w-full border border-zinc-900 h-[80vh]' style={styles}>
      <div>
      {canEdit && <Field className="absolute flex -top-5 -left-3 bg-zinc-50 p-1 rounded-lg shadow-xl border border-zinc-200">
        <input onChange={e=> setLayoutColor(prev => ({...prev, ["backgroundColor"]: e.target.value}))}  type="color" className="w-[20px] h-[20px]" />
        <input onChange={e=> setLayoutColor(prev => ({...prev, ["backgroundImage"] : e.target.value  }))}  type="text" placeholder="URL fondo" className="w-[80px] h-[20px]" />
      </Field>}
            </div>
    {items?.map((cat, index)=>
    (
      <div className='grid-stack-item' gs-w={cat?.w} gs-h={cat?.h} key={cat?.id} gs-id={cat.id} gs-x={cat.x} gs-y={cat.y} gs-content={cat.content} gs-sub-grid={cat.id.split("-")[0] == "container" ? "true" : "false"}
      ref={(node)=>{
        const map = getMap();
        if(node){
          map.set((cat.id), node)
          console.log(node, cat.id)
        } else {map.delete(cat.id)}
        }}>
          <div className={`grid-stack-item-content ${(cat.id.split("-")[0] == "container" )&& "subgrid"} content-center min-w-[50px] min-h-[20px] h-full`} >
            {canEdit && <button onClick={() => removeWidget(( cat.id))}
            className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded z-300">
           <HiOutlineTrash className="size-4" /></button>}
            {render(cat, index)}
    </div>            
    </div> ))}
  
  </div>   
  </>)
}


