import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {TextStyle} from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../../assets/theme';

interface ParagraphProps extends TouchableOpacityProps {
  text: string;
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extrabold';
  color?: string;
  fontSize?: number;
  variant?: '00' | '01' | '02' | '03';
  align?: 'left' | 'right' | 'center';
  pressable?: boolean;
  numberOfLines?: number;
  textDecorationLine?: TextStyle['textDecorationLine'];
}

const Paragraph = ({
  text,
  weight = 'light',
  color = COLORS.typographyDefault,
  pressable,
  onPress,
  disabled,
  variant = '01',
  align = 'left',
  numberOfLines,
  textDecorationLine,
}: ParagraphProps) => {
  let children = (
    <Text
      style={[
        styles[`text-${variant}`],
        {
          fontFamily: FONTFAMILY[`PlusJakartaSans_${weight}`],
          color,
          textAlign: align,
          textDecorationLine,
        },
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
  if (pressable) {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        {children}
      </TouchableOpacity>
    );
  }
  return children;
};

const styles = StyleSheet.create({
  /**
   * Variants
   */
  'text-00': {
    fontSize: FONTSIZE.size_12,
  },
  'text-01': {
    fontSize: FONTSIZE.size_14,
  },
  'text-02': {
    fontSize: FONTSIZE.size_16,
  },
  'text-03': {
    fontSize: FONTSIZE.size_18,
  },
  'text-undefined': {},
});

export default Paragraph;
