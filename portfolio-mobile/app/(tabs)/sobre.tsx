import React from 'react'; // <-- 1. Importar o React
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// --- CORREÇÃO 2: Definir o "tipo" de um item de skill ---
interface Skill {
  name: string;
  icon: React.ReactNode; // React.ReactNode significa "qualquer JSX"
}
// --- FIM DA CORREÇÃO ---

// --- CORREÇÃO 3: Aplicar o "tipo" ao seu array ---
const skills: Skill[] = [
  { name: 'Python', icon: <FontAwesome5 name="python" size={50} color="#4B8BBE" /> },
  { name: 'C#', icon: <MaterialCommunityIcons name="language-csharp" size={50} color="#68217A" /> }, 
  { name: 'JavaScript', icon: <FontAwesome5 name="js-square" size={50} color="#F0DB4F" /> },
  { name: 'React', icon: <FontAwesome5 name="react" size={50} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FontAwesome5 name="node-js" size={50} color="#68A063" /> },
  // A linha abaixo (com 'name="web"') é a que deu erro, e agora está correta
  { name: 'Django', icon: <MaterialCommunityIcons name="web" size={50} color="#092E20" /> }, 
  { name: 'Java', icon: <FontAwesome5 name="java" size={50} color="#E52D2F" /> },
  { name: 'Git', icon: <FontAwesome5 name="git-alt" size={50} color="#F05033" /> },
];
// --- FIM DA CORREÇÃO ---

const appTechs = [
  'React Native', 'Expo', 'Expo Router', 'TypeScript', '@expo/vector-icons'
];

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.section}>
        <ThemedText type="title">Sobre Mim</ThemedText>
        <ThemedText style={styles.description}>
          Sou um desenvolvedor de software apaixonado por criar soluções que impactam positivamente a vida das pessoas...
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
  container: { padding: 20 },
  section: { marginBottom: 20, padding: 10, borderRadius: 8 },
  description: { fontSize: 16, lineHeight: 24, marginTop: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 },
  skillCard: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  techItem: { fontSize: 16, marginLeft: 10, marginTop: 5 },
});