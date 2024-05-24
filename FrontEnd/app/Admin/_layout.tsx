import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: { backgroundColor: '#FDEFDD', height: 80 },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="Admin"
        options={{
          title: 'Dashboard', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} size={30} color={color} />
          ),
        }} 
      />
      <Tabs.Screen
        name="khachhang"
        options={{
          title: 'Khách Hàng', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={34} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="taomoi"
        options={{
          title: 'Tạo Mới', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={34} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="baocao"
        options={{
          title: 'Báo Cáo', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'document' : 'document-outline'} size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="caidat"
        options={{
          title: 'Cài Đặt', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={30} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  // styles của bạn ở đây nếu cần
});
