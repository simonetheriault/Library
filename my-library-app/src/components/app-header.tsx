import { View, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

import { MaxContentWidth, Palette } from '@/constants/theme';

type HeaderProps = {
  subtitle?: string;
};

// Add image
export default function CustomHeader({ subtitle }: HeaderProps) {
  return (
    <View style={styles.header}>
      <ThemedText style={styles.title}>Simone's Library</ThemedText>
      {subtitle && <ThemedText style={styles.subtitle}>{subtitle}</ThemedText>}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 8,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
    letterSpacing: -0.5,
    color: Palette.primary,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: '500',
    color: Palette.textMuted,
  },
});
