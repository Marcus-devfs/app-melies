import React, { useRef, useState } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ButtonComponent, Spacer, TextUI } from '../../atoms'
import { Body, Colors, Header } from '../../organisms'
import themeIcon from './../../../../assets/icons/theme_icon.png';
import themeIconDark from './../../../../assets/icons/theme_icon_dark.png';
import backgroundImageClear from '../../../../assets/background/login-clean.png';
import backgroundImageDark from '../../../../assets/background/login-dark.png';
import faviconClear from './../../../../assets/icons/favicon_clear.png';
import faviconDark from './../../../../assets/icons/favicon_dark.png';
import { useAppContext } from '../../../contexts/AppContext';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../organisms/Carousel';

export function Dashboard({ navigation, route = {} }) {

    const { theme, setUser, colorPalette } = useAppContext()
    const isCarousel = useRef(null)


    const colorIcon = theme ? themeIcon : themeIconDark;
    const backgroundImage = theme ? backgroundImageClear : backgroundImageDark;
    const favicon = theme ? faviconClear : faviconDark;

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

    const carouselImages = [
        {
            imgUrl: "https://adm-melies.s3.us-east-1.amazonaws.com/41d748b1363bf89035650168c56230a3-slide-5.jpg",
        },
        {
            imgUrl: "https://adm-melies.s3.us-east-1.amazonaws.com/50642ac270e8c5c4f86386647fd0b2d9-slide-3.jpg",
        },
    ];


    return (
        <>
            <Header logo={true} />
            <Body>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, width: '100%', justifyContent: 'center' }}>
                        <TextUI bold>Bem vindo </TextUI>
                        <TextUI bold styles={{ color: colorPalette?.buttonColor }}>Marcus, </TextUI>
                        <TextUI bold>ao app aluno Méliès! </TextUI>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Carousel
                            layout="stack"
                            layoutCardOffset={2}
                            ref={isCarousel}
                            data={carouselImages}
                            renderItem={CarouselCardItem}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            inactiveSlideShift={1}
                            useScrollView={true}
                        />
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
                                    <TextUI bold styles={{ fontSize: 12, textAlign: 'center', paddingVertical: 5, paddingHorizontal: 2, color: '#fff' }}>{item?.text}</TextUI>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    {/* <Image style={{ position: "absolute", bottom: 40, left: 50 }} source={favicon} /> */}
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 16,
                        backgroundColor: colorPalette?.secondary,
                        paddingHorizontal: 10,
                        marginHorizontal: 25, maxHeight: 200, overflow: 'hidden', flexWrap: 'nowrap',
                        position: 'relative',
                        shadowColor: colorPalette.textColor,
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 7,
                    }}>
                        <View style={{ textAlign: 'center', width: '100%', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                            <TextUI subTitle bold style={{ textAlign: 'center', width: '100%', alignItems: 'center', justifyContent: 'center' }}>Aulas do dia</TextUI>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            flexWrap: 'nowrap'
                        }}>
                            {aulasDia?.map((item, index) => {
                                const classDay = `${item?.nome_turma}-${item?.nome_disciplina}`;
                                return (
                                    <TouchableOpacity key={index} style={{
                                        display: 'flex', borderRadius: 8,
                                        backgroundColor: colorPalette?.primary,
                                        margin: 5,
                                        paddingHorizontal: 20, paddingVertical: 20,
                                        marginTop: 10
                                    }}>
                                        <View style={{ position: 'absolute', left: 15, top: -8, borderRadius: 16, backgroundColor: colorPalette?.buttonColor, paddingHorizontal: 5, paddingVertical: 3 }}>
                                            <TextUI styles={{ color: '#fff' }}>{item?.dia}</TextUI>
                                        </View>
                                        <TextUI bold>{classDay}</TextUI>
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <TextUI bold>1 professor: </TextUI>
                                            <TextUI>{item?.professor}</TextUI>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
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

