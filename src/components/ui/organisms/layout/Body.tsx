import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useAppContext } from '../../../../contexts/AppContext'
import { StatusBarComponent } from '../../atoms/StatusBar'

interface BodyProps {
    children: React.ReactNode
    padding?: number
}

export const Body: React.FC<BodyProps> = ({ children, padding = 20 }) => {
    const { colorPalette } = useAppContext()

    return (
        <View style={{ ...styles.container, backgroundColor: colorPalette?.primary }}>
            <StatusBarComponent />
            <View style={{ ...styles.dashboardContainer, paddingTop: padding }}>{children}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dashboardContainer: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flex: 1
    }
})