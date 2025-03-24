import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { useAppContext } from '../../../contexts/AppContext';

interface TextInputFieldProps {
  InputProps?: any;
  label?: string;
  style?: any;
  bold?: boolean;
  InputLabelProps?: any;
  small?: boolean;
  borderColor?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  secureTextEntry?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
}

export const TextInputField: React.FC<TextInputFieldProps> = (props) => {
  const { InputProps = {}, label = '', style, bold = false, InputLabelProps = {}, small = false } = props;
  const { colorPalette } = useAppContext();

  const { borderColor, ...otherProps } = props;

  const dynamicStyles = {
    backgroundColor: !colorPalette ? '#fff' : colorPalette.primary,
    color: !colorPalette ? '#000' : colorPalette.textColor,
    borderColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderWidth: 1,
    fontSize: small ? 14 : 16,
  };

  return (

    <TextInput
      {...otherProps}
      placeholderTextColor={colorPalette?.textColor || '#aaa'}
      style={[dynamicStyles, style]}  // Aplica o estilo dinâmico e o adicional passado via props
    />
  );
};
