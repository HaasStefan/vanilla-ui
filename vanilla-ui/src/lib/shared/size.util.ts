export const VuiSize = {
  XS: 'extra-small',
  SM: 'small',
  MD: 'medium',
  LG: 'large',
  XL: 'extra-large',
  XXL: '2-extra-large'
} as const;

export type VuiSize = typeof VuiSize[keyof typeof VuiSize];
