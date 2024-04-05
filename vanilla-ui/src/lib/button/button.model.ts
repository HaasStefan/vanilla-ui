import { VuiSeverity } from '../shared/severity.util';

export const IconPosition = {
  LEFT: 'left',
  RIGHT: 'right'
} as const;

export type IconPosition = typeof IconPosition[keyof typeof IconPosition];

export const ButtonSeverity = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DEFAULT: 'default',
  ...VuiSeverity
} as const;

export type ButtonSeverity = typeof ButtonSeverity[keyof typeof ButtonSeverity];
