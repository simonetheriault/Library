import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useRef, type ReactNode } from 'react';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { ThemedText } from './themed-text';

export default function Shelf({ title, children }: { title: string; children?: ReactNode }) {
  const row = useRef<ScrollView>(null);
  const x = useRef(0);
  const scrollBy = (dw: number) => {
    x.current = Math.max(0, x.current + dw);
    row.current?.scrollTo({ x: x.current, animated: true });
  };

  return (
    <View style={styles.shelf}>
        <ThemedText type="small">{title}</ThemedText>
        <ScrollView
        ref={row}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => (x.current = e.nativeEvent.contentOffset.x)}
        scrollEventThrottle={16}
        style={styles.row}
        contentContainerStyle={{ gap: Spacing.two }}>
        {children}
      </ScrollView>
      <View style={styles.plank} />
      <View style={styles.arrows}>
        <Pressable onPress={() => scrollBy(-200)}>
            <ChevronLeft size={16} color={Colors.light.text} />
        </Pressable>
        <Pressable onPress={() => scrollBy(200)}>
            <ChevronRight size={16} color={Colors.light.text} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    shelf: {
        width: '100%',
        gap: Spacing.one,
    },
    row:{
        height: 105
    },
    plank: {
        height: 4,
        width: '100%',
        borderRadius: 2,
        backgroundColor: Colors.light.text,
        },
    arrows: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});