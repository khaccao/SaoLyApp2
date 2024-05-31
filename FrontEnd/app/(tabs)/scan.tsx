import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookingSteps = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const steps = [
    { id: 1, icon: <AntDesign name="home" size={24} color="black" />, text: 'Chọn Cơ Sở' },
    { id: 2, icon: <MaterialCommunityIcons name="package-variant" size={24} color="black" />, text: 'Chọn Dịch Vụ' },
    { id: 3, icon: <AntDesign name="user" size={24} color="black" />, text: 'Chọn Master' },
    { id: 4, icon: <AntDesign name="calendar" size={24} color="black" />, text: 'Chọn Ngày, Giờ' },
  ];

  const options = {
    1: ['Cơ Sở 1', 'Cơ Sở 2', 'Cơ Sở 3'],
    2: ['Dịch Vụ 1', 'Dịch Vụ 2', 'Dịch Vụ 3'],
    3: ['Master 1', 'Master 2', 'Master 3'],
    4: [], // Options will be handled by DatePicker
  };

  const handleOptionSelect = (stepId, optionIndex) => {
    setSelectedOptions(prev => ({ ...prev, [stepId]: optionIndex }));
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSelectedOptions(prev => ({ ...prev, 4: `${formattedDate} ${formattedTime}` }));
    setSelectedTime(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.stepsContainer}>
      <View style={styles.stepContainer}>
        {steps.map(step => (
          <View key={step.id}>
            <TouchableOpacity
              style={[styles.step, selectedStep === step.id && styles.selectedStep]}
              onPress={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
            >
              <View style={styles.iconWrapper}>{step.icon}</View>
              <Text style={styles.stepText}>{step.text}</Text>
              <Text style={styles.arrow}>▶</Text>
            </TouchableOpacity>
            {selectedStep === step.id && (
              <View style={styles.subOptionsContainer}>
                {step.id !== 4 ? (
                  options[step.id].map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[styles.subOption, selectedOptions[step.id] === index && styles.selectedSubOption]}
                      onPress={() => handleOptionSelect(step.id, index)}
                    >
                      <Text style={styles.subOptionText}>{option}</Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <View>
                    <TouchableOpacity
                      style={[styles.subOption, styles.datePickerButton]}
                      onPress={() => setShowDatePicker(true)}
                    >
                      <Text style={styles.subOptionText}>
                        {selectedOptions[4] || 'Chọn Ngày, Giờ'}
                      </Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                      <View>
                        <DateTimePicker
                          value={selectedDate}
                          mode="datetime"
                          display="default"
                          onChange={handleDateChange}
                        />
                      </View>
                    )}
                  </View>
                )}
              </View>
            )}
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Chốt Lịch Hẹn</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const CustomizeLanguage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="left" size={20} color="#CFAE78" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Đặt Lịch</Text>
        <View style={styles.emptyView} />
      </View>
      <View style={styles.accountContainer}>
        <BookingSteps />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 90,
    paddingTop: Platform.OS === 'ios' ? 20 : 10, // Điều chỉnh giá trị paddingTop ở đây
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },  
  iconButton: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyView: {
    width: 20,
  },
  accountContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  stepsContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 11,
    backgroundColor: '#fff',
  },
  stepContainer: {
    width: '100%',
    marginBottom: 20,
  },
  step: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  selectedStep: {
    backgroundColor: '#e0e0e0',
    borderColor: '#a0a0a0',
  },
  iconWrapper: {
    width: 30,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  arrow: {
    fontSize: 18,
    color: '#aaa',
  },
  subOptionsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  subOption: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  selectedSubOption: {
    backgroundColor: '#e0e0e0',
    borderColor: '#a0a0a0',
  },
  subOptionText: {
    fontSize: 16,
  },
  datePickerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#d3b17d',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default CustomizeLanguage;

