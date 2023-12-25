import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dashboard } from '../../screens';
import { useAppContext } from '../../../contexts/AppContext';
import { TextUI } from '../../atoms';
import { UserProfile } from '../../screens/User/UserProfile';

export default function MainTabNavigator({ navigation, route }) {
   const { login, alert, theme, colorPalette } = useAppContext()

   const Tab = createBottomTabNavigator();
   const initialTabScreen = route.params?.screen || 'Dashboard';

   return (
      <Tab.Navigator
         initialRouteName={initialTabScreen}
         screenOptions={({ route }) => {
            const { height } = Dimensions.get('window');

            return {
               tabBarStyle: {
                  borderTopWidth: 0,
                  backgroundColor: colorPalette?.secondary,
                  height: height >= 812 ? 80 : 80,
                  paddingTop: 10,
               },
               tabBarShowLabel: false,
               headerShown: false,
            };
         }}
      >
         <Tab.Screen name="Dashboard" component={Dashboard}
            options={{
               tabBarIcon: ({ focused, color, size }) => {
                  return (
                     <>
                        <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                        <Ionicons name='home-outline' size={25} color={focused ? colorPalette.buttonColor : '#C2C2C2'} />
                        <TextUI small>Home</TextUI>
                     </>
                  );
               }
            }}
         />
         <Tab.Screen name="Financeiro" component={Dashboard}
            options={{
               tabBarIcon: ({ focused, color, size }) => {
                  return (
                     <>
                        <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                        <Image
                           style={{
                              width: 25,
                              height: 25,
                              marginBottom: 5,
                              tintColor: focused ? colorPalette.buttonColor : (theme ? 'black' : 'white'), // Ajusta o filtro para branco ou preto
                           }}
                           source={require('./../../../../assets/icons/financeiro.png')}
                        />
                        <TextUI small>Financeiro</TextUI>
                     </>
                  );
               }
            }}
         />
         <Tab.Screen name="Boletim" component={Dashboard}
            options={{
               tabBarIcon: ({ focused, color, size }) => {
                  return (
                     <>
                        <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                        <Image
                           style={{
                              width: 30,
                              height: 25,
                              marginBottom: 5,
                              tintColor: focused ? colorPalette.buttonColor : (theme ? 'black' : 'white'), // Ajusta o filtro para branco ou preto
                           }}
                           source={require('./../../../../assets/icons/boletim.png')}
                        />
                        <TextUI small>Boletim</TextUI>
                     </>
                  );
               }
            }}
         />
         <Tab.Screen name="Cronograma" component={Dashboard}
            options={{
               tabBarIcon: ({ focused, color, size }) => {
                  return (
                     <>
                        <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                        <Image
                           style={{
                              width: 30,
                              height: 25,
                              marginBottom: 5,
                              tintColor: focused ? colorPalette.buttonColor : (theme ? 'black' : 'white'), // Ajusta o filtro para branco ou preto
                           }}
                           source={require('./../../../../assets/icons/cronograma.png')}
                        />
                        <TextUI small>Cronograma</TextUI>
                     </>
                  );
               }
            }}
         />
         <Tab.Screen name="Meus Dados" component={UserProfile}
            options={{
               tabBarIcon: ({ focused, color, size }) => {
                  return (
                     <>
                        <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                        <Image
                           style={{
                              width: 20,
                              height: 20,
                              marginBottom: 5,
                              marginTop: 5,
                              tintColor: focused ? colorPalette.buttonColor : (theme ? 'black' : 'white'), // Ajusta o filtro para branco ou preto
                           }}
                           source={require('./../../../../assets/icons/meus_dados.png')}
                        />
                        <TextUI small>Meus dados</TextUI>
                     </>
                  );
               }
            }}
         />

      </Tab.Navigator>
   );
}

const SearchButton = ({ onPress }) => {
   return (
      <TouchableOpacity onPress={onPress}>
         <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#748A45',
            width: 49,
            height: 49,
            borderRadius: 49,
            marginHorizontal: 18,
            padding: 10,
            elevation: 5, // Sombra para o botão
            marginTop: -10, // Ajuste a margem superior para cima
         }}>
            <Ionicons name='search-outline' size={25} color={'#fff'} />
         </View>
      </TouchableOpacity>
   );
}

const CustomTabBarButton = ({ focused, icon, showBar }) => {
   return (
      <View style={styles.buttonContainer}>
         <Ionicons name={icon} size={25} color={'#fff'} />
         {focused && showBar && <View style={styles.bar} />}
      </View>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 15,
      paddingTop: 15,
      backgroundColor: 'lightGray'
   },
   bar: {
      height: 4,
      width: 35,
      backgroundColor: '#748A45', // Cor da barra
      position: 'absolute',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      top: -10
   },
});

