import { StatusBar } from "react-native";
import { useAppContext } from "../../contexts/AppContext";


export const StatusBarComponent = (props) => {

    const { theme, colorPalette, } = useAppContext()

    return (
        <StatusBar barStyle={theme ? "dark-content" : "light-content"} />
    )
}
