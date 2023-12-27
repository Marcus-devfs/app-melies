import { StatusBar, View } from "react-native";
import { useAppContext } from "../../contexts/AppContext";


export const Spacer = ({size = 2}) => {

    const { theme, colorPalette, } = useAppContext()

    return (
       <View style={{margin: size * 1.2}}>
       </View>
    )
}
