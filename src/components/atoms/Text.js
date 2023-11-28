
import { Text } from 'react-native'
import { Colors } from '../organisms';
import { useAppContext } from '../../contexts/AppContext';

export const TextUI = (props) => {

    const {
        children,
        style = {},
    } = props;

    const { login, alert, theme, colorPalette } = useAppContext()


    return (
        <Text
            style={{color: colorPalette?.textColor || '#f0f0f0', ...style
            }}
        >
            {children}
        </Text>
    )
}