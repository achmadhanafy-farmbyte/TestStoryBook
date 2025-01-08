import React from 'react';
import {View} from 'react-native';
import BackButton from '../../lib/components/Button/BackButton';
import {StoryFn} from '@storybook/react';
import {BackButtonProps} from '../../lib/interface/button.interface';
import { action } from '@storybook/addon-actions';

export default {
  component: BackButton,
  title: 'Button/BackButton',
  parameters: {
    notes: `
     ### BackButton
     
     BackButton documentation here.
    `,
  },
  decorators: [
    (Story: StoryFn) => (
      <View style={{padding: 8, flex: 1}}>
        <Story />
      </View>
    ),
  ],
  args: {
    onPress: action('onPress'),
  },
};

const Template: StoryFn<BackButtonProps> = (args: BackButtonProps) => (
  <BackButton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
