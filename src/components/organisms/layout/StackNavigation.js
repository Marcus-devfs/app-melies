import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../../screens';
import MainTabNavigator from './MainTabNavigator';
import { useAppContext } from '../../../contexts/AppContext';

const Stack = createNativeStackNavigator();

export default function StackNavigation(){
    const {user, setUser} = useAppContext()

    return (

        <Stack.Navigator
            initialRouteName="Signin"
            screenOptions={{
                headerShown: false
            }}>
            {user && <>
                {LoggedInStackNavigator}
            </>
            }
            {!user &&
                <>
                    <Stack.Screen name="SignIn" component={SignIn} />
                </>
            }
        </Stack.Navigator>

    )
}

const LoggedInStackNavigator =
    <>
        <Stack.Screen
            name="MainTabNavigator"
            component={MainTabNavigator}
            options={{ headerShown: false }}
        />
    </>

