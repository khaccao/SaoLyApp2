import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function CourseRegistration() {
  const handlePress = () => {
    // Handle the button press here
    alert('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.backButtonContainer}>
          <Text style={styles.backbutton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Khoá học đăng kí</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <TouchableOpacity onPress={handlePress} style={styles.sectionButton}>
            <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/441519921_3628710104016464_1003927403823046604_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHQfpHuZZvmVGDFoydIwr6wXO1hn64q09hc7WGfrirT2IFNwudKFkvHFYsc-6EidGmvQ8CfgFRLmD3qQRw1Vd7W&_nc_ohc=fgPVVnstH0QQ7kNvgHcCoNz&_nc_ht=scontent.fhan17-1.fna&oh=00_AYD9Gx4OfbcBPAVYoDregZUr8OlLDvZqb7UdzsPngErijw&oe=665218C7' }} style={styles.sectionButtonImage} />
            <Text style={styles.sectionButtonText}>L-Strokes</Text>
          </TouchableOpacity>
          <Text style={styles.header1}>Tất cả khoá học</Text>
          <View style={styles.course}>
            <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/385321475_3483756405178502_2999170051770681957_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEFPyErFwdgNQoD6eoJBuZyJjCZ3XB27QomMJndcHbtCoCBuqG_kKsf_9w7_1asdjVq4BU_T1Kq0iVo766_5GgK&_nc_ohc=t_gBz7fGmYwQ7kNvgFABTtt&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAMrLQQJW7s5m2ZsFKmbd88D-mrzOz-uxWGK6ySukk_eg&oe=6650BB18' }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <View style={styles.coursebackground}>
                <TouchableOpacity>
                  <Text style={styles.courseTitle}>StarBrown (offline)</Text>
                  <Text style={styles.courseDetails}>22/05 - 27/05 : 5 buổi</Text>
                  <Text style={styles.courseInstructor}>Grand Master: Saoly</Text>
                  <Text style={styles.coursePrice}>100.000.000 đ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.course}>
            <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/313399256_3249076735313138_8584330859742133610_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHRB9sfVs9nBQH_b7tLodG4lhO0ziJ9HfiWE7TOIn0d6NJ4MoLRO8lGqyeeAFyT0pFzGUmjiIcw4WJDp8ZudK8&_nc_ohc=vLnufgWcCPIQ7kNvgGSF_1Q&_nc_ht=scontent.fhan17-1.fna&oh=00_AYDEJ4TmJC_rwZMavQ3skiLkSZypeLn6D10A79zYg6cLHw&oe=665097C6' }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <View style={styles.coursebackground}>
                <TouchableOpacity>
                  <Text style={styles.courseTitle}>L-Strokes</Text>
                  <Text style={styles.courseDetails}>22/05 - 27/05 : 5 buổi</Text>
                  <Text style={styles.courseInstructor}>Grand Master: Saoly</Text>
                  <Text style={styles.coursePrice}>100.000.000 đ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Repeat for other courses */}
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
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  header: {
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
    color: '#CFAE78'
  },
  headerleft: {
    fontSize: 20,
    paddingLeft: 9,
  },
  header1: {
    fontSize: 20,
    padding: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDEFDD',
    padding: 16,
    marginBottom: 10,
  },
  sectionButtonImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  sectionButtonText: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1
  },
  course: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  courseInfo: {
    marginLeft: 10,
  },
  courseTitle: {
    fontSize: 16,
  },
  courseDetails: {
    fontSize: 14,
    color: '#000',
  },
  courseInstructor: {
    fontSize: 14,
    color: '#000',
  },
  coursePrice: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#000',
  },
  courseImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 30,
  },
  coursebackground: {
    backgroundColor: '#FDEFDD',
    padding: 10,
    width: 305,
    height: 100,
  },
});
