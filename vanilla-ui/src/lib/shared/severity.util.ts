export const VuiSeverity = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
} as const;

export type VuiSeverity = typeof VuiSeverity[keyof typeof VuiSeverity];
