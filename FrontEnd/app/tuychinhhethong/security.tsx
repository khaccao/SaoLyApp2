import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Profile() {
    const [selectedOptions, setSelectedOptions] = useState({
        saveInfoLogin: false,
        accessLocation: false,
    });

    const toggleOption = (option) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [option]: !prevOptions[option],
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Bảo Mật</Text>
                <View style={styles.emptyView} />
            </View>
            <ScrollView style={styles.accountContainer}>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialIcons name="devices" size={24} color="black" />
                        <Text style={styles.buttonText}>Thiết bị của bạn</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialIcons name="domain-verification" size={24} color="black" />
                        <Text style={styles.buttonText}>Xác minh hai bước</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton} onPress={() => toggleOption('saveInfoLogin')}>
                        <AntDesign name="save" size={24} color="black" />
                        <Text style={styles.buttonText}>Lưu thông tin đăng nhập</Text>
                        <View style={styles.radioContainer}>
                            <MaterialCommunityIcons name={selectedOptions.saveInfoLogin ? 'radiobox-marked' : 'radiobox-blank'} size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>
                        Kích hoạt tính năng tuỳ chọn nếu bạn không muốn được tìm thấy bởi người khác.
                    </Text>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialIcons name="manage-accounts" size={24} color="black" />
                        <Text style={styles.buttonText}>Quản lý đăng nhập</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
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
        flex: 1,
    },
    iconContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    radioContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingLeft: 20,
    },
    subText: {
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 5,
        fontSize: 12,
        color: '#6F6F6F',
    },
});
