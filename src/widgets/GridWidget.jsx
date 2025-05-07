import { useEffect, useRef, useState } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import { ImageWidget } from './ImageWidget';
import { TextWidget } from "./TextWidget"
import { TitleWidget } from './TitleWidget';
import { ButtonWidget } from './ButtonWidget';
import { VideoWidget } from './VideoWidget';
import { ComparerWidget } from './ComparerWidget';

export const GridWidget = ({canEdit, id, content, edit}) => {
  let gridRef = useRef(null)
  let gridRef2 = useRef(new Map())
  const getMap2 = ()=>{return gridRef2.current}
  const initialItems = [
    {content: null, id: "image-10", w: 12, x:0, y: 0}, 
    {content: "Titulo de prueba de layout", id: "title-12", w: 12, x:1, y: 3},
    {content: "texto de prueba de layout", id: "text-11", w: 12, x:2, y: 0},
  ]
  const [items, setItems] = useState(initialItems)

  const subgrid = GridStack.init({ staticGrid: !canEdit, disableResize: !canEdit, disableDrag: !canEdit,
    float: true,
    cellHeight: 80,
    column: 4, nested:true, children: items
  },
   gridRef.current);

  const [count, setCount] = useState(items?.length)
  const getMap = ()=>{return gridRef.current}

const saveChanges = ()=>{
  const layout =  subgrid.save(false)
}

  const save = async(type)=> {
     await addWidget(type)
  }
  // useEffect(() => {
  //   if (items.length > 0 && canEdit) {
  //     edit(id, items); // solo cuando haya cambios reales
  //   }
  // }, [items]);

  const addWidget = async (type)=>{
    const newItem = {id: `${type}-${count}`, h:"1" , w:"1", content:null, style:null}
    setItems(prev => [...prev, newItem]);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setCount(prev => prev+1)
    console.log(items)
    edit(id, items)
    await new Promise(resolve => setTimeout(resolve, 2000))
}  

  const removeWidget = (id) => {setItems((prev) => prev.filter((w) => w.id !== id));
  // if (subgrid) {const el = document.getElementById(id)
  //     // if (el) { subgrid.removeWidget(el)}
  //   }
    }

      useEffect(()=>{
        const subgrid = GridStack.init({ staticGrid: !canEdit, disableResize: !canEdit, disableDrag: !canEdit,
          float: true,
          cellHeight: 80,
          column: 3, nested:true, children: items
        },
         gridRef.current);
        //  subgrid.load(items)
        return () => { 
          grid.destroy(false)}
      },[ , items])

   const editWidget  = ()=> console.log("editing")

const render=(item)=>{
    const type = item.id.split("-")[0]
    const dictionary = {
      image: <ImageWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
      text:  <TextWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
      title: <TitleWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>, 
      button: <ButtonWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/> , 
      video: <VideoWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/> ,
      comparer: <ComparerWidget content={item.content} id={item.id} edit={editWidget} editable={canEdit} style={item.style}/>,
    }
   return dictionary[type]}

 return ( 
  <>
  <div className='grid-stack w-full border border-zinc-400 h-[80vh]'>
  <button className='absolute z-50 top-0 right-10' onClick={()=>save("image")}>Add</button>
  {items?.map((cat, index)=>
  (
    <div className='grid-stack-item' gs-w={cat?.w} gs-h={cat?.h} key={cat?.id} gs-id={cat.id} gs-x={cat.x} gs-y={cat.y} gs-content={cat.content} gs-sub-grid={cat.id.split("-")[0] == "container" ? "true" : "false"}
    ref={(node)=>{
      const map = getMap2();
      console.log(map)
      if(node){
        map.set((cat.id), node)
        console.log(node, cat.id)
      } 
      else {map.delete(cat.id)}
      }}>
        <div className={`grid-stack-item-content ${(cat.id.split("-")[0] == "container" )&& "subgrid"} content-center min-w-[50px] min-h-[20px] h-full`} >
          {canEdit && <button onClick={() => removeWidget(( cat.id))}
          className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded z-300">
         x</button>}
          {render(cat, index)}
  </div>            
  </div> ))}
  </div>
  </>
  );
};


