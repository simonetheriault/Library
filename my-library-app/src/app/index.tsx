import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from '@/components/app-header';

import { ThemedView } from '@/components/themed-view';
import { Colors, BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <CustomHeader />
      <View style={styles.frame}>
        <ThemedView style={styles.container}>
          <SafeAreaView style={styles.safeArea}>
            {/* Home Page Section */}
          </SafeAreaView>
        </ThemedView>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
});
