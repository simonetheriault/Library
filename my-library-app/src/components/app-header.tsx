import {
  TabListProps,
} from 'expo-router/ui';
import { View, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';


// Add image
export default function CustomHeader(props: TabListProps) {
  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        <ThemedText type="smallBold" style={styles.brandText}>
          Simone's Library
        </ThemedText>
        {/* Move under and add functionality */}
        <ThemedText type="small" color={Colors.light.text}>
          # books
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
  brandText: {
    color: Colors.light.text,
    marginRight: 'auto',
  },
  pressed: {
    opacity: 0.7,
  },

});