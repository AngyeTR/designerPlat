import { Text} from "../components/uikit/text"

export const TextWidget = ({content})=>{
    console.log( content)
    return (
    <div className="bg-zinc-100 py-3 px-2 rounded-lg self-center items-center">
        <Text>{content ? content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur repudiandae aut eos fugiat, harum similique qui ratione fugit possimus maxime sit quia ullam id maiores! Asperiores iste provident ratione."}</Text>
    </div>)
}