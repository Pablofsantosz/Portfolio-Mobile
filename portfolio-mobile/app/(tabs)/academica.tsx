import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AcademicaScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Experiência Acadêmica</ThemedText>
      
      <ThemedText style={styles.content}>
        - Cursando Ciência da Computação em 2023 - 2027 na Universidade Católica de pernambuco .
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