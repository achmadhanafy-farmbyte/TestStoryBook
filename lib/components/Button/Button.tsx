import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  LENGTH,
  SPACING,
} from '../../assets/theme';
import Paragraph from '../atom/texts/Paragraph';
import Spacer from '../atom/divider/Spacer';
import { ButtonProps } from '../../interface/button.interface';

const windowHeight = Dimensions.get('window').height;
// Define a threshold for a small screen height
const isSmallScreen = windowHeight < 800;

const Button: React.FC<ButtonProps> = ({
  label,
  title,
  textStyle,
  variant = 'default',
  iconLeft,
  iconRight,
  rounded = false,
  underLine = false,
  backgroundColor = COLORS.secondary.blue500,
  paddingHorizontal,
  paddingVertical,
  icon,
  borderRadius = BORDERRADIUS.radius_40,
  textColor = COLORS.typographyDefault,
  roundedRadius = BORDERRADIUS.radius_8,
  height = 57,
  shadow = false,
  iconSpacing = SPACING.space_8,
  iconFlexGrow,
  textVariant = '01',
  textIconColor,
  ...rest
}) => {
  const [animatedIsFocused] = useState(new Animated.Value(title ? 1 : 0));

  const borderRounded = rounded
    ? {
      borderWidth: 1,
      borderColor: COLORS.grayscale._300,
      borderRadius: roundedRadius,
      paddingHorizontal: SPACING.space_16,
      paddingVertical,
    }
    : underLine
      ? { borderBottomWidth: 1, borderBottomColor: '#E3E3E3' }
      : {};

  /**
   * Label style with animated
   */
  const labelStyle = {
    position: 'absolute' as 'absolute',
    left: rounded
      ? SPACING.space_16
      : paddingHorizontal
        ? paddingHorizontal
        : 0,
    right: 16,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 8],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
  };

  /**
   * Hooks
   */
  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: title ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [title]);

  const shadowStyle = shadow && {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  };

  if (variant === 'icon') {
    return (
      <TouchableOpacity
        style={[
          { backgroundColor, paddingHorizontal, paddingVertical, borderRadius },
        ]}
        {...rest}>
        {icon}
      </TouchableOpacity>
    );
  }
  if (variant === 'icon-text') {
    return (
      <TouchableOpacity
        style={[{ flexDirection: 'row', alignItems: 'center' }]}
        {...rest}>
        {iconLeft}
        {iconLeft && <Spacer width={iconSpacing} flexGrow={iconFlexGrow} />}
        <Paragraph
          text={title}
          color={textIconColor ? textIconColor : COLORS.secondary.blue500}
          variant={textVariant}
          weight="bold"
        />
        {iconRight && <Spacer width={iconSpacing} flexGrow={iconFlexGrow} />}
        {iconRight}
      </TouchableOpacity>
    );
  }
  if (variant === 'light-text') {

    return (
      <TouchableOpacity
        style={[
          styles.lightTextBtn,
          shadowStyle,
          { backgroundColor, paddingHorizontal, height },
          borderRounded,
        ]}
        {...rest}>
        {label && (
          <Animated.Text style={[styles.label, labelStyle]}>
            {label}
          </Animated.Text>
        )}
        <View>
          {label && <Spacer height={SPACING.space_8} />}
          <Paragraph
            text={title}
            variant={textVariant}
            weight="medium"
            color={textColor}
          />
        </View>
        {iconRight && <Spacer width={SPACING.space_8} />}
        {iconRight}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={[styles.button, { borderRadius: rounded ? styles.button.borderRadius : 0 }]} {...rest}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.buttonColorHex,
    padding: SPACING.space_8, //10,
    // bottom: 20,
    marginTop: SPACING.space_56, //150,
    //marginVertical: SPACING.space_24, //20,
    height: LENGTH.length_50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_40,
  },
  text: {
    color: COLORS.primaryWhiteHex,
    fontWeight: 'bold',
    fontFamily: FONTFAMILY.PlusJakartaSans_bold,
    fontSize: FONTSIZE.size_18,
    textAlign: 'center',
  },
  lightTextBtn: {
    paddingVertical: 8,
    height: 57,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    left: 0,
    top: 32,
    fontSize: 12,
    color: COLORS.grayscale._500,
    fontFamily: FONTFAMILY.PlusJakartaSans_medium,
  },
});

export default Button;
