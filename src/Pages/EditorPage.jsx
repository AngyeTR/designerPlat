import { useState, useEffect } from "react"
import { GridContainer } from "../components/GridContainer"
import { WidgetsContainer } from "../components/WidgetsContainer"
import { layouts } from "../utils/sampleData"
import { useParams } from "react-router-dom"

export const EditorPage=()=>{
    const params = useParams()
    const [layout, setLayout] = useState([])
    const [count, setCount] = useState(0)
    const [layoutColor, setLayoutColor] =  useState({})
    const layoutObj = layouts.filter(item => item.id == params.id)
    
    useEffect(() => {
        // const savedLayout = localStorage.getItem("grid-layout");
        // const savedColor = localStorage.getItem("grid-color");
        const savedLayout = layoutObj[0].content.replaceAll("'", "\"")
        const savedColor = layoutObj[0].styles.replaceAll("'", "\"")
        if (savedLayout) {
          const layout = JSON.parse(savedLayout);
          setCount(layout.length)
          layout.forEach((item) => {setLayout(layout)})
        }
        savedColor && setLayoutColor(JSON.parse(savedColor))
    }, [ ]);


    return(
        <div className=" h-screen w-screen sm:grid sm:grid-cols-7 gap-1 justify-items-center m-0 p-0 mt-5 ">
            <div className="w-[95vw] mb-4 sm:w-[15vw]  m-0 p-0 ">
                <WidgetsContainer  setItems={setLayout} items={layout} count={count} setCount={setCount} layoutColor={layoutColor}/>
            </div>
            <div className="w-[90vw] sm:w-[70vw] m-0 p-0 col-span-6 ">
                <GridContainer canEdit={true} setItems={setLayout} items={layout} count={count}  layoutColor={layoutColor} setLayoutColor={setLayoutColor} />
            </div>
        </div>
    )
}