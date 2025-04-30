import { Text} from "../components/uikit/text"

export const CustomTextWidget = ({content})=>{
    return (
    <div className="bg-zinc-100 py-3 px-2 rounded-lg self-center items-center">
        <Text>{content}</Text>
    </div>)
}