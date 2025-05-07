import { HiOutlinePhotograph, HiOutlineLink, HiOutlineCash , HiOutlineFilm,  } from "react-icons/hi";
import { HiMiniH1 , HiMiniH3, HiOutlineSquaresPlus   } from "react-icons/hi2";
import { GrGallery } from "react-icons/gr";
import { LuGalleryHorizontal } from "react-icons/lu";


const dictionary =  {
    button: "Botón",
    text: "Texto",
    title: "Título ",
    image: "Imagen",
    video: "Video",
    comparer: "Comparador",
container: "Grid",
carousel: "Galería"}
 
const renderIcon = (type)=> {
    const icons = {
        button: <HiOutlineLink className=" size-4 sm:size-5" />,
        text: <HiMiniH3 className=" size-4 sm:size-5" />,
        title: <HiMiniH1 className=" size-4 sm:size-5" />,
        image: <HiOutlinePhotograph className=" size-4 sm:size-5"/>,
        video: <HiOutlineFilm className=" size-4 sm:size-5"/>,
        comparer: <HiOutlineCash  className=" size-4 sm:size-5" />,
        container: <HiOutlineSquaresPlus   className=" size-4 sm:size-5" />,
        carousel: <LuGalleryHorizontal   className=" size-4 sm:size-5" />,
    }
        return icons[type]}

export const Controller = ({type, handleClick})=>{
    return (
        <div onClick={()=> handleClick(type)} 
        className="w-[100%]  sm:w-[90%] py-2 px-1 rounded-lg m-1 mx-2 justify-center justify-items-center bg-zinc-100 hover:border hover: border-zinc-500">
            <p className="hidden  sm:visible sm:block sm:text-[10px]">{dictionary[type]}</p>
            {renderIcon(type)}
        </div>)
}