import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Linking, ImageSourcePropType } from 'react-native';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';


import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";


interface ProjectItem {
  title: string;
  description: string;
  image: ImageSourcePropType;
  repoLink: string;
}

const projectData: ProjectItem[] = [
  {
    title: 'FastRx',
    description: 'Este projeto é um sistema web desenvolvido para gerar automaticamente receituários médicos...',
    image: require('@/assets/images/projetos/FastRx.png'), 
    repoLink: 'https://github.com/Pablofsantosz/Projeto_Engenharia_De_Software'
  },
  {
    title: 'Spotify Clone',
    description: 'Uma réplica visual e funcional da interface do Spotify, desenvolvida com foco em aprendizado...',
    image: require('@/assets/images/projetos/Spotify.png'), 
    repoLink: 'https://github.com/Pablofsantosz/Projeto-Spotify'
  }
];

export default function ProjetosScreen() {
  
  const renderProjectCard = ({ item }: { item: ProjectItem }) => (
    <ThemedView style={styles.card}>
      <Image source={item.image} style={styles.image} contentFit="cover" />
      <View style={styles.cardContent}>
        <ThemedText type="subtitle">{item.title}</ThemedText>
        <ThemedText style={styles.description}>{item.description}</ThemedText>
        <TouchableOpacity 
          style={styles.linkButton} 
          onPress={() => Linking.openURL(item.repoLink)}
        >
          <Feather name="github" size={24} color="#0366d6" />
          <ThemedText style={styles.linkText}>Ver Repositório</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={projectData}
        renderItem={renderProjectCard}
        keyExtractor={(item) => item.title} 
        ListHeaderComponent={<ThemedText type="title" style={styles.title}>Projetos</ThemedText>}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  description: {
    marginTop: 10,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  linkText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0366d6',
    fontWeight: 'bold',
  }
});