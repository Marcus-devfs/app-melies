import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dashboard } from '../../screens';
import { useAppContext } from '../../../contexts/AppContext';

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
                        <View style={focused && styles.bar} />
                        <Ionicons name='home-outline' size={30} color={focused ? '#748A45' : '#C2C2C2'} />
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
            <Ionicons name='search-outline' size={30} color={'#fff'} />
         </View>
      </TouchableOpacity>
   );
}

const CustomTabBarButton = ({ focused, icon, showBar }) => {
   return (
      <View style={styles.buttonContainer}>
         <Ionicons name={icon} size={30} color={'#fff'} />
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

