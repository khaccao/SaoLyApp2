import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TabTwoScreen() {
  const navigation = useNavigation();

  const handleNavigateToAdminScreen = () => {
    navigation.navigate('Admin'); // Chuyển hướng đến màn hình "Admin"
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToAdminScreen}>
        <Text style={styles.buttonText}>Chuyển hướng đến Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#CFAE78',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
