import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfissionalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Experiência Profissional</ThemedText>
      
      <ThemedText style={styles.content}>
        Atualmente em busca da minha primeira oportunidade profissional.
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
    lineHeight: 24,
  },
  card: {
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
  },
  cardContent: {
    fontSize: 16,
    marginTop: 5,
    lineHeight: 22,
  }
});