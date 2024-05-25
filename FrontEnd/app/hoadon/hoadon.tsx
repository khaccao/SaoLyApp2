import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function InvoiceScreen() {
  const handleBackPress = () => {
    Alert.alert('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackPress}>
          <AntDesign name="left" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.header}>Hóa Đơn</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {/* Mẫu dữ liệu tạm thời để hiển thị giao diện */}
        <View style={styles.itemContainer}>
          <View style={styles.itemHeader}>
            <Entypo name="home" style={styles.homeIcon} />
            <Text style={styles.itemTitle}>Sao Ly Beauty & Academy 37 Vũ Phạm Hàm</Text>
          </View>
          <Text style={styles.itemDate}>15/05/2024 12:00</Text>
          <View style={styles.itemBody}>
            <Image source={require('../../assets/images/profilecompany.png')} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.masterText}>Master: Hoàng Minh Tú</Text>
              <Text style={styles.priceText}>Giá : 1000 $</Text>
              <TouchableOpacity>
              <View style={styles.ratingContainer}>
              {Array.from({ length: 5 }).map((_, i) => (
                <AntDesign key={i} name="star" style={styles.starIcon} />
              ))}
            </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 25,
    color: '#CFAE78',
  },
  header: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeIcon: {
    fontSize: 20,
    marginRight: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDate: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
  },
  itemBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  masterText: {
    fontSize: 12,
    color: '#888',
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    fontSize: 18,
    color: '#FFD700',
    padding:1,
    marginTop: 3,
    marginRight: 3,
  },
});
