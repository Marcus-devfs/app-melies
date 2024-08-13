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

export function Financial({ navigation, route = {} }) {

    const { theme, setUser, colorPalette } = useAppContext()
    const isCarousel = useRef(null)


    const colorIcon = theme ? themeIcon : themeIconDark;
    const backgroundImage = theme ? backgroundImageClear : backgroundImageDark;
    const favicon = theme ? faviconClear : faviconDark;

    const installments = [
        { id: '01', pagante: 'Marcus Silva', dia: '20/11/2023', nome_turma: 'TAL12', periodo: 'Manhã', valor: 1000, status: 'pago', tipoPagamento: 'Boleto', parcela: 1 },
        { id: '02', pagante: 'Marcus Silva', dia: '20/12/2024', nome_turma: 'TAL12', periodo: 'Manhã', valor: 1000, status: 'pendente', tipoPagamento: 'Boleto', parcela: 2 },
        { id: '03', pagante: 'Marcus Silva', dia: '20/01/2024', nome_turma: 'TAL12', periodo: 'Manhã', valor: 1000, status: 'pendente', tipoPagamento: 'Boleto', parcela: 3 },
        { id: '04', pagante: 'Marcus Silva', dia: '20/02/2024', nome_turma: 'TAL12', periodo: 'Manhã', valor: 1000, status: 'pendente', tipoPagamento: 'Boleto', parcela: 4 },
        { id: '05', pagante: 'Marcus Silva', dia: '20/03/2024', nome_turma: 'TAL12', periodo: 'Manhã', valor: 1000, status: 'pendente', tipoPagamento: 'Boleto', parcela: 5 },
        { id: '06', pagante: 'Marcus Silva', dia: '20/04/2024', nome_turma: 'TAL12', periodo: 'Manhã', valor: 1000, status: 'pendente', tipoPagamento: 'Boleto', parcela: 6 },

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

    const valueTotal = installments.map(item => item.valor).reduce((acc, curr) => acc + curr, 0)


    return (
        <>
            <Header title="Boletos e Parcelas" />
            <Body>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, width: '100%', justifyContent: 'flex-start', paddingHorizontal: 30 }}>
                    <TextUI bold>Você tem </TextUI>
                    <TextUI bold styles={{ color: 'red' }}>R$ {valueTotal}</TextUI>
                    <TextUI bold> em aberto.</TextUI>
                </View>
                <Spacer size={8} />

                {/* <Image style={{ position: "absolute", bottom: 40, left: 50 }} source={favicon} /> */}
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    flexWrap: 'nowrap',
                    paddingHorizontal: 20
                }}>
                    {installments?.map((item, index) => {
                        const classDay = `${item?.nome_turma}-${item?.periodo}`;
                        const colorStatus = item?.status === 'pago' ? 'green' : 'red';
                        const parcel = `${item?.parcela}X ${item?.valor}`;
                        return (
                            <TouchableOpacity key={index} style={{
                                display: 'flex', borderRadius: 12,
                                backgroundColor: colorPalette?.secondary,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: 5,
                                paddingHorizontal: 20, paddingVertical: 16,
                                marginTop: 10,
                                shadowColor: colorPalette.textColor,
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                shadowOpacity: 0.29,
                                shadowRadius: 4.65,
                                elevation: 7,
                            }}>
                                <View style={{ position: 'absolute', left: 15, top: -8, borderRadius: 16, backgroundColor: colorPalette?.buttonColor, paddingHorizontal: 5, paddingVertical: 3 }}>
                                    <TextUI bold small styles={{ color: '#fff' }}>vencimento - {item?.dia}</TextUI>
                                </View>
                                <View style={{ position: 'absolute', right: 5, top: -8, borderRadius: 16, backgroundColor: colorStatus, paddingHorizontal: 5, paddingVertical: 3, alignItems: 'center', justifyContent: 'center' }}>
                                    <TextUI bold small styles={{ color: '#fff', }}>{item?.status}</TextUI>
                                </View>
                                <View>
                                    <TextUI bold>{classDay}</TextUI>
                                    <Spacer />
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <TextUI bold>pagante: </TextUI>
                                        <TextUI>{item?.pagante}</TextUI>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{position: 'absolute', top: -12}}>
                                    <TextUI small style={{position: 'absolute', top: 10}}>{item?.tipoPagamento}</TextUI>
                                    </View>
                                    <TextUI subTitle bold >{parcel}</TextUI>
                                    <ButtonComponent small secondary={true} text="imprimir" style={{ width: 80, marginTop: 2 }} />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <Spacer size={8} />
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

