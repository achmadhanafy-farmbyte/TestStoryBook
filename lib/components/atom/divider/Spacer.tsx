import React from 'react';
import {View} from 'react-native';
import { SpacerProps } from '../../../interface/atom.interface';

const Spacer = ({height, width, flexGrow}: SpacerProps) => {
  return <View style={{height, width, flexGrow}} />;
};

export default Spacer;
