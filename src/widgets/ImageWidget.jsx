export const ImageWidget = ({content})=>{
    console.log(content)
    const url = content ? String(content) : "https://i.pinimg.com/736x/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg"
    console.log(url)
    return (
        <div className={`min-w-[100px] min-h-[100px] w-[100%] h-[100%] bg-[url(${url})] 
            bg-center bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url('${url}')` }}/>
    )}