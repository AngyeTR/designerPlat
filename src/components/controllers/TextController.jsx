import { HiItalic, HiMiniBold, HiMiniUnderline, HiOutlineBars3BottomLeft, HiOutlineBars3 , HiOutlineBars3BottomRight   } from "react-icons/hi2";

export const TextController = ({styles, setStyles})=>{
    const fonts = ["Roboto", "Poppins", "Tagesschrift", "Nunito", "Monserrat", "Oxygen", "Monoton", "Emilys Candy", "Nosifer" , "VT323", "Audiowide", "Rubik Puddles", "Permanent Marker"]

    console.log(styles)
    const changeToggle =(variable, value)=>{
        if(styles[variable]){
        (styles[variable] == "none" || styles[variable] == "normal") ?
        (setStyles(prev => ({...prev, [variable] : value}))) :
        ( variable == "textDecoration") ? (setStyles(prev => ({...prev, [variable] : "none"}))) : (setStyles(prev => ({...prev, [variable] : "normal"})))
        }else {setStyles(prev => ({...prev, [variable] : value}))}
      }
      
    return (
    <div className="flex my-1 justify-center min-w-sm">
        <input onChange={e=> (setStyles(prev => ({...prev, ["fontSize"] : parseInt(e.target.value)})))} placeholder="Tamaño" type="number" min="8" max="32" className="h-6 w-[60px] text-xs border border-zinc-400 rounded-sm self-center mx-1"></input>
        <select onChange={e=> (setStyles(prev => ({...prev, ["fontFamily"] : e.target.value})))} placeholder="Fuente" type="number" min="8" max="32" className="h-6 w-[100px] text-xs border border-zinc-400 rounded-sm self-center mx-1">
            {fonts.map(font=> <option style={{fontFamily: font}}>{font}</option>)}
        </select>
        <div className="flex">
        <input onChange={e=> (setStyles(prev => ({...prev, ["color"] : e.target.value})))}  type="color" className="w-[20px]" />
        <input onChange={e=> (setStyles(prev => ({...prev, ["backgroundColor"] : e.target.value})))}  type="color" className="w-[20px]" />
        </div>
        <div className="flex">
        <HiItalic onClick={()=>changeToggle("fontStyle", "italic")} className={`self-center rounded-xs  mx-1 hover:border hover:border-zinc-300 ${styles["fontStyle"] == "italic" && "border border-zinc-700"}`} />
        <HiMiniBold onClick={()=>changeToggle("fontWeight", "bold")} className={`self-center rounded-xs mx-1  hover:border hover:border-zinc-300 ${styles["fontWeight"] == "bold" && "border border-zinc-700"}`} />
        <HiMiniUnderline onClick={()=>changeToggle("textDecoration", "underline")} className={`self-center rounded-xs mx-1  hover:border hover:border-zinc-300 ${styles["textDecoration"] == "underline" && "border border-zinc-700"}`}/>
        </div>
        <div className="flex">
        <HiOutlineBars3BottomLeft onClick={e=> (setStyles(prev => ({...prev, ["textAlign"] : "left"})))} className={`self-center rounded-xs  mx-1 hover:border hover:border-zinc-300 ${styles["textAlign"] == "left" && "border border-zinc-700"}`} />
        <HiOutlineBars3 onClick={e=> (setStyles(prev => ({...prev, ["textAlign"] : "center"})))} className={`self-center rounded-xs mx-1  hover:border hover:border-zinc-300 ${styles["textAlign"] == "center" && "border border-zinc-700"}`} />
        <HiOutlineBars3BottomRight onClick={e=> (setStyles(prev => ({...prev, ["textAlign"] : "right"})))} className={`self-center rounded-xs mx-1  hover:border hover:border-zinc-300 ${styles["textAlign"] == "right" && "border border-zinc-700"}`} />
        </div>
    </div>
    )
}













// export const TextController = ({ handleClick})=>{
//     const [text, setText] = useState(null)
//     const [color, setColor] = useState("#e28383")
//     const [backGround, setBackground] = useState("#e28383")
//     const [size, setSize] = useState(8)

//     return (
//         <div className=" p-3 rounded-lg m-1 justify-center justify-items-center bg-zinc-100 hover:border hover: border-zinc-500">
//             {/* <HiMiniH3 className={`w-${size} h-${size} ${tailwindColors[color]}`}/> */}
//             <HiMiniH3 className={`w-${size} h-${size} `} style={{color: color, backgroundColor: backGround}}/>
//             <input  onChange={e=> setText(e.target.value)} placeholder="Texto" className="block bg-white border border-zinc-600 rounded-lg my-2 px-1"/>
//             <div className="flex"> 
//                 <select onChange={e=> setSize(e.target.value)} className="h-6 w-8 text-xs">
//                     <option value={6}>XS</option>
//                     <option value={8}>S</option>
//                     <option value={12}>M</option>
//                     <option value={24}>L</option>
//                 </select>
//                 {/* <select onChange={e=> setColor(e.target.value)} className="w-[20]">
//                     <option value={0} className={tailwindColors[0]}></option>
//                     <option value={1} className={tailwindColors[1]}></option>
//                     <option value={2} className={tailwindColors[2]}></option>
//                     <option value={3} className={tailwindColors[3]}></option>
//                 </select> */}
//                 <input type="color" className="w-[30px]" onChange={e=> setColor(e.target.value)}/>
//                 <input type="color" className="w-[30px]" onChange={e=> setBackground(e.target.value)}/>
//                 <HiItalic /> <HiMiniBold/> <HiMiniUnderline/>
//             </div>
//             <Button className="block" onClick={()=>handleClick(type, text)} >Añadir</Button>
//         </div>)
// }