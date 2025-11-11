import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FaPython, FaReact, FaNodeJs, FaJava, FaGitAlt } from '@expo/vector-icons';
import { SiJavascript, SiDjango } from '@expo/vector-icons';
import { TbBrandCSharp } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const skills = [
  { name: 'Python', icon: <FaPython size={50} color="#4B8BBE" /> },
  { name: 'C#', icon: <TbBrandCSharp size={50} color="#68217A" /> }, 
  { name: 'JavaScript', icon: <SiJavascript size={50} color="#F0DB4F" /> },
  { name: 'React', icon: <FaReact size={50} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} color="#68A063" /> },
  { name: 'Django', icon: <SiDjango size={50} color="#092E20" /> },
  { name: 'Java', icon: <FaJava size={50} color="#E52D2F" /> },
  { name: 'Git', icon: <FaGitAlt size={50} color="#F05033" /> },
];

const appTechs = [
  'React Native', 'Expo', 'Expo Router', 'TypeScript', '@expo/vector-icons'
];

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.section}>
        <ThemedText type="title">Sobre Mim</ThemedText>
        <ThemedText style={styles.description}>
          Sou um desenvolvedor de software apaixonado por criar soluções que impactam positivamente a vida das pessoas. Atualmente cursando Ciência da Computação, busco constantemente aprender novas tecnologias e aprimorar minhas habilidades. Tenho experiência com Python, C#, JavaScript, C e Java, e já utilizei frameworks como React, Django e Node.js em projetos acadêmicos e pessoais.
        </ThemedText>
        <ThemedText style={styles.description}>
          No meu tempo livre, gosto de explorar projetos open-source, participar de hackathons e ler sobre as últimas tendências em inteligência artificial e desenvolvimento web.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="title">Habilidades</ThemedText>
        <View style={styles.grid}>
          {skills.map((skill) => (
            <View key={skill.name} style={styles.skillCard}>
              {skill.icon}
              <ThemedText>{skill.name}</ThemedText>
            </View>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="title">Tecnologias deste App</ThemedText>
        {appTechs.map(tech => (
          <ThemedText key={tech} style={styles.techItem}>- {tech}</ThemedText>
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  skillCard: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0', 
    borderRadius: 8,
  },
  techItem: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  }
});