import { View, ScrollView, Image as Cover, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from 'react';

import { fetchBook } from '@/backend/main';
import { Book } from '@/constants/backend-objects';
import { MaxContentWidth, Palette } from '@/constants/theme';
import { ThemedText } from '@/components/themed-text';

const STATUS_LABEL = { TBR: 'Want to read', reading: 'Currently reading', finished: 'Finished' } as const;

// Filled stars for the rating, empty ones up to 5 (6-star reads just get 6 filled)
const stars = (rating: number) => {
  const filled = Math.round(rating);
  return '★'.repeat(filled) + '☆'.repeat(Math.max(0, 5 - filled));
};

export default function BookInfo() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetchBook(id).then(setBook).catch((e) => console.error("fetchBook failed", e));
  }, [id]);

  if (!book) return <View style={styles.screen}><ThemedText style={styles.muted}>Loading…</ThemedText></View>;

  const date = (t?: any) => t?.toDate().toLocaleDateString() ?? '—';

  const details = [
    { label: 'Status', value: STATUS_LABEL[book.status ?? 'TBR'] },
    { label: 'Times read', value: String(book.timesRead ?? 0) },
    { label: 'Started', value: date(book.startedAt) },
    { label: 'Finished', value: date(book.finishedAt) },
    { label: 'Added', value: date(book.addedAt) },
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: book.title }} />

      <View style={styles.top}>
        <View style={styles.coverShadow}>
          <Cover source={{ uri: book.coverUrl }} style={styles.cover} />
        </View>

        <View style={styles.info}>
          <ThemedText style={styles.title}>{book.title}</ThemedText>
          <ThemedText style={styles.author}>{book.author}</ThemedText>

          {book.rating ? (
            <ThemedText style={styles.stars}>{stars(book.rating)}</ThemedText>
          ) : (
            <ThemedText style={styles.muted}>Not rated</ThemedText>
          )}

          <ThemedText style={book.review ? styles.review : styles.muted}>
            {book.review ?? 'No review yet.'}
          </ThemedText>
        </View>
      </View>

      <View style={styles.details}>
        {details.map((d, i) => (
          <View key={d.label} style={[styles.row, i > 0 && styles.rowDivider]}>
            <ThemedText style={styles.rowLabel}>{d.label}</ThemedText>
            <ThemedText style={styles.rowValue}>{d.value}</ThemedText>
          </View>
        ))}
      </View>
    </ScrollView>
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
    padding: 20,
    gap: 24,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  coverShadow: {
    borderRadius: 6,
    backgroundColor: Palette.surface,
    boxShadow: '0 4px 8px rgba(59, 26, 36, 0.18)',
  },
  cover: {
    width: 120,
    height: 180, // 2:3, same ratio as the shelf covers
    borderRadius: 6,
  },
  info: {
    flex: 1, // takes the rest of the row so long titles wrap instead of overflowing
    gap: 8,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
    letterSpacing: -0.3,
    color: Palette.primary,
  },
  author: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: Palette.textMuted,
  },
  stars: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 2,
    color: Palette.primary,
  },
  review: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: Palette.text,
  },
  muted: {
    fontSize: 14,
    lineHeight: 20,
    color: Palette.textMuted,
  },
  details: {
    backgroundColor: Palette.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  rowDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Palette.hairline,
  },
  rowLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: Palette.textMuted,
  },
  rowValue: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: Palette.text,
  },
});
