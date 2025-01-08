import React from 'react';
import {View, TouchableOpacity, Dimensions, Platform} from 'react-native';
import {SvgXml} from 'react-native-svg';
import { SPACING } from '../../assets/theme';
import { BackButtonProps } from '../../interface/button.interface';

const windowHeight = Dimensions.get('window').height;
const isSmallScreen = windowHeight < 800;


const BackButton = ({onPress}: BackButtonProps) => {

  const svgIcon = (
    <SvgXml
      xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      
      `}
    />
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: SPACING.space_24,
          height: SPACING.space_24,
          paddingLeft: SPACING.space_16,
          marginTop: SPACING.space_16,
          marginBottom:
            Platform.OS === 'android'
              ? isSmallScreen
                ? '6%' //small screen android
                : '7%'
              : isSmallScreen
              ? '6%' //iphone SE
              : '7%',
        }}>
        {svgIcon}
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
