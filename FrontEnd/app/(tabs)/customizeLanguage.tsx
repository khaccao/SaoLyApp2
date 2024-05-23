import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Thêm import này

export default function Profile() {
    const [selectedLanguage, setSelectedLanguage] = useState('vietnamese');

    const toggleLanguage = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Ngôn ngữ</Text>
                <View style={styles.emptyView} />
            </View>
            <View style={styles.accountContainer}>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton} onPress={() => toggleLanguage('english')}>
                        <Text style={styles.buttonText}>Tiếng Anh</Text>
                        <View style={styles.iconContainer}>
                            {selectedLanguage === 'english' ? <MaterialCommunityIcons name="radiobox-marked" size={24} color="black" /> : <MaterialCommunityIcons name="radiobox-blank" size={24} color="black" />}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton} onPress={() => toggleLanguage('vietnamese')}>
                        <Text style={styles.buttonText}>Tiếng Việt</Text>
                        <View style={styles.iconContainer}>
                            {selectedLanguage === 'vietnamese' ? <MaterialCommunityIcons name="radiobox-marked" size={24} color="black" /> : <MaterialCommunityIcons name="radiobox-blank" size={24} color="black" />}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

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
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
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
    },
    accountButtons: {
        marginTop: 10,
        flexDirection: 'column',
        marginBottom: 10,
    },
    accountButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 14,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});
