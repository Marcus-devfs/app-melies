import { View } from "react-native";
import { useAppContext } from "../../../contexts/AppContext";
import React from "react";

interface SpacerProps {
    size?: number
}

export const Spacer: React.FC<SpacerProps> = ({size = 2}) => {

    const { theme, colorPalette, } = useAppContext()

    return (
        <View style={{ height: size, backgroundColor: colorPalette?.primary }} />
    )
}
