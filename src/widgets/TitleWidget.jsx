import { Heading } from "../components/uikit/heading"

export const TitleWidget = ({content})=>{
    console.log(content)
    return (
    <div className="bg-zinc-100 py-3 px-2 rounded-lg m-0 self-center items-center">
        <Heading>{content ? content : "Lorem ipsum dolor sit amet"} </Heading>
    </div>)
}