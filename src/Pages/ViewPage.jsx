import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GridContainer } from "../components/GridContainer"
import { Button } from "../components/uikit/button"
import { layouts } from "../utils/sampleData"

export const ViewPage = ()=>{
    const params = useParams()
    const nav = useNavigate()
    const [layout, setLayout] = useState(null) 
    const [color, setColor] = useState({backgroundColor: "#ffffff"}) 

    const layoutObj = layouts.filter(item => item.id == params.id)

    const navigate= ()=>{
        nav(`/editor/${params.id}`)
        nav(0)}  
    useEffect(() => {
        const savedLayout = layoutObj[0].content.replaceAll("'", "\"")
        const savedColor = layoutObj[0].styles.replaceAll("'", "\"")
        savedColor && setColor(JSON.parse(savedColor))
        if (savedLayout) {
            const layout = JSON.parse(savedLayout);
            layout.forEach((item) => {
            setLayout(layout)})
            }}, []);
    return (
        <div className="w-[90vw]  justify-self-center mt-5" >
            <GridContainer canEdit={false} items={layout} layoutColor={color}/>
            <Button className="mt-2" onClick={navigate}>Editar</Button>
        </div>
    )
}