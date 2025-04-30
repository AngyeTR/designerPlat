import { HiOutlinePhotograph, HiOutlineLink, HiOutlineCash , HiOutlineFilm,  } from "react-icons/hi";
import { HiMiniH1 , HiMiniH3  } from "react-icons/hi2";
import { Button } from "./uikit/button";
import { useState, useRef } from "react";
import { Heading } from "./uikit/heading";

const dictionary =  {
    button: "Botón",
    text: "Texto",
    title: "Título ",
    image: "Imagen",
    video: "Video",
    comparer: "Comparador"}
 
const renderIcon = (type)=> {
    const icons = {
        button: <HiOutlineLink className="h-6 w-6" />,
        text: <HiMiniH3 className="h-6 w-6" />,
        title: <HiMiniH1 className="h-6 w-6" />,
        image: <HiOutlinePhotograph className="h-6 w-6"/>,
        video: <HiOutlineFilm className="h-6 w-6"/>,
        comparer: <HiOutlineCash  className="h-6 w-6" />}
        return icons[type]}

export const Controller = ({type, handleClick})=>{
    return (
        <div onClick={()=> handleClick(type)} 
        className="w-[100%]  sm:w-[90%] py-2 px-1 rounded-lg m-1 mx-2 justify-center justify-items-center bg-zinc-100 hover:border hover: border-zinc-500">
            <p className="hidden  sm:visible sm:block sm:text-[10px]">{dictionary[type]}</p>
            {renderIcon(type)}
        </div>)
}