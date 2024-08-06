import { Text } from "react-native"
import { RedTextProps } from "../utils/interfaceProps"
import { Color } from "../utils/globalstyles"

const RedText :React.FC<RedTextProps> = ({text, fs, fw})=>{
    return(
        <Text style={{color:Color.logoYellow, fontWeight:fw, fontSize:fs}}>
            {text}
        </Text>
    )
}
export default RedText