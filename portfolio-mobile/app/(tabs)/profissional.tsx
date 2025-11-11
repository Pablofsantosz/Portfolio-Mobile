import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfissionalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Experiência Profissional</ThemedText>
      
      <ThemedText style={styles.content}>
        - Nenhuma experiência profissional ainda.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    marginTop: 20,
    fontSize: 16,
  },
});