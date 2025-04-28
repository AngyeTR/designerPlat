import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { ImageWidget } from './widgets/ImageWidget';
import { TextWidget } from './widgets/TextWidget';
import { GridContainer } from "../src/components/GridContainer"
import { Button } from './components/uikit/button';
import { TitleWidget } from './widgets/TitleWidget';
import { ButtonWidget } from './widgets/ButtonWidget';

function App() {
  const [items, setItems] = useState([])
  const itemsRef = useRef(new Map())
  const [canEdit, setCanEdit] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const savedLayout = localStorage.getItem("grid-layout");
    if (savedLayout) {
      const layout = JSON.parse(savedLayout);
      setCount(layout.length)
      layout.forEach((item) => {
        setItems(layout)
      })
    }}, []);

  const getMap = ()=>{return itemsRef.current}

  const addWidget = (type, content)=>{
    setItems([...items,{id: `${type}-${count}`, h:"2" , w:"2", content:content}]);
    setTimeout(()=>{grid.makeWidget(getMap().get(count))}, 5)
    setCount(prev => prev+1)
  }

  const removeWidget = (id) => {setItems((prev) => prev.filter((w) => w.id !== id));
  
  if (grid) {const el = document.getElementById(id)
      if (el) { grid.removeWidget(el)}}}
      
    const saveLayout = () => {
      const layout = grid.save(false)
      layout.forEach((item, index) => {item.content = items[index].content})
      localStorage.setItem("grid-layout", JSON.stringify(layout))};

  useEffect(()=>{
    window.location.origin.split(":")[2] != "5173" ? setCanEdit(true): setCanEdit(false)
    grid = GridStack.init({float: true, cellHeight: 100, margin: 1, staticGrid: !canEdit, disableResize: !canEdit, disableDrag: !canEdit})
    return () => {grid.destroy(false)}
  },[ items, canEdit])

  return (
    <>
    <Button onClick={()=>addWidget("image")}>Añadir Imagen</Button>
    <Button onClick={()=>addWidget("title")}>Añadir Titulo</Button>
    <Button onClick={()=>addWidget("title", "Nuevo titulo")}>Añadir Nuevo Titulo</Button>
    <Button onClick={()=>addWidget("text")}>Añadir Texto</Button>
    <Button onClick={()=>addWidget("button")}>Añadir Boton</Button>
    <Button onClick={()=>saveLayout()}>Guardar cambios</Button>
    <div className='grid-stack w-[80vw] border border-zinc-900 h-[80vh]' >
    {items.map((cat)=>
    (
      <div className='grid-stack-item' gs-w={cat?.w} gs-h={cat?.h} key={cat?.id} gs-id={cat.id} gs-x={cat.x} gs-y={cat.y} gs-content={cat.content}
      ref={(node)=>{
        const map = getMap();
        if(node){
          map.set((cat.id), node)
        } else {map.delete(cat.id)}
        }}>
          <div className='grid-stack-item-content content-center min-w-[50px] min-h-[20px]' >
            {canEdit && <button 
            onClick={() => removeWidget(( cat.id))}
            className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded">
              ✕
              </button>}
        {(cat.id.split("-")[0]) == "image" ? <ImageWidget /> : 
        (cat.id.split("-")[0]) == "text" ? <TextWidget/> : 
        (cat.id.split("-")[0]) == "title" ? <TitleWidget content={cat.content}/> : <ButtonWidget />}
    </div>
  </div> )
)}
  </div>   
  </>)}

export default App
