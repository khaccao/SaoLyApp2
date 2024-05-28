import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/LogoSaoly.png')} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tạo sản phẩm</Text>
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
        <ScrollView style={styles.formContainer}>
          <TouchableOpacity style={styles.imageUpload}>
            <View style={styles.imageUploadIconContainer}>
            <Image source={require('../../assets/images/sanpham1.png')} style={styles.avatarkh} />
              <AntDesign name="edit" size={16} color="black" style={styles.editIcon} />
            </View>
            <Text style={styles.imageUploadText}>Sửa ảnh</Text>
          </TouchableOpacity>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Tên sản phẩm</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Xuất sứ</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Số lượng</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Giá tiền</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Mô tả</Text>
            <TextInput style={styles.inputmta} multiline numberOfLines={4} />
          </View>

          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Tạo</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
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
    marginLeft: 105,
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
  backButtonIcon: {
    color: '#CFAE78',
  },
  formContainer: {
    padding: 20,
  },
  imageUpload: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 1,
  },
  imageUploadIconContainer: {
    position: 'relative',
    padding: -10
  },
  editIcon: {
    position: 'absolute',
    bottom: -3,
    right: -10,
  },
  imageUploadText: {
    color: 'black',
    marginTop: 1,
    fontSize: 16,
  },
  inputGroup: {
    marginBottom: 5,
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
  },
  createButton: {
    backgroundColor: '#CFAE78',
    padding: 15,
    borderRadius: 20,
    marginTop: -20,
    marginLeft: 100,
    marginRight: 100,
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputmta: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    height: 100,
    textAlignVertical: 'top',
  },avatarkh:{
    width: 100,
    height: 80,
    borderRadius: 20,
    marginBottom: 1,
    marginLeft: 1,
  }
});