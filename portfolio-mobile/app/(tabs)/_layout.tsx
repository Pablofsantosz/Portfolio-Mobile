import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';


import { FontAwesome, Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons'; 

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
      }}>
      
      {/* 1. Tela Home */}
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />

      {/* 2. Tela Sobre */}
      <Tabs.Screen
        name="sobre" 
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
      
      {/* 3. Tela Experiência Acadêmica */}
      <Tabs.Screen
        name="academica" 
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ color }) => (
            <Ionicons name="school" size={28} color={color} />
          ),
        }}
      />
      
      {/* 4. Tela Experiência Profissional */}
      <Tabs.Screen
        name="profissional" 
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="work" size={28} color={color} />
          ),
        }}
      />

      {/* 5. Tela Projetos */}
      <Tabs.Screen
        name="projetos" 
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={28} color={color} />
          ),
        }}
      />

      {/* 6. Tela Jogo */}
      <Tabs.Screen
        name="jogo" 
        options={{
          title: 'Jogo',
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}