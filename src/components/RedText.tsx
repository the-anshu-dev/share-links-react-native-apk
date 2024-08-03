import { Text } from "react-native"
import { RedTextProps } from "../utils/interfaceProps"

const RedText :React.FC<RedTextProps> = ({text, fs, fw})=>{
    return(
        <Text style={{color:'red', fontWeight:fw, fontSize:fs}}>
            {text}
        </Text>
    )
}
export default RedText