import { TouchableOpacity } from "react-native";
import { TextUI } from ".";
import { Colors } from "../organisms";
import { useAppContext } from "../../../contexts/AppContext";
import React from "react";


interface ButtonProps {
    secondary?: boolean;
    small?: boolean;
    large?: boolean;
    onPress?: () => void;
    text?: string;
    style?: any;
}

export const ButtonComponent: React.FC<ButtonProps> = (props) => {

    const { colorPalette, } = useAppContext()


    const {
        secondary = false,
        small = false,
        large = false,
        onPress = () => { },
        text = '',
        style = {},
    } = props;

    return (
        <TouchableOpacity
            style={{
                ...styles.buttonContainer,
                backgroundColor: colorPalette?.buttonColor,
                color: '#fff',
                ...(secondary && {
                    borderRadius: 30,
                    paddingHorizontal: small ? 5 : 15,
                    paddingVertical: small ? 5 : 15,
                    borderColor: 'lightgray',
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    marginTop: 10,
                    justifyContent: 'center',
                    width: '100%',
                    alignItems: 'center',
                    color: colorPalette.textColor
                }),
                ...(large && { width: '100%', maxWidth: 230 }),
                ...style,
            }}
            onPress={onPress}
        >
            <TextUI large={large} small={small} bold style={{ color: secondary ? 'gray' : '#fff' }}>{text}</TextUI>
        </TouchableOpacity>
    )
}

const styles = {
    buttonContainer: {
        padding: 15,
        borderRadius: 30,
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