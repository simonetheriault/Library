import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

import CustomHeader from '@/components/app-header';
import { ThemedText } from '@/components/themed-text';
import { MaxContentWidth, Palette } from '@/constants/theme';

const OPTIONS = [
  { key: 'book', label: 'Book' },
  { key: 'shelf', label: 'Shelf' },
  { key: 'physical', label: 'Physical' },
  { key: 'import', label: 'Import' },
] as const;

type AddKind = (typeof OPTIONS)[number]['key'];

export default function AddBooksScreen() {
  const [kind, setKind] = useState<AddKind>('book');

  return (
    <View style={styles.screen}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
        <CustomHeader subtitle="What would you like to add?" />

        <View style={styles.segment}>
          {OPTIONS.map((o) => {
            const active = kind === o.key;
            return (
              <Pressable
                key={o.key}
                onPress={() => setKind(o.key)}
                style={[styles.segmentItem, active && styles.segmentActive]}>
                <ThemedText
                  numberOfLines={1}
                  style={[styles.segmentText, active && styles.segmentTextActive]}>
                  {o.label}
                </ThemedText>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.form}>
          {kind === 'book' && <ThemedText style={styles.placeholder}>Book form goes here</ThemedText>}
          {kind === 'shelf' && <ThemedText style={styles.placeholder}>Shelf form goes here</ThemedText>}
          {kind === 'physical' && <ThemedText style={styles.placeholder}>Physical shelf form goes here</ThemedText>}
          {kind === 'import' && <ThemedText style={styles.placeholder}>Import goes here</ThemedText>}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Palette.bg,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingBottom: 32,
  },
  segment: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    padding: 4,
    borderRadius: 12,
    backgroundColor: Palette.primarySoft,
  },
  segmentItem: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  segmentActive: {
    backgroundColor: Palette.surface,
    boxShadow: '0 1px 3px rgba(59, 26, 36, 0.12)',
  },
  segmentText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: Palette.textMuted,
  },
  segmentTextActive: {
    fontWeight: '700',
    color: Palette.primary,
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 24,
    gap: 16,
  },
  placeholder: {
    fontSize: 14,
    color: Palette.textMuted,
  },
});
