import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('@/assets/images/MinhaFoto.jpg')} 
          style={styles.profileImage}
        />
        
        <ThemedText type="title" style={styles.title}>Pablo Santos</ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>Desenvolvedor de Software</ThemedText>
        
        <View style={styles.socialLinks}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Pablofsantosz')}>
            <Feather name="github" size={32} color="#0366d6" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/pablo-santos-325b8423a/')}>
            <Feather name="linkedin" size={32} color="#0077b5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:pablofelipedossantos@gmail.com')}>
            <Feather name="mail" size={32} color="#c71610" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.ctaButton} 
          onPress={() => router.push('/(tabs)/projetos')}
        >
          <ThemedText style={styles.ctaButtonText}>Ver Projetos</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666', 
    marginBottom: 20,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
    marginBottom: 30,
  },
  ctaButton: {
    backgroundColor: '#007bff', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});