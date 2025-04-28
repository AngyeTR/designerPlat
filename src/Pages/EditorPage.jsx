import { useState, useEffect } from "react"
import { GridContainer } from "../components/GridContainer"
import { WidgetsContainer } from "../components/WidgetsContainer"

export const EditorPage=()=>{
    const [layout, setLayout] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        const savedLayout = localStorage.getItem("grid-layout");
        if (savedLayout) {
          const layout = JSON.parse(savedLayout);
          setCount(layout.length)
          layout.forEach((item) => {setLayout(layout)})
        }}, []);

    return(
        <div className="h-screen sm:grid sm:grid-cols-2 justify-items-center mt-5">
            <div className="w-[40vw] bg-pink-400 m-0 p-6">
                <WidgetsContainer  setItems={setLayout} items={layout} count={count} setCount={setCount}/>
            </div>
            <div className="w-[50vw] m-0 p-0">
                <GridContainer canEdit={true} setItems={setLayout} items={layout}/>
            </div>
        </div>
    )
}