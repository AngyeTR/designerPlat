import { useEffect, useRef, useState } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { TextWidget } from "../widgets/TextWidget";
import { ImageWidget } from "../widgets/ImageWidget";
import ReactDOM from "react-dom/client";

// export const  GridContainer = ({ widgets }) =>{
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const grid = GridStack.init(
//       {
//         float: true,
//         cellHeight: 100,
//         margin: 5
//       },
//       gridRef.current
//     );

//     return () => {
//       grid.destroy(false); // elimina el grid cuando el componente se desmonta
//     };
//   }, []);

//   return (
//     <div className="grid-stack" ref={gridRef} style={{width: "50vw" , border: "1px solid black", height: "80vh"}}>
//       {widgets.map((widget, i) => (
//         <div
//           key={i}
//           className="grid-stack-item"
//           gs-x={widget.x}
//           gs-y={widget.y}
//           gs-w={widget.w}
//           gs-h={widget.h}
//         >
//           <div className="grid-stack-item-content">
//             {widget.component}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


export const  GridContainer= () =>{
    const gridRef = useRef(null);
    const [grid, setGrid] = useState(null);
    const [widgets, setWidgets] = useState([]);
  
    useEffect(() => {
      const g = GridStack.init({ float: true, cellHeight: 120 }, gridRef.current);
      setGrid(g);
  
      return () => g.destroy(false);
    }, []);
  
    const addWidget = (type) => {
      const id = Date.now();
      const newWidget = {
        id,
        x: 0,
        y: 0,
        w: 4,
        h: 2,
        component: renderComponentByType(type, id),
      };
      setWidgets((prev) => [...prev, newWidget]);

      const newId = Date.now(); 
      const newEl = document.createElement("div");
      newEl.className = "grid-stack-item";
      newEl.setAttribute("data-id", newId);
      newEl.setAttribute("gs-w", "4");
      newEl.setAttribute("gs-h", "2");
      
      const content = document.createElement("div");
      content.className = "grid-stack-item-content";
      
      const mountPoint = document.createElement("div");
      
      // Renderiza tu componente React
      ReactDOM.createRoot(mountPoint).render(renderComponentByType(type, newId));
      
      content.appendChild(mountPoint);
      newEl.appendChild(content);
      const gridContainer = document.querySelector(".grid-stack");
      gridContainer.appendChild(newEl);
        grid.makeWidget(newEl);
    };
  
    const renderComponentByType = (type, id) => {
      switch (type) {
        case "text":
          return <TextWidget title={`text ${id}`} />;
        case "image":
          return <ImageWidget title={`image ${id}`}/>;
        default:
          return <div>Componente genérico</div>;
      }
    };
  
    return (
      <>
        <div className="flex gap-4 my-4">
          <button onClick={() => addWidget("text")} className="bg-blue-500 text-white px-4 py-2 rounded">
            Agregar Texto
          </button>
          <button onClick={() => addWidget("image")} className="bg-green-500 text-white px-4 py-2 rounded">
            Agregar Imagen
          </button>
        </div>
  
        <div className="grid-stack" ref={gridRef} style={{width: "50vw" , border: "1px solid black", height: "80vh"}}>
          {widgets.map((w) => (
            <div
              key={w.id}
              className="grid-stack-item"
              data-id={w.id}
              gs-x={w.x}
              gs-y={w.y}
              gs-w={w.w}
              gs-h={w.h}
              style={{backgroundColor: "blue", width: "100%", height:"100%", minWidth: "100px", minHeight: "50px"}}
            >
              <div className="grid-stack-item-content" style={{width: "100%"}}>{w.component}</div>
            </div>
          ))}
        </div>
      </>
    );
  }