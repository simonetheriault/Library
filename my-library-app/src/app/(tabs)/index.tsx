import { View, ScrollView, StyleSheet } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';

import CustomHeader from '@/components/app-header';
import Shelf, {DEFAULT_SHELVES} from '@/components/shelf';
import { fetchBooks, fetchShelves } from '@/backend/main';

import { MaxContentWidth, Palette } from '@/constants/theme';
import { Book, ShelfProp } from '@/constants/backend-objects';


// Shelf names double as filter keys, so only capitalize for display
const label = (shelf: string) => shelf.charAt(0).toUpperCase() + shelf.slice(1);

export default function HomeScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [shelves, setShelves] = useState<ShelfProp[]>([]);

  useFocusEffect(
    useCallback(() => {
      fetchBooks().then(setBooks).catch((e) => console.error("fetchBooks failed", e));
      fetchShelves().then(setShelves).catch((e) => console.error("fetchShelves failed", e));
    }, [])
  );

  const allShelves = [...DEFAULT_SHELVES, ...shelves.map((s) => s.name)]
  const booksFor = (shelf: string) =>
      shelf === "all books" ? books : books.filter((b) => b.shelves?.includes(shelf));


  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}>
        <CustomHeader subtitle={`${books.length} books`} />
        {allShelves.map((name) => (
          <Shelf
            key={name}
            name={label(name)}
            books={booksFor(name)}
            emptyText={`Nothing here yet. Add a book to ${label(name)}.`}
          />
        ))}
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
});
