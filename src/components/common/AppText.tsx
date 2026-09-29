import { ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
} from 'react-native';

import { Colors } from '@/constants/theme';

type AppTextProps = TextProps & {
  children: ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
};

export function AppText({
  children,
  variant = 'body',
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      {...props}
      style={[styles.base, styles[variant], style]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: Colors.light.text,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
  },

  caption: {
    fontSize: 13,
    color: Colors.light.textSecondary,
  },
});