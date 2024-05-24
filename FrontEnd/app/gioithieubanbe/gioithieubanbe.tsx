import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Introducewithfriend() {
  const [showBottomText, setShowBottomText] = useState(false);

  const handleInvitePress = () => {
    setShowBottomText(true);
  };

  const handleOutsidePress = () => {
    if (showBottomText) {
      setShowBottomText(false);
    }
  };
  const handleBackPress = () => {
    Alert.alert('click');
  };
  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackPress}>
            <AntDesign style={styles.backbutton} name="left" color="black" />
          </TouchableOpacity>
          <Text style={styles.header}>Giới Thiệu Bạn Bè</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/profilecompany.png')} style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              "Khám phá vẻ đẹp của bạn, chia sẻ sự tỏa sáng của bạn. Nơi mỗi người bạn đều là tia sáng trong hành trình của bạn!"
            </Text>
            <View style={styles.discountContainer}>
              <MaterialCommunityIcons name="brightness-percent" size={24} color="black"/>
              <Text style={styles.discountText}>
                Khách hàng sẽ được giảm 3% đối với khi sử dụng 1 dịch vụ và 5% đối với 2 dịch vụ.
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleInvitePress}>
              <Text style={styles.buttonText}>Rủ bạn ngay</Text>
            </TouchableOpacity>
          </View>
          {showBottomText && (
            <View style={styles.bottomTextContainer}>
              <TouchableOpacity style={styles.optionButton}>
                <Entypo name="share-alternative" size={24} color="black" />
                <View>
                  <Text style={styles.optionText}>Chia sẻ liên kết</Text>
                  <Text style={styles.optionDescription}>Chia sẻ liên kết của tôi cho bạn bè để tải app</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <MaterialCommunityIcons name="qrcode" size={24} color="black" />
                <View>
                  <Text style={styles.optionText}>Chia sẻ mã QR</Text>
                  <Text style={styles.optionDescription}>Chia sẻ mã QR của tôi cho bạn bè để tải app</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
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
    padding: 10,
  },
  header: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    width: 40, // thêm chiều rộng cho nút
    height: 40, // thêm chiều cao cho nút
    justifyContent: 'center',
    alignItems: 'center',
  },
  backbutton: {
    fontSize: 25,
    color: '#CFAE78',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mainText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    color: '#000', // Adjust this color to match your design.
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  discountText: {
    fontSize: 12,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#CFAE78',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
    textAlign: 'center',
    width: 280,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: 12,
    marginLeft: 10,
  },
});
