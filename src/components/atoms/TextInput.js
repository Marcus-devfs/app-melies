import React from 'react';
import { TextInput } from 'react-native';
import { useAppContext } from '../../contexts/AppContext';

export const TextInputField = (props) => {
    const { InputProps = {}, label = '', style, bold = false, InputLabelProps = {}, small = false } = props;
    const { colorPalette } = useAppContext();

    // Retira a propriedade borderColor do restante das props
    const { borderColor, ...otherProps } = props;

    return (
        <TextInput
            {...otherProps}  // Usa as outras props (exceto borderColor)
            placeholderTextColor={colorPalette?.textColor || '#000'}
            style={{ borderColor, backgroundColor: colorPalette?.primary || '#ff00ff', ...style }}
        />
    );
};
