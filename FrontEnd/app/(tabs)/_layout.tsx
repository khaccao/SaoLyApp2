import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width } = Dimensions.get('window');
const tabBarHeight = 0.1 * width; // Sử dụng 10% chiều rộng của màn hình cho chiều cao thanh tab

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
        name="index"
        options={{
          title: '', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} size={0.07 * width}/>
          ),
        }} 
      />
      <Tabs.Screen
        name="cuahang"
        options={{
          title: '', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} size={0.076 * width}/>
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
                  source={require('../../assets/images/date.png')}
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
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} size={0.076 * width} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: '', // ẩn tiêu đề
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} size={0.076 * width}/>
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
    height: 0.08 * width, // Sử dụng 8% chiều rộng của màn hình cho chiều cao và chiều rộng của ảnh
    width: 0.08 * width,
    tintColor: 'white', // chuyển ảnh thành màu trắng
  },
  qrFrame: {
    backgroundColor: 'black', // màu nền đen
    padding: 0.02 * width, // Sử dụng 2% chiều rộng của màn hình cho padding
    borderRadius: 0.04 * width, // Sử dụng 4% chiều rộng của màn hình cho border radius
    borderWidth: 0.012 * width, // Sử dụng 1.2% chiều rộng của màn hình cho độ rộng của viền
    borderColor: 'black', // màu viền
    marginBottom: 0.075 * width, // Sử dụng 7.5% chiều rộng của màn hình cho khoảng cách dưới cùng
    shadowColor: '#000', // màu đổ bóng
    shadowOffset: { width: 0, height: 0.004 * width }, // Sử dụng 0.4% chiều rộng của màn hình cho vị trí của đổ bóng
    shadowOpacity: 0.5, // độ mờ của đổ bóng
    shadowRadius: 0.008 * width, // Sử dụng 0.8% chiều rộng của màn hình cho độ đổ bóng của đổ bóng
  },
});
