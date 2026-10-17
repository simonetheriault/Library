/**
 * Personalizable (and optional on set up)
 * Physcial book shelf representation
 * Search for books on physical shelf they are on
 */

import { View, ScrollView, StyleSheet } from 'react-native';

import CustomHeader from '@/components/app-header';
import Shelf from '@/components/shelf';

import { MaxContentWidth, Palette } from '@/constants/theme';

const SHELVES = ['top', 'first', 'second', 'third'];

const label = (shelf: string) => shelf.charAt(0).toUpperCase() + shelf.slice(1);

export default function PhysShelves() {

  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}>
        <CustomHeader subtitle="Your physical shelves" />
        {SHELVES.map((name) => (
          <Shelf key={name} name={`${label(name)} shelf`} emptyText="No books on this shelf yet." />
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
