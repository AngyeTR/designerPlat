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
  // const initialItems = [
  //   // {content: null, id: "image-10", w: 12, x:0, y: 0}, 
  //   // {content: "Titulo de prueba de layout", id: "title-12", w: 12, x:1, y: 3},
  //   // {content: "texto de prueba de layout", id: "text-11", w: 12, x:0, y: 0},
  // ]
  const [items, setItems] = useState(content)

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
  console.log(layout)
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
    const newItem = {id: `${type}-${count}`, h:"4" , w:"4", content:null, style:null}
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
        return () => { 
          grid.destroy(false)}
      },[ items])

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
    <div className="grid-stack-item">
  <div className="grid-stack-item-content">
  <button className='absolute z-50 top-0 right-10' onClick={()=>save("image")}>Add</button>
  <button className='absolute z-50 top-0 left-1 bg-pink-600' onClick={()=>saveChanges()}>save</button>
    <div ref={gridRef} className="grid-stack grid-stack-nested subgrid">
    {console.log(items, content)}
    {items?.map((cat, index)=>
          (
            <div className='grid-stack-item prueba' gs-w={cat?.w} gs-h={cat?.h} key={cat?.id} gs-id={cat.id} gs-x={cat.x} gs-y={cat.y} gs-content={cat.content}
            gs-no-move="false"
            gs-no-resize="false"
            ref={(node)=>{
              const map = getMap();
              if(node){
                // map.set((cat.id), node)
                console.log(node, cat.id)
              }
              //  else {map.delete(cat.id)}
               }} >
                <div className='grid-stack-item-content content-center min-w-[50px] min-h-[20px] h-full' >
                  {canEdit && <button onClick={() => removeWidget(( cat.id))}
                  className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded z-300">
                 X</button>}
                 
                  {render(cat, index)}
              {/* <div className = "grid-stack-item" gs-w="4" gs-h="3" gs-sub-grid="true">
              <div className = "grid-stack-item-content"><div className='grid-stack subgrid'></div>
              </div>
              </div> */}
          </div>            
          </div>
           )
        )}
        {items.map(item =>console.log(item))}
    </div>
  </div>
</div>
  );
};

