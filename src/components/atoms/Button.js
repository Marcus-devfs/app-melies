import { TouchableOpacity, View } from "react-native";
import { TextUI } from "../atoms";
import { Colors } from "../organisms";
import { useAppContext } from "../../contexts/AppContext";


export const ButtonComponent = (props) => {

    const { login, alert, theme, colorPalette, } = useAppContext()


    const {
        secondary = false,
        tertiary = false,
        small = false,
        large = false,
        overallSize = 'regular',
        onPress = () => { },
        text = '',
        style = {},
        closeButton = false,
    } = props;

    return (
        <TouchableOpacity
            style={{
                ...styles.buttonContainer,
                backgroundColor: colorPalette?.buttonColor,
                ...(secondary && {
                    borderRadius: 8,
                    padding: 15,
                    borderColor: colorPalette?.buttonColor,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }),
                ...(large && { width: '100%', maxWidth: 230 }),
                ...style,
            }}
            onPress={onPress}
        >
            <TextUI small={small} bold style={{ color: colorPalette?.textColor || '#fff' }}>{text}</TextUI>
        </TouchableOpacity>
    )
}

const styles = {
    buttonContainer: {
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 40
    },
    closeButtonContainer: {
        // backgroundColor: '#f0f0f0',
        borderRadius: '50%',
        width: 36,
        minWidth: 36,
        height: 36,
        minHeight: 36,
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&:hover": {
            backgroundColor: Colors.background,
            cursor: 'pointer'
        }
    }
}