import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './button';

export default {
  title: 'Button',

  render: (args) => html`
    <vui-button
      @click=${() => alert('Button clicked!')}
      label='${args['label']}'
      ?loading="${args['loading'] ?? false}"
      loading-spinner="${args['loadingSpinner'] ?? undefined}"
      icon="${args['icon'] ?? undefined}"
      icon-pos="${args['iconPos'] ?? undefined}"
      ?disabled="${args['disabled'] ?? false}"
      ?rounded="${args['rounded'] ?? false}"
    ></vui-button>`
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    label: 'Default',
    disabled: false,
    loading: false,
    loadingSpinner: '💩',
    icon: undefined,
    iconPos: 'left'
  }
};

export const Loading: StoryObj = {
  name: 'Loading',
  args: {
    label: 'Loading...',
    loadingSpinner: '💩',
    loading: true,
    disabled: false,
    icon: '',
    iconPos: 'left'
  }
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  args: {
    label: 'Disabled',
    disabled: true,
    loading: false,
    loadingSpinner: '💩',
    icon: '',
    iconPos: 'left'
  }
};

export const Icon: StoryObj = {
  name: 'Icon',
  args: {
    label: 'Icon',
    icon: '🚀',
    iconPos: 'left',
    loading: false,
    loadingSpinner: '💩'
  }
};

export const IconRight: StoryObj = {
  name: 'Icon Right',
  args: {
    label: 'Icon right',
    icon: '🚀',
    iconPos: 'right',
    loading: false,
    loadingSpinner: '💩'
  }
};


export const Rounded: StoryObj = {
  name: 'Rounded',
  args: {
    label: 'Rounded',
    rounded: true,
    icon: '',
    iconPos: 'right',
    loading: false,
    loadingSpinner: '💩'
  }
};
