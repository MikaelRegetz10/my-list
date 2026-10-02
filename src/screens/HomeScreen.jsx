import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Header } from '../components/Header';
import { TaskInput } from '../components/TaskInput';
import { TaskCounter } from '../components/TaskCounter';
import { COLORS } from '../theme/colors';
import { TaskItem } from '../components/TaskItem';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <Header />

      <View style={styles.content}>
        <TaskInput />

        <View style={styles.statusContainer}>
          <TaskCounter title="Criadas" count={0} />
          <TaskCounter title="Concluídas" count={0} />
        </View>
        
        <View style={styles.separator} />
      </View>
    
      <TaskItem/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.divider,
    width: '100%',
  }
});