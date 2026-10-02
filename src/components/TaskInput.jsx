import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export function TaskInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione algo a sua lista"
        placeholderTextColor={COLORS.textSecondary}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Feather name="plus-circle" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: COLORS.surface,
    color: COLORS.textPrimary,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 8,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});