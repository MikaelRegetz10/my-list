import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export function TaskCounter({ title, count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.badge}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: COLORS.badgeBackground,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    marginLeft: 8,
  },
  countText: {
    color: COLORS.badgeText,
    fontSize: 12,
    fontWeight: 'bold',
  },
});