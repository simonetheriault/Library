import { View, ScrollView, StyleSheet } from 'react-native';

import CustomHeader from '@/components/app-header';
import Shelf from '@/components/shelf';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';

const SHELVES = ['all books', 'currently reading', 'dark romance', 'fantasy', 'gothic romance'];

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <CustomHeader />
      <View style={styles.frame}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.content}>
          {SHELVES.map((name) => (
            <Shelf key={name} title={name} />
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
