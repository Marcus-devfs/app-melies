import React, { useRef } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Spacer, TextUI } from '../../ui/atoms'
import { Body, Colors, Header } from '../../ui/organisms'
import { useAppContext } from '../../../contexts/AppContext';

export function Dashboard() {

    const { colorPalette } = useAppContext()

    const menuItems = [
        { id: '01', text: 'Meus Dados', icon: '', to: '' },
        { id: '02', text: 'Boletim', icon: '', to: '' },
        { id: '03', text: 'Atividade Complementar', icon: '', to: '' },
        { id: '04', text: 'Biblioteca', icon: '', to: '' },
        { id: '05', text: 'Financeiro', icon: '', to: '' },
        { id: '06', text: 'Calendário', icon: '', to: '' },
        { id: '07', text: 'Cronograma', icon: '', to: '' },
        { id: '08', text: 'Suporte', icon: '', to: '' },
        { id: '09', text: 'Documentos', icon: '', to: '' }
    ]

    const aulasDia = [
        { id: '01', nome_turma: 'BDL09', nome_disciplina: 'Desenho', professor: 'Fernando Silva', dia: '20/11' },
        { id: '02', nome_turma: 'BDL09', nome_disciplina: 'Luz, Textura e Render', professor: 'Renato Silva', dia: '20/11' },
        { id: '03', nome_turma: 'BDL09', nome_disciplina: 'Design gráfico', professor: 'João Silva', dia: '20/11' },
    ]


    return (
        <>
            <Header logo={true} />
            <Body>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, width: '100%', justifyContent: 'center' }}>
                        <TextUI bold>Bem vindo </TextUI>
                        <TextUI bold style={{ color: colorPalette?.buttonColor }}>Marcus, </TextUI>
                        <TextUI bold>ao app aluno Méliès! </TextUI>
                    </View>
                    <View style={{
                        display: 'flex', flexWrap: 'wrap', width: '100%',
                        maxHeight: 350,
                        alignItems: 'center',
                        marginTop: 15,
                        paddingHorizontal: 20,
                        shadowColor: colorPalette.textColor,
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 7,
                    }}>
                        {menuItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={{
                                    width: '29%',
                                    backgroundColor: colorPalette.buttonColor,
                                    margin: 8,
                                    height: 90,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 8
                                }}>
                                    <TextUI bold style={{ fontSize: 12, textAlign: 'center', paddingVertical: 5, paddingHorizontal: 2, color: '#fff' }}>{item?.text}</TextUI>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <Spacer size={8}/>
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

