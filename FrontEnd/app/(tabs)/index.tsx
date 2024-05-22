import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function HomeScreen() {
  return (
<View style={styles.container}>
  <View style={styles.profileContainer}>
    <Image
      source={require('../../assets/images/avatarHung.jpg')}
      style={styles.profileImage}
    />
    <View style={styles.cameraContainer}>
      <TouchableOpacity style={styles.cameraIcon}>
        <Ionicons name="camera" size={24} color="white" />
      </TouchableOpacity>
    </View>
    <View style={styles.profileInfo}>
      <ThemedText style={styles.nameInf} type="default">Name</ThemedText>
      <ThemedText type="default">Rank</ThemedText>
      <View style={styles.userInfo}>
        <ThemedText type="default">0987777777</ThemedText>
      </View>
    </View>
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
    <View style={styles.cornerRadius} />
  </View>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FDEFDD',
    borderRadius: 2,
    overflow: 'hidden',
    position: 'relative',
  },
  cameraContainer: {
    position: 'absolute',
    top: 65,
    left: 60,
    transform: [{ translateX: -12 }, { translateY: -12 }], // Half of the camera icon size
    backgroundColor: 'rgba(0,0,0,0.5)', // Transparent black for the overlay effect
    borderRadius: 999, // Large enough value to create a circle
    zIndex: 1, // Ensure camera icon appears above profile image
  },
  cameraIcon: {
    padding: 8,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginRight: 16,
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'space-between', // Align items evenly
  },
  nameInf:{
    fontWeight: 'bold',
    fontSize:22,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconFrame: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    padding: 8,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsWrapper: {
    backgroundColor: '#FDEFDD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
    borderRadius: 16,
  },
  pointsContainer: {
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
    flexDirection: 'row', // Add this line to align text and icon horizontally
},
iconButton: {
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 40,
    marginRight:10,
},
iconText: {
    fontSize: 12,
    color: 'black',
    marginLeft: 5, // Add some space between the icon and the text
    fontWeight:'bold'
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
});
