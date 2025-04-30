import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GridContainer } from "../components/GridContainer"
import { Button } from "../components/uikit/button"

export const HomePage = ()=>{
    const nav = useNavigate()
    const [layout, setLayout] = useState(null)    
    useEffect(() => {
        const savedLayout = localStorage.getItem("grid-layout");
        if (savedLayout) {
            const layout = JSON.parse(savedLayout);
            layout.forEach((item) => {
            setLayout(layout)})
            }}, []);
    return (
        <div className="w-[90vw] sm:w-[70vw] justify-self-center">
            <GridContainer canEdit={false} items={layout}/>
            <Button onClick={()=> nav("/editor")}>Editar</Button>
        </div>
    )
}