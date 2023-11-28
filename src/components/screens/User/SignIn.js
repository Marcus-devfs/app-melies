import React, { useState } from 'react'
import { ImageBackground, View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { TextUI, ButtonComponent, TextInputField } from '../../atoms'
import { Colors } from '../../organisms'
import themeIcon from './../../../../assets/icons/theme_icon.png';
import themeIconDark from './../../../../assets/icons/theme_icon_dark.png';
import backgroundImageClear from '../../../../assets/background/login-clean.png';
import backgroundImageDark from '../../../../assets/background/login-dark.png';
import faviconClear from './../../../../assets/icons/favicon_clear.png';
import faviconDark from './../../../../assets/icons/favicon_dark.png';
import { useAppContext } from '../../../contexts/AppContext';

export function SignIn({ navigation, route = {} }) {

    const [showLogo, setShowLogo] = useState(true)
    const [userData, setUserData] = useState(true)
    const { user, setUser, theme, colorPalette, setTheme } = useAppContext()


    const onChange = ({ name, value }) => {
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const colorIcon = theme ? themeIcon : themeIconDark;
    const backgroundImage = theme ? backgroundImageClear : backgroundImageDark;
    const favicon = theme ? faviconClear : faviconDark;

    return (
        <>
            <StatusBar barStyle="light-content" />


            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <TouchableOpacity style={{ position: "absolute", top: 40, right: 50 }} onPress={() => setTheme(!theme)}>
                    <Image style={{ width: 40, height: 40 }} source={colorIcon} />
                </TouchableOpacity>
                <View style={{ ...styles.fieldsContainer, backgroundColor: colorPalette?.primary }}>
                    <TextUI style={styles.title}>Bem-vindo</TextUI>
                    <View style={{ position: "absolute", borderRadius: 12, backgroundColor: colorPalette?.buttonColor, paddingBottom: 2, paddingTop: 2, paddingLeft: 12, paddingRight: 12, alignItems: "center", justifyContent: "center", right: 80, top: 50 }}>
                        <TextUI style={{ color: '#fff', fontWeight: "bold", fontSize: 13 }}>ALUNO</TextUI>
                    </View>
                    <TextInputField
                        onChangeText={onChange}
                        value={userData?.email}
                        name='email'
                        placeholder='E-mail'
                        label='E-mail'
                        required
                        style={{
                            ...styles.input,
                            ...{ marginTop: 10 },
                            backgroundColor: !theme ? '#1B1829' : colorPalette?.primary,
                            color: !theme ? '#fff' : colorPalette?.textColor,
                            borderColor: theme ? '#000' : colorPalette?.inputColor,  // Utiliza a propriedade borderColor
                            borderWidth: 1
                        }}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        returnKeyType="next"
                        placeholderTextColor='#fff'
                        onBlur={() => setShowLogo(true)}
                        onFocus={() => setShowLogo(false)}
                    />

                    <TextInputField
                        onChangeText={onChange}
                        value={userData?.senha}
                        name='senha'
                        placeholder='Senha'
                        label='Senha'
                        required
                        style={{
                            ...styles.input,
                            ...{ marginTop: 10 },
                            backgroundColor: !theme ? '#1B1829' : colorPalette?.primary || '#ff00ff',
                            color: !theme ? '#fff' : colorPalette?.textColor,
                            borderColor: theme ? '#000' : colorPalette?.inputColor,  // Utiliza a propriedade borderColor
                            borderWidth: 1
                        }}
                        autoCapitalize='none'
                        keyboardType="visible-password"
                        textContentType="password"
                        placeholderTextColor='#fff'
                        onBlur={() => setShowLogo(true)}
                        onFocus={() => setShowLogo(false)}
                    />

                    <ButtonComponent text="Entrar" onPress={() => setUser(true)} />
                    <ButtonComponent secondary={true} text="Falar com suporte" />
                    <Image style={{ position: "absolute", bottom: 40, left: 50 }} source={favicon} />
                </View>
            </ImageBackground>
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
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20,
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

