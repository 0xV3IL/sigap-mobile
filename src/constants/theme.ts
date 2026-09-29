import { Platform } from 'react-native';

export const Colors = {
  light: {
    // Brand
    primary: '#4F46E5',
    primaryLight: '#EEF2FF',

    // Background
    background: '#F8FAFC',
    surface: '#FFFFFF',

    // Text
    text: '#111827',
    textSecondary: '#64748B',
    textMuted: '#94A3B8',

    // Status
    success: '#16A34A',
    warning: '#F59E0B',
    danger: '#DC2626',

    // Emergency
    emergencyBackground: '#7F1D1D',
    emergencyText: '#FFFFFF',

    // Border
    border: '#E2E8F0',
  },

  dark: {
    primary: '#818CF8',
    primaryLight: '#1E1B4B',

    background: '#0F172A',
    surface: '#1E293B',

    text: '#F8FAFC',
    textSecondary: '#CBD5E1',
    textMuted: '#94A3B8',

    success: '#22C55E',
    warning: '#FBBF24',
    danger: '#EF4444',

    emergencyBackground: '#7F1D1D',
    emergencyText: '#FFFFFF',

    border: '#334155',
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    mono: 'ui-monospace',
  },
  android: {
    sans: 'sans-serif',
    mono: 'monospace',
  },
  default: {
    sans: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'system-ui',
    mono: 'monospace',
  },
});

export type ThemeColor = keyof typeof Colors.light;