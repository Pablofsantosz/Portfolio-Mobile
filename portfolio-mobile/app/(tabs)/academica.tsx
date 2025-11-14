import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AcademicaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.title}>Experiência Acadêmica</ThemedText>
      
      
      <ThemedText type="subtitle" style={styles.subtitle}>Formação</ThemedText>
      <ThemedView style={styles.card}>
        <ThemedText type="defaultSemiBold">Ciência da Computação</ThemedText>
        <ThemedText style={styles.cardContent}>
          - Cursando na [Sua Universidade Aqui]
        </ThemedText>
      </ThemedView>

      
      <ThemedText type="subtitle" style={styles.subtitle}>Projetos e Eventos</ThemedText>

      
      <ThemedView style={styles.card}>
        <ThemedText type="defaultSemiBold">Projeto Padawan (Mentor)</ThemedText>
        <ThemedText style={styles.cardContent}>
          - Projeto de mentoria criado para auxiliar alunos calouros na nova etapa da universidade.
        </ThemedText>
      </ThemedView>
      
      
      <ThemedView style={styles.card}>
        <ThemedText type="defaultSemiBold">Hacker Cidadão 13.0</ThemedText>
        <ThemedText style={styles.cardContent}>
          - Participação no evento de 52 horas para desenvolver soluções de cidades inteligentes (Maio/2025).
        </ThemedText>
      </ThemedView>
      
      
      <ThemedView style={styles.card}>
        <ThemedText type="defaultSemiBold">Trilha de Formação 'Do Zero ao Jogo'</ThemedText>
        <ThemedText style={styles.cardContent}>
          - Participação na trilha de 40 horas do Embarque Digital (Softex Pernambuco, Maio-Junho/2024).
        </ThemedText>
      </ThemedView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
  },
  cardContent: {
    fontSize: 16,
    marginTop: 5,
    lineHeight: 22,
  }
});