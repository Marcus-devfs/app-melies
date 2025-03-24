import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import {  TextUI } from '../../ui/atoms'
import { Body, Colors, Header } from '../../ui/organisms/index.tsx'
import { useAppContext } from '../../../contexts/AppContext';
import { MaterialIcons } from '@expo/vector-icons';

export function UserProfile() {

    const { theme, setUser, colorPalette, setTheme } = useAppContext()
    const menuItems = [
        { id: '01', text: 'Meus Dados', icon: '', to: '' },
        { id: '02', text: 'Configurações', icon: '', to: '' },
        { id: '03', text: 'Chat', icon: '', to: '' },
        { id: '04', text: 'Alterar senha', icon: '', to: '' },
    ]

    const accessButtons = [
        { id: '01', text: 'Suporte', to: '', icon: 'headset' },
        { id: '02', text: 'Tema', to: '', icon: 'brightness-6', onClick: () => setTheme(!theme) },
        { id: '03', text: 'Sair', to: '', icon: 'logout', onClick: () => setUser(false) }
    ];


    return (
        <>
            <Header title={'Meus Dados'} />
            <Body>
                <View style={{ flexDirection: 'row', backgroundColor: colorPalette?.buttonColor, paddingVertical: 25, paddingHorizontal: 20 }}>
                    <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                        <TextUI style={{ color: 'white' }}>Olá,</TextUI>
                        <TextUI bold title style={{ color: 'white' }}>Marcus Silva</TextUI>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', paddingVertical: 30, paddingHorizontal: 30,
                 justifyContent: 'center', }}>
                    {accessButtons?.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={{
                                backgroundColor: colorPalette?.secondary, paddingHorizontal: 10,
                                paddingVertical: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '33%',
                                marginHorizontal: 5,
                                borderRadius: 8,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }} onPress={item?.onClick}>
                                <View>
                                <MaterialIcons name={item.icon as keyof typeof MaterialIcons.glyphMap} size={24} color="black" />
                                </View>
                                <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                                    <TextUI bold>{item?.text}</TextUI>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                         shadowColor: '#000',
                         shadowOffset: {
                             width: 0,
                             height: 2,
                         },
                         shadowOpacity: 0.25,
                         shadowRadius: 3.84,
                         elevation: 5,
                    }}>
                        {menuItems?.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={{
                                    width: '100%',
                                    paddingHorizontal: 15,
                                    paddingVertical: 20,
                                    borderWidth: .5,
                                    borderColor: colorPalette?.primary,
                                    backgroundColor: colorPalette?.secondary
                                }}>
                                    <TextUI>{item?.text}</TextUI>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </Body >
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
        justifyContent: "flex-start",
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

