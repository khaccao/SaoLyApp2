import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts } from 'expo-font';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Bold': require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    });

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    const handleRegister = () => {
        // Your registration logic here
    };

    const handleGoBack = () => {
        // Your go back logic here
    };

    const formatDate = (date) => {
        if (!date) return "Chọn ngày";
        return date.toLocaleDateString("vi-VN"); // Định dạng ngày/tháng/năm
    };

    if (!fontsLoaded) {
        return null; // or a loading spinner
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                {/* Go back button */}
                <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
                    <AntDesign name="left" size={24} color="#D1B37E" />
                </TouchableOpacity>

                {/* Rest of your UI */}
                <Image
                    source={require('../../assets/LogoSaoLy.png')}
                    style={styles.logo}
                />
                <Text style={[styles.loginText, { fontWeight: 'bold' }]}>Tạo tài khoản mới</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Họ và tên</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#ccc"
                    />
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#ccc"
                        keyboardType="email-address"
                    />
                    <Text style={styles.inputLabel}>Ngày sinh</Text>
                    <TouchableOpacity onPress={showDatePicker} style={styles.dateInput}>
                        <Text>{formatDate(selectedDate)}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <Text style={styles.inputLabel}>Số điện thoại</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#ccc"
                        keyboardType="phone-pad"
                    />
                </View>

                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 380,
        height: 250,
        position: 'absolute', // Use absolute positioning
        left: 36,
        top: 20,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    loginText: {
        paddingTop: 270,
        paddingBottom: 25,
        fontSize: 20,
    },
    inputContainer: {
        width: '80%',
        marginTop: 20,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        marginVertical: 5,
    },
    dateInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
    },
    registerButton: {
        backgroundColor: '#D1B37E',
        padding: 10,
        width: '60%',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    goBackButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 60 : 40, // Adjust position for iOS and Android
        left: 20,
        zIndex: 1, // Ensure it's above other elements
    },
});
