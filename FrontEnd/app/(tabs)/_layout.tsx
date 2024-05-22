import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: { backgroundColor: '#FDEFDD', height: 60 },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} size={30}/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} size={34}/>
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: '', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.qrButtonContainer}>
              <View style={styles.qrFrame}>
                <Image
                  source={require('../../assets/images/qr-code.png')}
                  style={styles.qrButton}
                  resizeMode="contain"
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: '', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} size={30}/>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  qrButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrButton: {
    height: 40, // giảm kích thước ảnh
    width: 40, // giảm kích thước ảnh
    tintColor: 'white', // chuyển ảnh thành màu trắng
  },
  qrFrame: {
    backgroundColor: 'black', // màu nền đen
    padding: 5, // tăng padding để làm cho ảnh nhỏ hơn
    borderRadius: 10, // làm tròn góc của khung
    borderWidth: 6, // độ rộng của viền
    borderColor: 'black', // màu viền
    marginBottom: 30,
    shadowColor: '#000', // màu đổ bóng
    shadowOffset: { width: 0, height: 2 }, // vị trí của đổ bóng
    shadowOpacity: 0.5, // độ mờ của đổ bóng
    shadowRadius: 4, // độ đổ bóng của đổ bóng
  },
});
