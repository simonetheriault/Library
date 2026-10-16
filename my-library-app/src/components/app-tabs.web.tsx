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
import { ThemedView } from './themed-view';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';

export default function AppTabs() {
  return (
    <Tabs style={{ flex: 1 }}>
      <TabSlot style={{ flex: 1 }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton icon={Library}>Library</TabButton>
          </TabTrigger>
          <TabTrigger name="my-shelves" href="/my-shelves" asChild>
            <TabButton icon={ShelvingUnit}>My Shelves</TabButton>
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
  const color = isFocused ? Colors.light.text : Colors.light.textSecondary;
  return (
    <Pressable {...props} style={({ pressed }) => [styles.tab, pressed && styles.pressed]}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <Icon size={22} color={color} strokeWidth={1.5} />
        <ThemedText type="small" style={{ color, textAlign: 'center' }}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        {props.children}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
  },
  tabListContainer: {
    backgroundColor: Colors.light.background,
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    backgroundColor: Colors.light.background,
    borderRadius: Spacing.five,
    borderColor: Colors.light.text,
    borderWidth: 1,
    width: '100%',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.one,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: MaxContentWidth,
  },
  tabButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingVertical: Spacing.one,
    paddingHorizontal: 0,
    borderRadius: Spacing.three,
  },
  brandText: {
    color: Colors.light.text,
    marginRight: 'auto',
  },
  pressed: {
    textColor: Colors.light.text,
  },
  externalPressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.one,
    marginLeft: Spacing.three,
  },
});
