import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CustomizeInterface() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color={theme === 'light' ? '#CFAE78' : '#FFD700'} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Tuỳ Chỉnh Giao Diện</Text>
                <View style={styles.emptyView} />
            </View>
            <ScrollView style={styles.accountContainer}>
                <View style={styles.demoContainer}>
                    <View style={styles.demoItem}>
                        <TouchableOpacity onPress={() => toggleTheme('light')} style={styles.demoButton}>
                            <Image source={require('../../assets/light-theme-demo.png')} style={styles.demoImage} />
                            <Text style={styles.demoText}>Sáng</Text>
                            <View style={styles.radioContainer}>
                                <MaterialCommunityIcons name={theme === 'light' ? 'radiobox-marked' : 'radiobox-blank'} size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.demoItem}>
                        <TouchableOpacity onPress={() => toggleTheme('dark')} style={styles.demoButton}>
                            <Image source={require('../../assets/dark-theme-demo.png')} style={styles.demoImage} />
                            <Text style={styles.demoText}>Tối</Text>
                            <View style={styles.radioContainer}>
                                <MaterialCommunityIcons name={theme === 'dark' ? 'radiobox-marked' : 'radiobox-blank'} size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const createStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme === 'light' ? '#fff' : '#333',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 90,
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        backgroundColor: theme === 'light' ? '#fff' : '#444',
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
        color: theme === 'light' ? '#000' : '#fff',
    },
    emptyView: {
        width: 20,
    },
    accountContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: theme === 'light' ? '#fff' : '#333',
    },
    demoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    demoItem: {
        alignItems: 'center',
    },
    demoButton: {
        alignItems: 'center',
    },
    demoImage: {
        width: 150,
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    demoText: {
        fontSize: 16,
        color: theme === 'light' ? '#000' : '#fff',
    },
    radioContainer: {
        marginTop: 10,
    },
});

