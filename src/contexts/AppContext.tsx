import React, { createContext, useContext, useEffect, useState } from 'react';
import { Colors } from '../components/ui/organisms';

interface LoadingProps {
    msg: string;
}

interface AlertProps {
    type?: string;
    message?: string;
}

interface ColorPaletteProps {
    primary: string;
    secondary: string;
    third: string;
    buttonColor: string;
    inputColor: string;
    textColor: string;
}

interface AppContextProps {
    loading: LoadingProps | null;
    startLoading: (loading?: LoadingProps) => Promise<void>;
    stopLoading: () => Promise<void>;
    setAlert: React.Dispatch<React.SetStateAction<AlertProps | undefined>>;
    alert: AlertProps | undefined;
    colorPalette: ColorPaletteProps;
    setColorPalette: React.Dispatch<React.SetStateAction<ColorPaletteProps>>;
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
    user: boolean;
    setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultColorPalette: ColorPaletteProps = {
    primary: '',
    secondary: '',
    third: '',
    buttonColor: '',
    inputColor: '',
    textColor: ''
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const [loading, setLoading] = useState<LoadingProps | null>(null);
    const [user, setUser] = useState<boolean>(false);
    const [alert, setAlert] = useState<AlertProps | undefined>(undefined);
    const [colorPalette, setColorPalette] = useState<ColorPaletteProps>(defaultColorPalette);
    const [theme, setTheme] = useState<boolean>(true);

    const startLoading = async (loading: LoadingProps = { msg: 'Carregando...' }) => {
        setLoading(loading);
    };

    const stopLoading = async () => {
        setLoading(null);
    };

    const colorsThem = () => {
        setColorPalette({
            primary: theme ? Colors.clearPrimary : Colors.darkPrimary,
            secondary: theme ? Colors.clearSecondary : Colors.darkSecondary,
            third: theme ? Colors.clearThird : Colors.darkThird,
            buttonColor: theme ? Colors.clearButton : Colors.darkButton,
            inputColor: theme ? Colors.clearInput : Colors.darkInput,
            textColor: theme ? Colors.clearText : Colors.darkText
        });
    };

    useEffect(() => {
        colorsThem();
    }, [theme]);

    return (
        <AppContext.Provider
            value={{
                loading,
                startLoading,
                stopLoading,
                setAlert,
                alert,
                colorPalette,
                setColorPalette,
                theme,
                setTheme,
                user,
                setUser
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext deve ser usado dentro de um AppProvider');
    }
    return context;
};
