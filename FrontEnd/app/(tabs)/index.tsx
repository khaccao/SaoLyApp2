import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const App = () => {
  const blocks = [
    { id: 1, name: 'Thiết kế chân mày, môi phong thủy', image: require('../../assets/images/dichvu1.jpg') },
    { id: 2, name: 'Phum xăm môi', image: require('../../assets/images/dichvu2.jpg') },
    { id: 3, name: 'Laser sửa chân mày', image: require('../../assets/images/dichvu3.jpg') },
    { id: 4, name: 'Máy Đục Thần Thánh', image: require('../../assets/images/dichvu2.jpg') },
    { id: 5, name: 'Block 5', image: require('../../assets/images/dichvu1.jpg') },
    { id: 6, name: 'Block 6', image: require('../../assets/images/slide3.jpg') },
    { id: 7, name: 'Block 7', image: require('../../assets/images/slide2.jpg') },
    { id: 8, name: 'Block 8', image: require('../../assets/images/slide1.jpg') },
  ];
  const blocks2 = [
    { id: 9, name: 'SOFT LINER', image: require('../../assets/images/muc1.jpg') },
    { id: 10, name: 'NANO Ombre', image: require('../../assets/images/muc2.jpg') },
    { id: 11, name: 'MASTER', image: require('../../assets/images/muc2.jpg') },
    { id: 12, name: 'PROMAX', image: require('../../assets/images/muc1.jpg') },
    { id: 13, name: 'PROMAX', image: require('../../assets/images/muc2.jpg') },
  ];
  const blocks3 = [
    { id: 14, name: 'Máy Xăm Hình', image: require('../../assets/images/mucdimoi.jpg') },
    { id: 15, name: 'Máy Phun Xăm', image: require('../../assets/images/muc2.jpg') },
    { id: 16, name: 'Máy Phun Xăm', image: require('../../assets/images/mucdimoi.jpg') },
    { id: 17, name: 'Máy Phun Xăm', image: require('../../assets/images/muc1.jpg') },
    { id: 18, name: 'Máy Phun Xăm', image: require('../../assets/images/mucdimoi.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Section 1 */}
      <View style={styles.section1}>
        {/* Section 1 Content */}
        <View style={styles.section1Content}>
          {/* Left Part */}
          <View style={styles.leftPart}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/avatarHung.jpg')}
                style={styles.image}
              />
              <MaterialCommunityIcons name="camera" size={24} color="white" style={styles.cameraIcon} />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.rank}>Rank</Text>
              <Text style={styles.phone}>Phone Number</Text>
            </View>
          </View>
          {/* Right Part */}
          <View style={styles.rightPart}>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.ticketButton}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="black" />
                <Text style={styles.iconText}>12</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialIcons name="notifications-none" size={34} color="black" />
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>20</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.pointsContainer}>
              <Text style={styles.points}>999 điểm</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Slide Container */}
      <View style={styles.slideContainer}>
        <Swiper style={styles.wrapper} dotStyle={styles.dot} activeDotStyle={[styles.dot, styles.activeDot]}>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/slidehome4.jpg')} style={styles.slideImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/slidehome1.jpg')} style={styles.slideImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/slidehome3.jpg')} style={styles.slideImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/slidehome2.jpg')} style={styles.slideImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/slidehome5.jpg')} style={styles.slideImage} />
</View>
</Swiper>
</View>
  {/* Divider */}
  <View style={styles.divider} />

  {/* Section 3 */}
  <View style={styles.section3}>
    <View style={styles.titleContainer}>
      <View style={styles.rectangle} />
      <Text style={styles.sectionTitle}>Dịch Vụ Làm Đẹp</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {blocks.map(block => (
        <TouchableOpacity 
          key={block.id} 
          style={styles.block} 
          onPress={() => alert(`Learn More about ${block.name}`)}
        >
          <Image source={block.image} style={styles.blockImage} />
          <Text style={styles.blockName}>{block.name}</Text>
          <Text style={styles.learnMore}>Tìm hiểu thêm</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>

  {/* Divider */}
  <View style={styles.divider} />

  {/* Section 4 */}
  <View style={styles.section4}>
    <View style={styles.titleContainer}>
      <View style={styles.rectangle} />
      <Text style={styles.sectionTitle}>Khóa Học</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {blocks2.map(block => (
        <TouchableOpacity 
          key={block.id} 
          style={styles.block} 
          onPress={() => alert(`Learn More about ${block.name}`)}
        >
          <Image source={block.image} style={styles.blockImage} />
          <Text style={styles.blockName}>{block.name}</Text>
          <Text style={styles.learnMore}>Tìm hiểu thêm</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>

  {/* Divider */}
  <View style={styles.divider} />

  {/* Section 5 */}
  <View style={styles.section5}>
    <View style={styles.titleContainer}>
      <View style={styles.rectangle} />
      <Text style={styles.sectionTitle}>Sản Phẩm</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {blocks3.map(block => (
        <TouchableOpacity 
          key={block.id} 
          style={styles.block} 
          onPress={() => alert(`Learn More about ${block.name}`)}
        >
          <Image source={block.image} style={styles.blockImage} />
          <Text style={styles.blockName}>{block.name}</Text>
          <Text style={styles.learnMore}>Tìm hiểu thêm</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>

  {/* Bottom spacing */}
  <View style={{ height: height * 0.1 }} />
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: height * 0.05,
backgroundColor: '#F7F7F7'
},
section1: {
backgroundColor: '#FDEFDD',
marginBottom: height * 0.02,
},
section1Content: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: height * 0.01,
},
leftPart: {
flexDirection: 'row',
alignItems: 'center',
},
imageContainer: {
position: 'relative',
},
image: {
width: width * 0.25,
height: width * 0.25,
borderRadius: width * 0.5,
},
cameraIcon: {
position: 'absolute',
top: '50%',
left: '50%',
transform: [{ translateX: -12 }, { translateY: -12 }],
},
info: {
marginLeft: width * 0.03,
},
name: {
fontWeight: 'bold',
fontSize: width * 0.055,
},
rank: {
fontSize: width * 0.04,
color: 'black',
},
phone: {
fontSize: width * 0.04,
color: 'black',
},
dot: {
backgroundColor: 'lightgrey',
width: width * 0.0125,
height: width * 0.0125,
borderRadius: width * 0.01,
margin: width * 0.01,
},
activeDot: {
backgroundColor: 'grey',
},
rightPart: {
alignItems: 'center',
},
headerIcons: {
flexDirection: 'row',
alignItems: 'center',
},
ticketButton: {
marginLeft: width * 0.05,
alignItems: 'center',
backgroundColor: '#EEEEEE',
borderRadius: width * 0.1,
paddingHorizontal: width * 0.0375,
paddingVertical: height * 0.005,
borderWidth: 1,
borderColor: '#E0E0E0',
flexDirection: 'row',
shadowRadius: 5,
shadowOpacity: 0.5,
},
iconButton: {
marginLeft: width * 0.025,
backgroundColor: '#EEEEEE',
alignItems: 'center',
borderRadius: width * 0.1,
shadowRadius: 5,
shadowOpacity: 0.5,
},
iconText: {
fontSize: width * 0.03,
color: 'black',
marginLeft: width * 0.0125,
fontWeight: 'bold',
},
notificationBadge: {
position: 'absolute',
top: -5,
right: -10,
backgroundColor: 'red',
borderRadius: width * 0.025,
paddingHorizontal: width * 0.0125,
paddingVertical: height * 0.0025,
},
notificationText: {
color: 'white',
fontSize: width * 0.025,
},
pointsContainer: {
height: height * 0.04,
width: width * 0.225,
marginTop: height * 0.0125,
padding: height * 0.00625,
backgroundColor: '#CEC2B4',
borderTopLeftRadius: width * 0.025,
borderBottomLeftRadius: width * 0.025,
borderTopRightRadius: 0,
borderBottomRightRadius: 0,
marginLeft: width * 0.15,
shadowRadius: 4,
shadowOpacity: 0.5,
textAlign: 'center',
},
points: {
fontSize: width * 0.035,
color: 'black',
textAlign: 'center',
},
slideContainer: {
height: height * 0.2,
justifyContent: 'flex-start',
marginHorizontal: width * 0.0375,
},
wrapper: {},
slide: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
slideImage: {
width: '100%',
height: '100%',
borderRadius: width * 0.05,
},
divider: {
height: 1,
backgroundColor: '#CCCCCC',
marginVertical: height * 0.025,
marginHorizontal: width * 0.0625,
},
section3: {
paddingHorizontal: width * 0.025,
},
titleContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: height * 0.0125,
},
rectangle: {
width: width * 0.0125,
height: height * 0.025,
backgroundColor: '#B19E5B',
marginRight: width * 0.025,
},
sectionTitle: {
fontSize: width * 0.045,
fontWeight: 'bold',
},
block: {
width: width * 0.375,
marginRight: width * 0.025,
alignItems: 'center',
justifyContent: 'space-between',
borderWidth: 1,
borderColor: '#CCCCCC',
backgroundColor: 'white',
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},
blockImage: {
width: '100%',
height: height * 0.18,
},
blockName: {
marginTop: height * 0.0125,
fontSize: width * 0.03,
fontWeight: 'bold',
textAlign: 'center',
},
learnMore: {
marginTop: height * 0.0375,
color: 'black',
textAlign: 'center',
},
section4: {
paddingHorizontal: width * 0.025,
paddingBottom: height * 0.025,
},
section5: {
paddingHorizontal: width * 0.025,
paddingBottom: height * 0.025,
},
});

export default App;