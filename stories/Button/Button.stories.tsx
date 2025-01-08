import React from 'react';
import {StoryFn} from '@storybook/react';
import Button from '../../lib/components/Button/Button';
import {View} from 'react-native';
import {ButtonProps} from '../../lib/interface/button.interface';

export default {
  component: Button,
  title: 'Button/Button',
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

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const LightText = Template.bind({});
export const Default = Template.bind({})

LightText.args = {
    label: 'Button Label',
    title: 'Button Title',
    variant: 'light-text',
    rounded: true,
    textColor: 'white'
};

Default.args = {
    label: 'Button Label',
    title: 'Button Title',
    rounded: true
}

