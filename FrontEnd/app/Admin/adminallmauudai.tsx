import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/LogoSaoly.png')} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mã ưu đãi</Text>
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

        {/* Bắt đầu thêm giao diện sản phẩm */}
        <View style={styles.productContainer}>
          <View style={styles.productCard}>
            <Text style={styles.productCode}>MKDCM7979KLPKT</Text>
            <View style={styles.productActionsContainer}>
              <View style={styles.productActions}>
                <TouchableOpacity>
                  <Ionicons name="information-circle-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="create-outline" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="trash-outline" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Nhân bản sản phẩm */}
        </View>
        {/* Kết thúc thêm giao diện sản phẩm */}
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
    flexDirection: 'row',
  },
  logo: {
    marginTop: 50,
    marginRight: 20,
    marginLeft: -10,
    width: 164,
    height: 42,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 140,
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
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 20,
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
  avatar1: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginLeft: 5,
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
  productContainer: {
    padding: 10,
  },
  productCard: {
    backgroundColor: '#FDEFDD',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
  },
  productCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24
  },
  productActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 300,
    marginTop: 15
  },
});
