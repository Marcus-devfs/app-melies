import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { TextUI } from '../../atoms'
import { useAppContext } from '../../../../contexts/AppContext';
import { MaterialIcons } from '@expo/vector-icons';

interface HeaderProps {
    children?: React.ReactNode
    height?: number
    title?: string
    logo?: boolean
}

export const Header: React.FC<HeaderProps> = ({ children, height = 80, title, logo = false }) => {
    const { colorPalette } = useAppContext()

    return (
        <View style={{ ...styles.container, height, backgroundColor: colorPalette?.primary }}>
            <TouchableOpacity style={{ position: "absolute", top: 50, left: 30 }}>
                <MaterialIcons name="menu" size={30} />
            </TouchableOpacity>
            
            {/* Logo and Favicon Section */}
            {logo && (
                <TouchableOpacity style={{ position: "absolute", top: 50, right: 30 }}>
                    <Image style={{ width: 60, height: 40, resizeMode: 'contain' }} source={require('../../../../../assets/icons/favicon_clear.png')} />
                </TouchableOpacity>
            )}

            {title && <TextUI bold title style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</TextUI>}
            {children}
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
