import { View, ScrollView, Image as Cover, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from 'react';

import { fetchBook } from '@/backend/main';
import { Book } from '@/constants/backend-objects';
import { Colors, Spacing } from '@/constants/theme';
import { ThemedText } from '@/components/themed-text';

export default function BookInfo() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => { fetchBook(id).then(setBook); }, [id]);

  if (!book) return <View style={styles.page}><ThemedText>Loading…</ThemedText></View>;

  const date = (t?: any) => t?.toDate().toLocaleDateString() ?? '—';
  const cover = { uri: book.coverUrl };

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Stack.Screen options={{ title: book.title }} />
      <Cover source={cover} style={styles.cover} />
      <ThemedText type="title">{book.title}</ThemedText>
      <ThemedText>{book.author}</ThemedText>

      <ThemedText>Status: {book.status ?? 'want to read'}</ThemedText>
      <ThemedText>Rating: {book.rating ? `${book.rating} stars` : 'not rated'}</ThemedText>
      <ThemedText>Times read: {book.timesRead ?? 0}</ThemedText>
      <ThemedText>Started: {date(book.startedAt)}</ThemedText>
      <ThemedText>Finished: {date(book.finishedAt)}</ThemedText>
      <ThemedText>Added: {date(book.addedAt)}</ThemedText>
      <ThemedText>{book.review ?? 'No review yet.'}</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: Spacing.four, gap: Spacing.two, alignItems: 'center', backgroundColor: Colors.light.background, flexGrow: 1 },
  cover: { width: 160, height: 240, borderRadius: 8 },
});