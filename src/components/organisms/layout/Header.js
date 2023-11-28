import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { TextUI } from '../../atoms'
import themeIcon from './../../../../assets/icons/theme_icon.png';
import themeIconDark from './../../../../assets/icons/theme_icon_dark.png';
import { useAppContext } from '../../../contexts/AppContext';

export const Header = ({ children, height = 80, title }) => {
    const { theme, setTheme , colorPalette} = useAppContext()
    const colorIcon = theme ? themeIcon : themeIconDark;


    return (
        <View style={{ ...styles.container, height, backgroundColor: colorPalette?.primary }}>
            <TextUI style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</TextUI>
            {children}
            <TouchableOpacity style={{ position: "absolute", top: 50, right: 50 }} onPress={() => setTheme(!theme)}>
                <Image style={{ width: 30, height: 30 }} source={colorIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    }
})