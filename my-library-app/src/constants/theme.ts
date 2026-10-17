/**
 * Below are the colors that are used in the app. The colors are defined in the light mode.
*/

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#993556',
    background: '#fbeaf0',
    backgroundElement: '#fbeaf0',
    backgroundSelected: '#fbeaf0',
    textSecondary: '#60646C',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light;

export const Palette = {
  bg: '#FCEFF3',          // page background
  surface: '#FFFFFF',     // tab bar, cards
  primary: '#8C2F4B',     // titles, active tab, links
  primarySoft: '#F5D7E0', // active tab pill, empty-state fill
  text: '#3B1A24',        // body text
  textMuted: '#9C6B79',   // counts, captions, inactive tabs
  hairline: 'rgba(140, 47, 75, 0.12)',
} as const;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
