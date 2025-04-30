export const Widget = ()=>{
    return (
        <div style={{backgroundColor: "red", width: "100%", minWidth: "20px", height:"100%"}}>
            <div 
            style={{
                backgroundImage: 'url("https://i.pinimg.com/736x/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "100%" // asegúrate de tener altura para que se vea
            }}>
            {/* <button onClick={()=> console.log("eliminar")}>eliminar</button>
            <h2>Test </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur repudiandae aut eos fugiat, harum similique qui ratione fugit possimus maxime sit quia ullam id maiores! Asperiores iste provident ratione.</p>
        */}
            {/* <img className={{width: "100%", }} src="https://i.pinimg.com/736x/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg"/> */}
            </div>
             </div>
    )
}