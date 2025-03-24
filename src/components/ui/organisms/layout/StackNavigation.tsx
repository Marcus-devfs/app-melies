import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, Onboarding } from '../../../screens';
import MainTabNavigator from './MainTabNavigator';
import { useAppContext } from '../../../../contexts/AppContext';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    const { user, setUser } = useAppContext()

    return (

        <Stack.Navigator
            initialRouteName={user ? 'MainTabNavigator' : 'Onboarding'}
            screenOptions={{
                headerShown: false
            }}>
            {user && <>
                {LoggedInStackNavigator}
            </>
            }
            {!user &&
                <>
                    <Stack.Screen name="Onboarding" component={Onboarding} />
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

