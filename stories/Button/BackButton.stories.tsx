import React from 'react';
import {View} from 'react-native';
import BackButton from '../../lib/components/Button/BackButton';
import {StoryFn} from '@storybook/react';
import {BackButtonProps} from '../../lib/interface/button.interface';

export default {
  component: BackButton,
  title: 'Button/BackButton',
  decorators: [
    (Story: StoryFn) => (
      <View style={{padding: 8, flex: 1}}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    onPress: {action: 'onPress'},
  },
};

const Template: StoryFn<BackButtonProps> = (args: BackButtonProps) => (
  <BackButton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
