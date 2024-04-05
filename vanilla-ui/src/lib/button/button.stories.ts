import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './button';

export default {
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
  render: (args) => html`
    <vui-button label='${args['label']}'></vui-button>`,
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    label: 'Lit',
  },
};
