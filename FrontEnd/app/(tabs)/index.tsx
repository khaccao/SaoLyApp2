import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
<<<<<<< HEAD

const App = () => {
  const blocks = [
    { id: 1, name: 'Máy Rung Thần Thánh', image: require('../../assets/images/maythanthanh2.jpg') },
    { id: 2, name: 'Máy Cạo Thần Thánh', image: require('../../assets/images/avatarHung.jpg') },
    { id: 3, name: 'Máy Sonic', image: require('../../assets/images/maythanthanh2.jpg') },
    { id: 4, name: 'Máy Đục Thần Thánh', image: require('../../assets/images/slide2.jpg') },
    { id: 5, name: 'Block 5', image: require('../../assets/images/slide1.jpg') },
    { id: 6, name: 'Block 6', image: require('../../assets/images/slide3.jpg') },
    { id: 7, name: 'Block 7', image: require('../../assets/images/slide2.jpg') },
    { id: 8, name: 'Block 8', image: require('../../assets/images/slide1.jpg') },
  ];
  const blocks2 = [
    { id: 9, name: 'Máy Xăm Hình', image: require('../../assets/images/muc1.jpg') },
    { id: 10, name: 'Máy Phun Xăm', image: require('../../assets/images/muc2.jpg') },
    { id: 11, name: 'Máy Phun Xăm', image: require('../../assets/images/muc2.jpg') },
    { id: 12, name: 'Máy Phun Xăm', image: require('../../assets/images/muc1.jpg') },
    { id: 13, name: 'Máy Phun Xăm', image: require('../../assets/images/muc2.jpg') },
    // Thêm các block khác nếu cần
  ];
  const blocks3 = [
    { id: 14, name: 'Máy Xăm Hình', image: require('../../assets/images/mucdimoi.jpg') },
    { id: 15, name: 'Máy Phun Xăm', image: require('../../assets/images/muc2.jpg') },
    { id: 16, name: 'Máy Phun Xăm', image: require('../../assets/images/mucdimoi.jpg') },
    { id: 17, name: 'Máy Phun Xăm', image: require('../../assets/images/muc1.jpg') },
    { id: 18, name: 'Máy Phun Xăm', image: require('../../assets/images/mucdimoi.jpg') },
    // Thêm các block khác nếu cần
  ];

=======
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
    // Thêm các block khác nếu cần
  ];
  const blocks3 = [
    { id: 14, name: 'Máy Xăm Hình', image: require('../../assets/images/mucdimoi.jpg') },
    { id: 15, name: 'Máy Phun Xăm', image: require('../../assets/images/muc2.jpg') },
    { id: 16, name: 'Máy Phun Xăm', image: require('../../assets/images/mucdimoi.jpg') },
    { id: 17, name: 'Máy Phun Xăm', image: require('../../assets/images/muc1.jpg') },
    { id: 18, name: 'Máy Phun Xăm', image: require('../../assets/images/mucdimoi.jpg') },
    // Thêm các block khác nếu cần
  ];

>>>>>>> KhacCao
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section1}>
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

      {/* Slide Section */}
      <View style={styles.slideContainer}>
        <Swiper style={styles.wrapper} dotStyle={styles.dot} activeDotStyle={[styles.dot, styles.activeDot]}>
          <View style={styles.slide}>
<<<<<<< HEAD
            <Image source={require('../../assets/images/slide1.jpg')} style={styles.slideImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/avatarHung.jpg')} style={styles.slideImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/slide3.jpg')} style={styles.slideImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/slide2.jpg')} style={styles.slideImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/images/slide1.jpg')} style={styles.slideImage} />
=======
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
>>>>>>> KhacCao
          </View>
        </Swiper>
      </View>
      {/* Divider */}
      <View style={styles.divider} />

      {/* Section 3 */}
      <View style={styles.section3}>
        <View style={styles.titleContainer}>
          <View style={styles.rectangle} />
<<<<<<< HEAD
          <Text style={styles.sectionTitle}>Máy Phun Xăm</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {blocks.map(block => (
            <View key={block.id} style={styles.block}>
              <Image source={block.image} style={styles.blockImage} />
              <Text style={styles.blockName}>{block.name}</Text>
              <TouchableOpacity onPress={() => alert(`Learn More about ${block.name}`)}>
                <Text style={styles.learnMore}>Tìm hiểu thêm</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
=======
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
>>>>>>> KhacCao
      </View>

      {/* Divider */}
      <View style={styles.divider} />

{/* Section 4 */}
<View style={styles.section4}>
  <View style={styles.titleContainer}>
    <View style={styles.rectangle} />
<<<<<<< HEAD
    <Text style={styles.sectionTitle}>Mực Collagen</Text>
  </View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {blocks2.map(block => (
      <View key={block.id} style={styles.block}>
        <Image source={block.image} style={styles.blockImage} />
        <Text style={styles.blockName}>{block.name}</Text>
        <TouchableOpacity onPress={() => alert(`Learn More about ${block.name}`)}>
          <Text style={styles.learnMore}>Tìm hiểu thêm</Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
=======
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
>>>>>>> KhacCao
</View>
      {/* Divider */}
      <View style={styles.divider} />
    {/* Section 5 */}
    <View style={styles.section5}>
      <View style={styles.titleContainer}>
        <View style={styles.rectangle} />
<<<<<<< HEAD
        <Text style={styles.sectionTitle}>Mực Đi Sợi</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {blocks3.map(block => (
          <View key={block.id} style={styles.block}>
            <Image source={block.image} style={styles.blockImage} />
            <Text style={styles.blockName}>{block.name}</Text>
            <TouchableOpacity onPress={() => alert(`Learn More about ${block.name}`)}>
              <Text style={styles.learnMore}>Tìm hiểu thêm</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
=======
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
    <View style={{ height: 50 }} />
>>>>>>> KhacCao
        </ScrollView>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#F7F7F7'
  },
  section1: {
    backgroundColor: '#FDEFDD',
    marginBottom: 20,
  },
  shadow: {
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.25,
    width: '100%',
    height: 7, // Độ dài của bóng bạn có thể điều chỉnh tùy ý
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  section1Content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  leftPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  cameraIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  rank: {
    fontSize: 16,
    color: 'black',
  },
  phone: {
    fontSize: 16,
    color: 'black',
  },
  dot: {
    backgroundColor: 'lightgrey',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
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
    marginLeft: 20,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  iconButton: {
    marginLeft: 10,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    borderRadius: 40,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  iconText: {
    fontSize: 12,
    color: 'black',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
  },
  pointsContainer: {
    height: 30,
    width: 90,
    marginTop: 10,
    padding: 5,
    backgroundColor: '#CEC2B4',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginLeft: 60,
    shadowRadius: 4,
    shadowOpacity: 0.5,
    textAlign: 'center',
  },
  points: {
    fontSize: 14,
    color: 'black',
  },
  slideContainer: {
    height: 150,
    justifyContent:'flex-start',
    marginLeft: 15,
    marginRight: 15,
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
    borderRadius: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 20,
    marginRight: 25,
    marginLeft: 25,
  },
  section3: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rectangle: {
    width: 5,
    height: 20,
    backgroundColor: '#B19E5B',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  block: {
    width: 150,
    marginRight: 10,
    alignItems: 'center',
<<<<<<< HEAD
=======
    justifyContent: 'space-between', // Thêm vào đây
>>>>>>> KhacCao
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 0,
    padding: 0,
    backgroundColor: 'white',
    // Bóng cho iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Bóng cho Android
    elevation: 5,
  },
  
  blockImage: {
    width: 148,
    height: 140,
    borderRadius: 0,
  },
  blockName: {
    marginTop: 10,
<<<<<<< HEAD
    fontSize: 14,
=======
    fontSize: 12,
>>>>>>> KhacCao
    fontWeight: 'bold',
    textAlign: 'center',
  },
  learnMore: {
<<<<<<< HEAD
    marginTop: 5,
=======
    marginTop: 30,
>>>>>>> KhacCao
    color: 'black',
    textAlign: 'center',
  },
  section4: {
    paddingHorizontal: 10,
    paddingBottom: 20, // Added paddingBottom for scrollability
  },
  section5: {
    paddingHorizontal: 10,
    paddingBottom: 20, // Added paddingBottom for scrollability
  },
});

export default App;

