import React, { useState, useRef } from 'react';
import { StyleSheet, Platform, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

export default function CreateKeyCode() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Bold': require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    });

    const [code, setCode] = useState(["", "", "", ""]);
    const inputs = useRef([]);

    const handleGoBack = () => {
        // Logic for going back
    };

    const handleChangeText = (text, index) => {
        let newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        if (text && index < 3) {
            // Move to next input
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === "") {
            inputs.current[index - 1].focus();
        }
    };

    const handleNumberPress = (number) => {
        let newCode = [...code];
        for (let i = 0; i < newCode.length; i++) {
            if (newCode[i] === "") {
                newCode[i] = number;
                setCode(newCode);
                break;
            }
        }
    };

    const handleDeletePress = () => {
        let newCode = [...code];
        for (let i = newCode.length - 1; i >= 0; i--) {
            if (newCode[i] !== "") {
                newCode[i] = "";
                setCode(newCode);
                break;
            }
        }
    };

    if (!fontsLoaded) {
        return null; // Or a loading spinner
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                {/* Go back button */}
                <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
                    <AntDesign name="left" size={24} color="#D1B37E" />
                </TouchableOpacity>

                {/* Logo */}
                <Image
                    source={require('../../assets/LogoSaoLy.png')}
                    style={styles.logo}
                />

                {/* Title */}
                <Text style={[styles.title, { fontWeight: 'bold' }]}>Tạo mã khoá</Text>

                {/* Code input */}
                <View style={styles.codeContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={ref => inputs.current[index] = ref}
                            style={styles.codeInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            onChangeText={(text) => handleChangeText(text, index)}
                            value={digit}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            secureTextEntry={true}
                            editable={false} // Disable manual input
                        />
                    ))}
                </View>

                {/* Virtual keyboard */}
                <View style={styles.keyboard}>
                    <View style={styles.keyboardRow}>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("1")}>
                            <Text style={styles.numberText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("2")}>
                            <Text style={styles.numberText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("3")}>
                            <Text style={styles.numberText}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyboardRow}>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("4")}>
                            <Text style={styles.numberText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("5")}>
                            <Text style={styles.numberText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("6")}>
                            <Text style={styles.numberText}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyboardRow}>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("7")}>
                            <Text style={styles.numberText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("8")}>
                            <Text style={styles.numberText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("9")}>
                            <Text style={styles.numberText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.keyboardRow}>
                        <View style={{ width: '25%' }} />
                        <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress("0")}>
                            <Text style={styles.numberText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
                            <AntDesign name="close" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    title: {
        paddingTop: 200,
        paddingBottom: 80,
        fontSize: 24,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 30,
    },
    codeInput: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 25, // Make it round
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
    keyboard: {
        width: '80%',
        alignItems: 'center', // Center align the keyboard rows
    },
    keyboardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distribute space evenly between buttons
        marginBottom: 15,
        width: '80%', // Make the row take full width of the keyboard
    },
    numberButton: {
        width: 60,  // Ensure the width and height are the same for a circle
        height: 60,  // Ensure the width and height are the same for a circle
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,  // Half of the width and height for a circle
        backgroundColor: '#E0E0E0',
    },
    numberText: {
        fontSize: 24,
        color: '#000',
    },
    deleteButton: {
        width: 60,  // Ensure the width and height are the same for a circle
        height: 60,  // Ensure the width and height are the same for a circle
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,  // Half of the width and height for a circle
        backgroundColor: '#D1B37E',
    },
    goBackButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 60 : 40,
        left: 20,
        zIndex: 1,
    },
});
