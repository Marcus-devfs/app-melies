import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'
import { TextUI, ButtonComponent, TextInputField } from '../../ui/atoms'
import { Colors } from '../../ui/organisms'
import { useAppContext } from '../../../contexts/AppContext';
import { UserData } from '../../../typesAndInterfaces';
import { MaterialIcons } from '@expo/vector-icons';

export function SignIn({ navigation, route = {} }: any) {

    const [showLogo, setShowLogo] = useState(true)
    const [userData, setUserData] = useState<UserData>({
        email: '',
        password: ''
    })
    const { setUser, theme, colorPalette } = useAppContext()


    const onChange = ({ name, value }: any) => {
        setUserData({
            ...userData,
            [name]: value
        })
    }

    return (
        <>
            <StatusBar barStyle="light-content" />

            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.goBack()}>
                    <MaterialIcons name='arrow-left' size={25} color={Colors.clearText} />
                </TouchableOpacity>
                <View style={{ ...styles.fieldsContainer, backgroundColor: !theme ? colorPalette?.primary : colorPalette?.secondary }}>

                    <View style={{ display: 'flex', width: `100%`, justifyContent: 'center', alignItems: 'center' }}>
                        <TextUI bold large style={styles.title}>Log in</TextUI>
                    </View>
                    <View style={{ marginTop: 30 }}>

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
                                backgroundColor: !theme ? '#1B1829' : colorPalette?.primary || '#fff',
                                color: !theme ? '#fff' : colorPalette?.textColor || '#fff',
                            }}
                            autoCapitalize='none'
                            onBlur={() => setShowLogo(true)}
                            onFocus={() => setShowLogo(false)}
                        />

                        <TextInputField
                            onChangeText={onChange}
                            value={userData?.password}
                            name='password'
                            placeholder='Senha'
                            label='Senha'
                            required
                            style={{
                                ...styles.input,
                                ...{ marginTop: 10 },
                                backgroundColor: !theme ? '#1B1829' : colorPalette?.primary || '#ff00ff',
                                color: !theme ? '#fff' : colorPalette?.textColor || '#fff',
                            }}
                            autoCapitalize='none'
                            onBlur={() => setShowLogo(true)}
                            onFocus={() => setShowLogo(false)}
                        />
                    </View>

                    <ButtonComponent text="Entrar" onPress={() => setUser(true)} style={{marginTop: 15}}/>
                    <View style={{ flexDirection: 'column', marginTop: 20, alignItems: 'center', width: '100%' }}>
                        <TextUI>Esqueceu sua senha?</TextUI>
                        <ButtonComponent secondary={true} text="Redefinir" style={{marginTop: 15}}/>
                    </View>
                </View>
                <View style={styles.logoContainer}>
                <Image style={{ width: 140, height: 65, alignSelf: 'center' }} source={require('../../../../assets/icons/favicon_clear.png')} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    safeAreaTop: {
        backgroundColor: '#557316'
    },
    arrowBack: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 8,
        width: 'auto',
        display: 'flex',
        maxWidth: 40,
        padding: 5,
        marginLeft: 8,
        marginTop: 8
    },
    safeAreaBottom: {
        // flex: 1,
        backgroundColor: Colors.darkSecondary,
        justifyContent: 'center',

    },
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
        backgroundColor: Colors.clearSecondary,
        gap: 5
    },
    logoContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    logotipo: {
        width: 70,
        height: 85
    },
    fieldsContainer: {
        justifyContent: "flex-start",
        width: '100%',
        height: 'auto',
        padding: 20,
        display: 'flex',
        paddingTop: 80
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    registryButton: {
        marginTop: 40
    },
    input: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 18,
        color: Colors.darkText,
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

