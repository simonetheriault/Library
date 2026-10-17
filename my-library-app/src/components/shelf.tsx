import { Image as Cover, View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Link as Nav } from 'expo-router';

import { Palette } from '@/constants/theme';
import { ThemedText } from './themed-text';
import { ShelfProp } from '@/constants/backend-objects';

// Built-in shelves every user has. These can't be deleted.
export const DEFAULT_SHELVES = [
  'all books',
  'currently reading',
  'want to read',
  'physical TBR',
  'read',
  '6-star reads',
] as const;

export default function Shelf({ id, name, books = [], emptyText = 'Nothing here yet.', children }: ShelfProp) {
  const isEmpty = books.length === 0 && !children;
  

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <ThemedText style={styles.sectionTitle}>
          {name} <ThemedText style={styles.count}>{books.length}</ThemedText>
        </ThemedText>
      </View>

      {isEmpty ? (
        <View style={styles.empty}>
          <ThemedText style={styles.emptyText}>{emptyText}</ThemedText>
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}>
          {books.map((book) => (
            <Nav key={book.id} href={`/book/${book.id}`} asChild>
              <Pressable style={styles.coverShadow}>
                <Cover source={{ uri: book.coverUrl }} style={styles.cover} />
              </Pressable>
            </Nav>
          ))}
          {children}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    marginTop: 28,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '700',
    color: Palette.text,
  },
  count: {
    fontSize: 15,
    fontWeight: '500',
    color: Palette.textMuted,
  },
  row: {
    gap: 12,
    paddingHorizontal: 20, // first cover lines up with the title
    paddingBottom: 12,     // room for the shadow
  },
  coverShadow: {
    borderRadius: 6,
    backgroundColor: Palette.surface,
    boxShadow: '0 4px 8px rgba(59, 26, 36, 0.18)',
  },
  cover: {
    width: 100,
    height: 150, // fixed 2:3 so every cover matches
    borderRadius: 6,
    resizeMode: 'cover',
  },
  empty: {
    marginHorizontal: 20,
    paddingVertical: 28,
    borderRadius: 12,
    backgroundColor: Palette.primarySoft,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: Palette.primary,
  },
});
