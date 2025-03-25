import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';  // Importando o Swiper
import { ButtonComponent, TextUI } from '../../ui/atoms';
import { useAppContext } from '../../../contexts/AppContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Slide {
    title: string;
    description: string;
    image: any;
    button: boolean;
}

const { width: screenWidth } = Dimensions.get('window');

// Definindo os slides com imagens e textos
const slides: Slide[] = [
    {
        title: "Bem-vindo ao nosso app",
        description: "Agora você pode fazer seus pagamentos, solicitar documentos e muito mais!",
        image: require('../../../../assets/background/payment-logo.jpg'),
        button: false,
    },
    {
        title: "Acompanhe suas notas",
        description: "Agora, com o aplicativo do aluno, você pode acessar suas notas, frequencia e boletim.",
        image: require('../../../../assets/background/boletim-logo.jpg'),
        button: true,
    },
];

type RootStackParamList = {
    Onboarding: undefined;
    SignIn: undefined;
};

export function Onboarding() {
    const { colorPalette } = useAppContext();
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    // Renderizar cada item no swiper
    const renderItem = (item: Slide) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <TextUI style={styles.title}>{item.title}</TextUI>
            <TextUI style={styles.description}>{item.description}</TextUI>
            {item.button && (
                <ButtonComponent
                    large
                    style={{ paddingHorizontal: 20, marginTop: 20 }}
                    text="Fazer Login"
                    onPress={() => navigation.navigate('SignIn')}
                />
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Swiper
                showsPagination={true}  // Ativa a navegação por página
                onIndexChanged={(index) => setActiveIndex(index)}  // Atualiza o índice ativo
                activeDotColor={colorPalette?.buttonColor}  // Cor do ponto ativo
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 3,
                    backgroundColor: '#ccc',
                }}
                activeDotStyle={{
                    backgroundColor: colorPalette?.buttonColor,  // Cor do ponto ativo
                }}
                loop={false}  // Desativa o loop, para que o swiper pare na última página
            >
                {slides.map((item, index) => (
                    <View key={index}>
                        {renderItem(item)}
                    </View>
                ))}
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 60,
    },
    slide: {
        paddingTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 4,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        marginTop: 40,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#F9604B',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

