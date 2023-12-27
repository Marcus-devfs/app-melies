import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { TextUI } from '../../atoms'
import themeIcon from './../../../../assets/icons/theme_icon.png';
import themeIconDark from './../../../../assets/icons/theme_icon_dark.png';
<<<<<<< HEAD
import { useAppContext } from '../../../contexts/AppContext';

export const Header = ({ children, height = 80, title }) => {
    const { theme, setTheme , colorPalette} = useAppContext()
    const colorIcon = theme ? themeIcon : themeIconDark;


    return (
        <View style={{ ...styles.container, height, backgroundColor: colorPalette?.primary }}>
            <TextUI style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</TextUI>
            {children}
            <TouchableOpacity style={{ position: "absolute", top: 50, right: 50 }} onPress={() => setTheme(!theme)}>
=======
import menuIconClear from './../../../../assets/icons/menu.png';
import menuIconDark from './../../../../assets/icons/menu_dark.png';
import { useAppContext } from '../../../contexts/AppContext';
import faviconClear from './../../../../assets/icons/favicon_clear.png';
import faviconDark from './../../../../assets/icons/favicon_dark.png';

export const Header = ({ children, height = 80, title, logo = false }) => {
    const { theme, setTheme, colorPalette } = useAppContext()
    const colorIcon = theme ? themeIcon : themeIconDark;
    const menuIcon = theme ? menuIconClear : menuIconDark;
    const favicon = theme ? faviconClear : faviconDark;

    return (
        <View style={{ ...styles.container, height, backgroundColor: colorPalette?.primary }}>
            <TouchableOpacity style={{ position: "absolute", top: 50, left: 30 }} onPress={() => setTheme(!theme)}>
                <Image style={{ width: 30, height: 30 }} source={menuIcon} />
            </TouchableOpacity>
            {logo && <TouchableOpacity style={{}} onPress={() => setTheme(!theme)}>
                <Image style={{ width: 80, height: 30 }} source={favicon} />
            </TouchableOpacity>}
            {title && <TextUI bold title style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</TextUI>}
            {children}
            <TouchableOpacity style={{ position: "absolute", top: 50, right: 30 }} onPress={() => setTheme(!theme)}>
>>>>>>> add-screen-financial
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