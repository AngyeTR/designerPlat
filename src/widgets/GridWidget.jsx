import { useEffect, useRef } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import { ImageWidget } from './ImageWidget';
import { TextWidget } from "./TextWidget"
import { TitleWidget } from './TitleWidget';
import { ButtonWidget } from './ButtonWidget';
import { VideoWidget } from './VideoWidget';
import { ComparerWidget } from './ComparerWidget';
import { GridContainer } from '../components/GridContainer';


export const GridWidget = () => {
  const subgridRef = useRef(new Map())
  const gridRef = useRef(null);
  const items = [
    {content: "text", id: "title-10", w: 12, x:0, y: 0}, 
    {content: "title", id: "title-12", w: 12, x:0, y: 0},
    {content: "texto de prueba de layout", id: "text-11", w: 12, x:0, y: 0}
  ]
  const canEdit=true
  const getMap = ()=>{return subgridRef.current}
  const removeWidget = (id) => {setItems((prev) => prev.filter((w) => w.id !== id));
  if (subgrid) {const el = document.getElementById(id)
      if (el) { subgrid.removeWidget(el)}}}


      useEffect(()=>{
        // subgrid = GridStack.init({float: true, cellHeight: 100, margin: 1, staticGrid: !canEdit, disableResize: !canEdit, disableDrag: !canEdit})
        const subgrid = GridStack.init({
            float: true,
            cellHeight: 80,
            column: 8,
          }, gridRef.current);
          subgrid.addWidget({ w: 1, h: 1, content: 'Sub widget 1' });
          subgrid.addWidget({ w: 1, h: 1, content: 'Sub widget 2' });
        return () => {grid.destroy(false)}
      },[ items])

   

const render=(item)=>{
    const type = item.id.split("-")[0]
    const dictionary = {
      image: <ImageWidget content={item.content}/>,
      text:  <TextWidget content={item.content}/>,
      title: <TitleWidget content={item.content}/>, 
      button: <ButtonWidget content={item.content} /> , 
      video: <VideoWidget content={item.content}/> ,
      comparer: <ComparerWidget content={item.content}/>}
   return dictionary[type]}

  return (
    <div ref={gridRef} className="grid-stack subgrid" />
    //  <GridContainer canEdit={false} items={items}/>
    // <div className='grid-stack w-full border border-zinc-900 bg-amber-300 h-[80vh]' >
    
    //  <div className="grid-stack-item" gs-w="4" gs-h="2">
    //   <div className="grid-stack-item-content ">
    //     <div ref={subgridRef} className="grid-stack subgrid bg-blue-300 w-[100%]" >


    //     </div>
    //   </div>
    // </div> 

    //  {items?.map((cat)=>
    // (
    //   <div className='grid-stack-item' gs-w={cat?.w} gs-h={cat?.h} key={cat?.id} gs-id={cat.id} gs-x={cat.x} gs-y={cat.y} gs-content={cat.content}
    //   ref={(node)=>{
    //     console.log(cat)
    //     const map = getMap();
    //     console.log(map)
    //     if(node){
    //       map.set((cat?.id), node)
    //     } else {map.delete(cat?.id)}
    //     }}>
    //       <div className='grid-stack-item-content content-center min-w-[50px] min-h-[20px] h-full' >
    //         {canEdit && <button onClick={() => removeWidget(( cat.id))}
    //         className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded z-300">
    //           ✕ </button>}
    //         {render(cat)}
          
    //         </div>
    //     </div> ))}  
    //  </div>
  );
};