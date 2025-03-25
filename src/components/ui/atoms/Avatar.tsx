import React from "react"
import { Image } from "react-native"

interface AvatarProps {
    source: any
}

export const Avatar: React.FC<AvatarProps> = ({ source }) => {
    return (
        <Image
            source={source}
            style={{ width: 50, height: 50, borderRadius: 25 }}
        />
    )
}