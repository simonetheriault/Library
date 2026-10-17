import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { Library, ShelvingUnit , Search, Plus, ChartColumn, type LucideIcon  } from 'lucide-react-native';
import { Pressable, View, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

import { MaxContentWidth, Palette } from '@/constants/theme';

export default function AppTabs() {
  return (
    <Tabs style={{ flex: 1 }}>
      <TabSlot style={{ flex: 1 }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton icon={Library}>Library</TabButton>
          </TabTrigger>
          <TabTrigger name="my-shelves" href="/physical-shelves" asChild>
            <TabButton icon={ShelvingUnit}>Shelves</TabButton>
          </TabTrigger>
          <TabTrigger name="search" href="/explore" asChild>
            <TabButton icon={Search}>Search</TabButton>
          </TabTrigger>
          <TabTrigger name="add" href="/add-books" asChild>
            <TabButton icon={Plus}>Add</TabButton>
          </TabTrigger>
          <TabTrigger name="stats" href="/statistics" asChild>
            <TabButton icon={ChartColumn}>Stats</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, icon: Icon, ...props }: TabTriggerSlotProps & { icon: LucideIcon }) {
  const color = isFocused ? Palette.primary : Palette.textMuted;
  return (
    <Pressable {...props} style={({ pressed }) => [styles.tab, pressed && styles.pressed]}>
      <View style={[styles.tabButtonView, isFocused && styles.tabButtonActive]}>
        <Icon size={22} color={color} strokeWidth={isFocused ? 2 : 1.5} />
        <ThemedText numberOfLines={1} style={[styles.label, { color }]}>
          {children}
        </ThemedText>
      </View>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  return (
    <View {...props} style={styles.tabListContainer}>
      <View style={styles.innerContainer}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
  },
  tabListContainer: {
    backgroundColor: Palette.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Palette.hairline,
    width: '100%',
    paddingTop: 6,
    paddingBottom: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    maxWidth: MaxContentWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingVertical: 4,
    marginHorizontal: 4,
    borderRadius: 12,
  },
  tabButtonActive: {
    backgroundColor: Palette.primarySoft,
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
