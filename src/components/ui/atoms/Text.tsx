
import { Text } from 'react-native'
import { useAppContext } from '../../../contexts/AppContext';
import React from 'react';

interface TextProps {
    children: React.ReactNode;
    style?: any;
    bold?: boolean;
    small?: boolean;
    subTitle?: boolean;
    title?: boolean;
    large?: boolean;
}

export const TextUI: React.FC<TextProps> = (props) => {

    const {
        children,
        style = {},
        bold = false,
        small = false,
        subTitle = false,
        title = false,
        large = false
    } = props;

    const { colorPalette } = useAppContext()


    return (
        <Text
            style={{
                color: colorPalette?.textColor ||
                    '#f0f0f0',
                fontWeight: bold ? 'bold' : '500',
                fontSize: 14,
                ...(small && { fontSize: 9 }),
                ...(subTitle && { fontSize: 15 }),
                ...(title && { fontSize: 18 }),
                ...(large && { fontSize: 20 }),
                ...style,
            }}
        >
            {children}
        </Text>
    )
}