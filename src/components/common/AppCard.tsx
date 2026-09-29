import { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { Colors, Radius, Spacing } from '@/constants/theme';

type AppCardProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export function AppCard({
  children,
  style,
}: AppCardProps) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.surface,
    borderRadius: Radius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
});