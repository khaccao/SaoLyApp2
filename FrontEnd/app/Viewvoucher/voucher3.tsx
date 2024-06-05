import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Voucher3 = () => {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.backButtonContainer}>
          <AntDesign style={styles.backbutton} name="left" color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Voucher</Text>
      </View>
      <View style={styles.voucherContainer}>
        {/* <Image source={{ uri: '' }} style={styles.voucherImage} /> */}
        <Image
        source={require('../../assets/images/voucher2-1.png')} style={styles.voucherImage}
        />
        <View style={styles.voucherTextContainer}>
          <Text style={styles.voucherText}>
            " Mỗi gift card chỉ được sử dụng 1 lần và cho 1 khóa học bất kì không có giá trị quy đổi thành tiền mặt hoặc sản phẩm "
          </Text>
          <View style={styles.text1}>
            <Text style={styles.textMt}>1. Khóa PTTM chuyên nghiệp.</Text>
            <Text style={styles.textMt}>2. Khóa sợi siêu thực L-Stroke.</Text>
            <Text style={styles.textMt}>3. Khóa phun chân mày Soft Brows.</Text>
            <Text style={styles.textMt}>4. Khóa phun môi Rubylips.</Text>
            <Text style={styles.textMt}>5. Khóa phun môi Pen bong đậm.</Text>
            <Text style={styles.textMt}>6. Khóa phun mí chuyên nghiệp.</Text>
          </View>
          <View style={styles.text2}>
            <Text style={styles.Mt2}>Hotline: 0968.522.522 - 0977.373.770 </Text>
            <Text style={styles.Mt2}>Thời hạn sử dụng từ :</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nhận Voucher Ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  backButtonContainer: {
    position: 'absolute',
    left: 5,
  },
  header: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backbutton: {
    fontSize: 25,
    color: '#CFAE78',
  },
  voucherContainer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
    marginTop: 30,
  },
  voucherImage: {
    width: '100%',
    height: 250,
  },
  voucherTextContainer: {
    padding: 20,
  },
  voucherText: {
    marginBottom: 10,
    fontSize: 14,
    marginLeft: 8
  },
  text1: {
    marginTop: 20,
  },
  textMt: {
    padding: 5,
    fontSize: 14,
  },
  text2: {
    marginTop: 20,
  },
  Mt2: {
    padding: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#CFAE78',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Voucher3;
