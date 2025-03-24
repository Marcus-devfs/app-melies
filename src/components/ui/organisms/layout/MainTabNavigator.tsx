import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Dashboard } from '../../../screens';
import { useAppContext } from '../../../../contexts/AppContext';
import { TextUI } from '../../atoms';
import { UserProfile } from '../../../screens/User/UserProfile';
import { Financial } from '../../../screens/Financial/Financial';

type MainTabNavigatorProps = {
   route: {
      params?: {
         screen?: string;
      };
   };
};

interface TabIconProps {
   focused: boolean;
   color: string;
   size: number;
}

const MainTabNavigator: React.FC<MainTabNavigatorProps> = ({ route }) => {
   const { theme, colorPalette } = useAppContext();

   const Tab = createBottomTabNavigator();
   const initialTabScreen = route.params?.screen || 'Dashboard';

   return (
      <Tab.Navigator
         initialRouteName={initialTabScreen}
         screenOptions={({ route }: any) => {
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
         <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
               tabBarIcon: ({ focused, color, size }: TabIconProps) => (
                  <View style={styles.barButton}>
                     <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                     <Ionicons
                        name="home-outline"
                        size={25}
                        color={focused ? colorPalette.buttonColor : '#C2C2C2'}
                     />
                     <TextUI small style={{ alignSelf: 'center' }}>Home</TextUI>
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="Financeiro"
            component={Financial}
            options={{
               tabBarIcon: ({ focused, color, size }: TabIconProps) => (
                  <View style={styles.barButton}>
                     <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                     <MaterialIcons
                        name="attach-money"
                        size={25}
                        color={focused ? colorPalette.buttonColor : '#C2C2C2'}
                     />
                     <TextUI small style={styles.tabLabel}>Financeiro</TextUI>
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="Boletim"
            component={Dashboard}
            options={{
               tabBarIcon: ({ focused, color, size }: TabIconProps) => (
                  <View style={styles.barButton}>
                     <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                     <MaterialIcons
                        name="event"
                        size={25}
                        color={focused ? colorPalette.buttonColor : '#C2C2C2'}
                     />
                     <TextUI small style={styles.tabLabel}>Boletim</TextUI>
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="Cronograma"
            component={Dashboard}
            options={{
               tabBarIcon: ({ focused, color, size }: TabIconProps) => (
                  <View style={styles.barButton}>
                     <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                     <MaterialIcons
                        name="event"
                        size={25}
                        color={focused ? colorPalette.buttonColor : '#C2C2C2'}
                     />
                     <TextUI small style={styles.tabLabel}>Cronograma</TextUI>
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="Meus Dados"
            component={UserProfile}
            options={{
               tabBarIcon: ({ focused, color, size }: TabIconProps) => (
                  <View style={styles.barButton}>
                     <View style={focused && { ...styles.bar, backgroundColor: colorPalette.buttonColor }} />
                     <MaterialIcons
                        name="person"
                        size={25}
                        color={focused ? colorPalette.buttonColor : '#C2C2C2'}
                     />
                     <TextUI small style={styles.tabLabel}>Meus dados</TextUI>
                  </View>
               ),
            }}
         />
      </Tab.Navigator>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 15,
      paddingTop: 15,
      backgroundColor: 'lightGray',
   },
   tabLabel: {
      textAlign: 'center',
      marginTop: 4, // Adiciona um pequeno espaço entre o ícone e o texto
   },
   bar: {
      height: 4,
      width: 35,
      backgroundColor: '#748A45', // Cor da barra
      position: 'absolute',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      top: -10,
   },
   barButton: {
      flexDirection: 'column', alignItems: 'center',
       width: 80, height: 35
   }
});

export default MainTabNavigator;
