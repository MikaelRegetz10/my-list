import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export function TaskItem({ title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor." }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      {/* Círculo de seleção (estado não concluído) */}
      <View style={styles.checkbox} />
      
      {/* Texto da tarefa */}
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.surface, // Fundo cinzento escuro
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    // Cria um ligeiro contorno subtil comum neste design
    borderWidth: 1,
    borderColor: '#333333', 
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12, // Metade da largura/altura para fazer um círculo perfeito
    borderWidth: 2,
    borderColor: COLORS.primary, // Cor ciano
    marginRight: 16,
  },
  title: {
    flex: 1, // Faz com que o texto ocupe o espaço restante e faça quebra de linha
    color: COLORS.textPrimary,
    fontSize: 14,
    lineHeight: 20, // Melhora a legibilidade de textos longos
  },
});