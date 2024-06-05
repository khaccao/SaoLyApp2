import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

const AdmintatcaCoso = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/LogoSaoly.png')} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}> Cơ sở</Text>
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
            <TouchableOpacity style={styles.imageEdit}>
            <Image source={require('../../assets/images/avt.png')} style={styles.avatar1} />
            <AntDesign name="edit" size={16} color="black" style={styles.editIcon} />
              <Text style={styles.imageEditText}>Sửa ảnh</Text>
            </TouchableOpacity>
            <View style={styles.productInfo}>
              <Text style={styles.productText}>Tên cơ sở:</Text>
              <Text style={styles.productText}>Địa chỉ:</Text>
            </View>
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
    marginLeft: 175,
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
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageEdit: {
    alignItems: 'center',
  },
  imageEditText: {
    marginTop: 10,
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productText: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityInput: {
    width: 40,
    height: 30,
    textAlign: 'center',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: -5,
  },
});
export default AdmintatcaCoso;
