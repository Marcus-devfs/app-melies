import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { Avatar, ButtonComponent, Spacer, TextUI } from '../../ui/atoms'
import { Body, Colors } from '../../ui/organisms'
import { useAppContext } from '../../../contexts/AppContext';
import { MaterialIcons } from '@expo/vector-icons';
import { iconMap, menuItems } from '../../../helpers/mockups';

export function Dashboard() {

    const { colorPalette } = useAppContext()

    const screenWidth = Dimensions.get('window').width;


    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <Avatar source={require('../../../../assets/icons/perfil.jpg')} />
                            <TextUI large bold style={{ color: '#FFF' }}>Olá, Marcus</TextUI>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <TextUI style={{ color: '#FFF' }}>Ter, 25 de Mar</TextUI>
                            <MaterialIcons name='notifications' size={25} color='#FFF' />
                        </View>

                    </View>
                    <TextUI style={{ color: '#FFF', marginTop: 25, marginLeft: 5 }}>O que está precisando Hoje?</TextUI>
                    <View style={{
                        position: 'absolute', width: '100%', height: 300, top: 180,
                        left: 20, right: 0,
                        zIndex: 99
                    }}>
                        <Image source={require('../../../../assets/background/background-dash.jpg')}
                            style={{
                                width: '100%', height: '100%', resizeMode: 'cover',
                                borderRadius: 16,
                            }}
                        />

                        <View style={{
                            position: 'absolute',
                            width: '100%',
                            bottom: 0,
                            gap: 7,
                            padding: 20,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor semitransparente para dar sombra
                            borderRadius: 8, // Bordas arredondadas (opcional)
                        }}>
                            <TextUI bold large style={{ color: '#FFF' }}>Bem-Vindo(a) ao app aluno Méliês!</TextUI>
                            <TextUI style={{ color: '#FFF', textAlign: 'center', fontSize: 16 }}>Agora, você pode acompanhar suas notas, frequência e boletim por aqui.</TextUI>
                            <ButtonComponent text='Começar!' style={{ marginTop: 15 }} />
                        </View>
                    </View>
                </View>
                <Body>
                    <View style={{ height: 30, marginTop: 220 }}></View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <TextUI bold large>Acesso Rápido</TextUI>
                        <Spacer size={20} />
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 12 }} // Para adicionar espaço entre os cards
                            style={{ paddingVertical: 10 }}
                        >
                            {menuItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index}
                                        style={{
                                            width: screenWidth - 100,  // Cada card ocupa a largura total da tela menos a margem
                                            backgroundColor: colorPalette.secondary,
                                            height: 200,  // Defina a altura dos cards conforme necessário
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 8,
                                            gap: 8,
                                            marginHorizontal: 5, // Adiciona uma pequena margem entre os cards
                                            shadowColor: colorPalette.textColor,  // Sombra
                                            shadowOffset: { width: 0, height: 3 },  // Sombra com deslocamento
                                            shadowOpacity: 0.29,  // Intensidade da sombra
                                            shadowRadius: 4.65,  // Raio da sombra
                                            elevation: 7,  // Para Android
                                            paddingHorizontal: 25
                                        }}>
                                        <Image source={iconMap[item.icon]} style={{ width: 50, height: 50 }} />
                                        <TextUI bold subTitle style={{ color: colorPalette.textColor, textAlign: 'center' }}>{item?.text}</TextUI>
                                        <TextUI>{item?.description}</TextUI>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <Spacer size={8} />
                </Body >
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        height: 240,
        width: '100%',
        backgroundColor: Colors.darkSecondary,
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingTop: 60,
        gap: 6
    },
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

