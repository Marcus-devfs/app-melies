
import { Text } from 'react-native'
import { Colors } from '../organisms';
import { useAppContext } from '../../contexts/AppContext';

export const TextUI = (props) => {

    const {
        children,
        styles = {},
        bold = false,
        small = false,
        subTitle = false,
        title = false,
        large = false
    } = props;

    const { login, alert, theme, colorPalette } = useAppContext()


    return (
        <Text
            style={{
                color: colorPalette?.textColor ||
                    '#f0f0f0',
                fontWeight: bold ? 'bold' : '500',
                fontSize: 13,
                ...(small && { fontSize: 10 }),
                ...(subTitle && { fontSize: 15 }),
                ...(title && { fontSize: 18 }),
                ...(large && { fontSize: 20 }),
                ...styles,
            }}
        >
            {children}
        </Text>
    )
}