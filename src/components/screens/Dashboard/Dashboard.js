import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { ButtonComponent, TextUI } from '../../atoms'
import { Body, Colors, Header } from '../../organisms'
import themeIcon from './../../../../assets/icons/theme_icon.png';
import themeIconDark from './../../../../assets/icons/theme_icon_dark.png';
import backgroundImageClear from '../../../../assets/background/login-clean.png';
import backgroundImageDark from '../../../../assets/background/login-dark.png';
import faviconClear from './../../../../assets/icons/favicon_clear.png';
import faviconDark from './../../../../assets/icons/favicon_dark.png';
import { useAppContext } from '../../../contexts/AppContext';

export function Dashboard({ navigation, route = {} }) {

    const { theme, setUser } = useAppContext()

    const colorIcon = theme ? themeIcon : themeIconDark;
    const backgroundImage = theme ? backgroundImageClear : backgroundImageDark;
    const favicon = theme ? faviconClear : faviconDark;

    return (
        <>
            <Header title={'Inicio'}/>
            <Body>
                {/* <Image style={{ position: "absolute", bottom: 40, left: 50 }} source={favicon} /> */}
           <ButtonComponent text="Fazer login" onPress={() => setUser(false)}/>
            </Body>
        </>
    )
}

const styles = StyleSheet.create({
    safeAreaTop: {
        backgroundColor: '#557316'
    },
    safeAreaBottom: {
        // flex: 1,
        backgroundColor: Colors.darkSecondary,
        justifyContent: 'center',

    },
    container: {
        flex: 1,
        backgroundColor: '#557316'
    },
    logoContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
        backgroundColor: '#557316'
    },
    logotipo: {
        width: 70,
        height: 85
    },
    fieldsContainer: {

        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
        paddingBottom: 30,
        width: 350,
        height: 550,
        position: "absolute",
        borderTopLeftRadius: 20,
        justifyContent: "start",
        borderTopRightRadius: 20,
        borderRadius: 15
    },
    registryButton: {
        marginTop: 40
    },
    input: {
        marginTop: 20,
        padding: 20,
        color: Colors.darkText,
        borderRadius: 8,

    },
    submitButton: {
        backgroundColor: Colors.darkButton,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: "bold"
    },
    forgotPassworButton: {
        padding: 15,
        marginTop: 10,
        alignItems: 'center'
    },
    divider: {
        flex: 1
    },
    newAccountText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'gray',
        fontWeight: "bold"

    },
    newAccountButton: {
        borderRadius: 8,
        padding: 15,
        borderColor: Colors.darkButton,
        borderWidth: 2,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newAccountButtonText: {
        color: Colors.darkButton
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // ou 'contain' se preferir,
        alignItems: "center",
        justifyContent: "center",
    },
})

