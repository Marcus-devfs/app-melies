import { StatusBar } from "react-native";
import { useAppContext } from "../../../contexts/AppContext";
import React from "react";


export const StatusBarComponent: React.FC = () => {

    const { theme } = useAppContext()

    return (
        <StatusBar barStyle={theme ? "dark-content" : "light-content"} />
    )
}
