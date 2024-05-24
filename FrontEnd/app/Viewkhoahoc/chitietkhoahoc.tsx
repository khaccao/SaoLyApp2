import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Detail() {
  const handlePress = () => {
    alert('Back button pressed');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.backButtonContainer}>
        <AntDesign style={styles.backbutton} name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Chi tiết khoá học</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.courseCard}>
          <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/385321475_3483756405178502_2999170051770681957_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEFPyErFwdgNQoD6eoJBuZyJjCZ3XB27QomMJndcHbtCoCBuqG_kKsf_9w7_1asdjVq4BU_T1Kq0iVo766_5GgK&_nc_ohc=t_gBz7fGmYwQ7kNvgFABTtt&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAMrLQQJW7s5m2ZsFKmbd88D-mrzOz-uxWGK6ySukk_eg&oe=6650BB18' }} style={styles.courseCardImage} />
          <View style={styles.courseCardTextContainer}>
            <Text style={styles.courseCardTitle}>StarBrown</Text>
            <Text style={styles.courseCardText}>Mô tả:</Text>
            <Text style={styles.courseCardText}>B1: Giới thiệu chuyên môn</Text>
            <Text style={styles.courseCardText}>B2: Vẽ Sợi</Text>
            <Text style={styles.courseCardText}>B3: Thực hành</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Đăng kí</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF4EB',
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
  },
  backbutton: {
    fontSize: 35,
    color: '#CFAE78',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FAF4EB',
  },
  courseCard: {
    backgroundColor: '#FDEFDD',
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseCardImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  courseCardTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Thêm dòng này để căn giữa tiêu đề và nút
  },
  courseCardTitle: {
    fontSize: 18,
    marginBottom: 10,
    marginRight: 70,
    textAlign: 'center', // Căn giữa tiêu đề
  },
  courseCardText: {
    fontSize: 14,
    color: '#000',
    alignSelf: 'flex-start', // Căn trái mô tả và các mục khác
    paddingLeft: 15, // Thêm khoảng cách trái cho mục khác
    padding: 2,
  },
  button: {
    backgroundColor: '#CFAE78',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10, // Thêm khoảng cách trên cho nút
    marginBottom: 1,
    marginRight: 70,
    width: 130,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
});
