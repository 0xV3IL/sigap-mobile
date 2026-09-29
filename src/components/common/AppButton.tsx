import { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

import { Colors, Radius, Spacing } from '@/constants/theme';

type AppButtonProps = {
  children: ReactNode;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  style?: ViewStyle;
};

export function AppButton({
  children,
  onPress,
  variant = 'primary',
  style,
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        styles[variant],
        style,
      ]}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
  },

  primary: {
    backgroundColor: Colors.light.primary,
  },

  secondary: {
    backgroundColor: Colors.light.primaryLight,
    borderWidth: 1,
    borderColor: Colors.light.primary,
  },

  danger: {
    backgroundColor: Colors.light.danger,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
  },

  primaryText: {
    color: '#FFFFFF',
  },

  secondaryText: {
    color: Colors.light.primary,
  },

  dangerText: {
    color: '#FFFFFF',
  },
});