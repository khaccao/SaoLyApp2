import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Courseduration() {
  const handlePress = () => {
    // Handle the button press here
    alert('Back button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.backButtonContainer}>
        <AntDesign style={styles.backbutton} name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Thời gian khoá học</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.courseCard}>
          <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/441519921_3628710104016464_1003927403823046604_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHQfpHuZZvmVGDFoydIwr6wXO1hn64q09hc7WGfrirT2IFNwudKFkvHFYsc-6EidGmvQ8CfgFRLmD3qQRw1Vd7W&_nc_ohc=fgPVVnstH0QQ7kNvgHcCoNz&_nc_ht=scontent.fhan17-1.fna&oh=00_AYD9Gx4OfbcBPAVYoDregZUr8OlLDvZqb7UdzsPngErijw&oe=665218C7' }} style={styles.courseCardImage} />
          <View style={styles.courseCardTextContainer}>
            <Text style={styles.courseCardText}>Thời gian còn lại: 5 buổi</Text>
            <Text style={styles.courseCardSubText}>Trạng thái: Online</Text>
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
    left: 10,
    padding: 10,
  },
  backbutton: {
    fontSize: 35,
    color: '#CFAE78',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#FDEFDD',
    margin: 10,
    padding: 15,
    alignItems: 'center',
  },
  courseCardImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Thêm bo tròn cho hình ảnh
    marginRight: 15,
  },
  courseCardTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
    padding: 15
  },
  courseCardText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  courseCardSubText: {
    fontSize: 14,
    color: '#000'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerItem: {
    fontSize: 16,
  },
});

