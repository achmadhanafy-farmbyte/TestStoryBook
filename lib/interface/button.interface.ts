import { DimensionValue, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface BackButtonProps {
    onPress: () => void
}
export interface ButtonProps extends TouchableOpacityProps {
    label?: string;
    title: string;
    textStyle?: TextStyle;
    variant?: 'default' | 'icon-text' | 'light-text' | 'icon';
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    backgroundColor?: string;
    underLine?: boolean;
    rounded?: boolean;
    paddingHorizontal?: number;
    icon?: React.ReactNode; // This just working when variant will be icon
    paddingVertical?: DimensionValue; // This just working when variant will be icon
    borderRadius?: number; // it should working in default and icon variant
    roundedRadius?: number; // it should working in default and rounded variant
    textColor?: string;
    height?: ViewStyle['height'];
    shadow?: boolean;
    iconSpacing?: number;
    iconFlexGrow?: ViewStyle['flexGrow'];
    textVariant?: '01' | '02' | '03';
    textIconColor?: DimensionValue | string;
  }