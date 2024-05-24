import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.backButtonContainer}>
        <AntDesign style={styles.backbutton} name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Voucher</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <AntDesign style ={styles.search} name="search1" size={24} color="black" />
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>ÁP DỤNG</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.voucherCard}>
          <TouchableOpacity>
              {/* <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/444480320_461119303239728_759147558197676765_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUsX7wvxu8wMsV2tVBZApRP7_CbGxsyZE_v8JsbGzJkU-cmRqRx8m4uiWFDVP13nE1KrRYoP4fB2ccFtGeK5gW&_nc_ohc=bFO3rSlKpEgQ7kNvgG2z4n5&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAjZ6nVKqwR08FKQwP5X7CXFUN1uEhPCGKEJbKMFFWy_w&oe=665473D8' }} style={styles.voucherImage} /> */}
          <Image
            source={require('../../assets/images/voucher5.png')} style={styles.voucherImage}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.voucherCard}>
          <TouchableOpacity>
              {/* <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/444480320_461119303239728_759147558197676765_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUsX7wvxu8wMsV2tVBZApRP7_CbGxsyZE_v8JsbGzJkU-cmRqRx8m4uiWFDVP13nE1KrRYoP4fB2ccFtGeK5gW&_nc_ohc=bFO3rSlKpEgQ7kNvgG2z4n5&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAjZ6nVKqwR08FKQwP5X7CXFUN1uEhPCGKEJbKMFFWy_w&oe=665473D8' }} style={styles.voucherImage} /> */}
          <Image
            source={require('../../assets/images/voucher2.png')} style={styles.voucherImage}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.voucherCard}>
          <TouchableOpacity>
              {/* <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/444480320_461119303239728_759147558197676765_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUsX7wvxu8wMsV2tVBZApRP7_CbGxsyZE_v8JsbGzJkU-cmRqRx8m4uiWFDVP13nE1KrRYoP4fB2ccFtGeK5gW&_nc_ohc=bFO3rSlKpEgQ7kNvgG2z4n5&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAjZ6nVKqwR08FKQwP5X7CXFUN1uEhPCGKEJbKMFFWy_w&oe=665473D8' }} style={styles.voucherImage} /> */}
          <Image
            source={require('../../assets/images/voucher1.png')} style={styles.voucherImage}
          />
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
  },
  header: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backbutton: {
    fontSize: 30,
    color: '#CFAE78',  // Adjust this color to match your design.
  },
  searchContainer: {
    marginHorizontal: 25,
    marginTop: 10,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#ccc',  // Match this with your screenshot's border color.
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop:5,
    height: 30,  // Adjust height for alignment.
  },
  applyButton: {
    backgroundColor: '#CFAE78',  // Match this with your button color from the screenshot.
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  applyButtonText: {
    color: '#fff',
  },
  scrollView: {
    marginHorizontal: 10,
    padding: 10
  },
  voucherCard: {
    borderRadius: 10,
    padding: 2,
    marginBottom: 10,
    alignItems: 'center'
  },
  voucherImage: {
    width: 350,
    height: 130,
    borderRadius: 10,
  },
  search:{
    marginTop: 8,
    marginLeft: 10,
    fontSize: 25,
    color: '#000',  // Adjust this color to match your design.
  }
});
