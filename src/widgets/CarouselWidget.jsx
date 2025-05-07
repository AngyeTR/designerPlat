import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useState } from 'react';

export const CarouselWidget = (content, id, edit, editable) => {
    let items = [{url:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"},
        {url: null},
        {url:"https://wallpapers.com/images/high/autumn-streets-full-screen-hd-desktop-4pkhsz8q9vwm3g4y.webp"}]
    // content && (items = content)
  const [current, setCurrent] = useState(0);
  const prev = () => {setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));};
  const next = () => {setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));};
  return (
    <>
    { items.length == 0 ?  
      <div className="w-full flex  justify-self-center place-content-center bg-white/5"><img src="https://i.pinimg.com/736x/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg" alt="Image not available" className="h-80 w-80" /></div> :
      <div className={`relative rounded-lg overflow-hidden max-w-6xl mx-auto`}>
      <div className="w-[95%] mx-auto flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        { items.map((item, index) => (
          <div key={index} className="bg-white/20 w-full flex-shrink-0 p-4">
         <img src={item?.url ? item?.url : "https://i.pinimg.com/736x/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg"} className="h-full w-full object-cover" />
         </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"><HiChevronLeft/></button>
      <button onClick={next} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"><HiChevronRight/></button>
    </div>}
  </>
  );
};