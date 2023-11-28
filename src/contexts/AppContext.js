import React, { createContext, useContext, useEffect, useState } from 'react'
import { Colors } from '../components/organisms';

export const AppContext = createContext({});

export function AppProvider({ children }) {

    const [loading, setLoading] = useState(null)
    const [user, setUser] = useState(false)
    const [alert, setAlert] = useState()
    const [colorPalette, setColorPalette] = useState({
        primary: '',
        secondary: '',
        third: '',
        buttonColor: '',
        inputColor: '',
        textColor: ''
    })
    const [theme, setTheme] = useState(true)
    const startLoading = async (loading = { msg: 'Carregando...' }) => {
        setLoading(loading)
        return
    }

    const stopLoading = async () => {
        setLoading(null)
        return
    }

    const colorsThem = () => {
        setColorPalette({
            primary: theme ? Colors.clearPrimary : Colors.darkPrimary,
            secondary: theme ? Colors.clearSecondary : Colors.darkSecondary,
            third: theme ? Colors.clearThird : Colors.darkThird,
            buttonColor: theme ? Colors.clearButton : Colors.darkButton,
            inputColor: theme ? Colors.clearInput : Colors.darkInput,
            textColor: theme ? Colors.clearText : Colors.darkText,
        })
    }

    useEffect(() => {
        colorsThem();
    }, [theme])

    return (
        <AppContext.Provider value={{
            loading,
            startLoading,
            stopLoading,
            setAlert,
            alert,
            colorPalette,
            setColorPalette,
            theme,
            setTheme,
            user, setUser
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => useContext(AppContext)