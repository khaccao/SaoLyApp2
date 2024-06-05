import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

const AdminCreate = ()=> {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/LogoSaoly.png')} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tạo tất cả</Text>
        </View>
        <View>
        </View>
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color="black" style={styles.searchIcon} />
            <TextInput style={styles.searchBar} placeholder="Search..." />
          </View>
          <View style={styles.notificationContainer}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>20</Text>
            </View>
          </View>
          <Image source={require('../../assets/images/avt.png')} style={styles.avatar} />
        </View>

        <TouchableOpacity style={styles.backButton}>
          <AntDesign style={styles.backButtonIcon} name="left" size={24} />
          <Text style={styles.backButtonText}>Quay lại</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          {['Tạo Khóa học', 'Tạo Sản Phẩm', 'Tạo Mã Ưu Đãi', 'Tạo Voucher', 'Tạo Cơ Sở'].map((text) => (
            <TouchableOpacity style={styles.button} key={text}>
              <Ionicons name="add-circle-outline" size={50} color="black" />
              <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',

  },
  header: {
    backgroundColor: '#FFEBCD',
    flexDirection: 'row'
  },
  logo: {
    marginTop: 50,
    marginRight: 20,
    marginLeft: -10,
    width: 164, // Tăng kích thước logo
    height: 42, // Tăng kích thước logo
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft:140,
  },
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#FFEBCD',
    paddingHorizontal: 20,
    paddingVertical: 10,
    
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 20, // BorderRadius cho thanh tìm kiếm
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 20

  },
  searchIcon: {
    marginRight: 5,
  },
  searchBar: {
    flex: 1,
    height: 40,
    
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginLeft: 10,
  },
  notificationBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    right: -10,
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 1,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  backButtonIcon: {
    color: '#CFAE78',
  },
});
export default AdminCreate