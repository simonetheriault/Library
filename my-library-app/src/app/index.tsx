import { View, ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import CustomHeader from '@/components/app-header';
import Shelf from '@/components/shelf';
import { fetchBooks } from '@/backend/main';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { Book } from '@/constants/backend-objects';

const SHELVES = ['all books', 'currently reading', 'all time favorites', '6-star reads', 'dark romance', 'fantasy', 'gothic romance', 'manga/manhwa', 'romance'];

export default function HomeScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    fetchBooks().then(setBooks).catch((e) => console.error("fetchBooks failed", e));
  }, []);

  const booksFor = (shelf: string) =>
      shelf === "all books" ? books : books.filter((b) => b.shelves?.includes(shelf));
  return (
    <View style={styles.page}>
      <CustomHeader />
      <View style={styles.frame}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.content}>
          {SHELVES.map((name) => (
            <Shelf key={name} title={name} books={booksFor(name)} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
    backgroundColor: Colors.light.background,
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    marginHorizontal: Spacing.three,
    borderRadius: Spacing.five,
    borderColor: Colors.light.text,
    borderWidth: 1,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.four,
  },
});
