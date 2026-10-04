import { TabListProps } from 'expo-router/build/TabBar/TabListProps';
import { View, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';

/**
 * Search Bar component
 * Add search bar icon and functionality
*/
export default function SearchBar(props: TabListProps) {
  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        <Search style={styles.icon} />
        <ThemedText type="smallBold" style={styles.brandText}>
          Search for books...
        </ThemedText>
      </ThemedView>
    </View>
  );
}



const styles = StyleSheet.create({
  tabListContainer: {
    backgroundColor: Colors.light.background,
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    textColor: Colors.light.text,
    backgroundColor: Colors.light.background,
    borderRadius: Spacing.five,
    borderColor: Colors.light.text,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
  },
  icon: {
    size: 22,
    color: Colors.light.text,
    strokeWidth: 1.5,
    alignItems: 'center',
  },
  brandText: {
    color: Colors.light.text,
    marginRight: 'auto',
  },
  pressed: {
    opacity: 0.7,
  },

});