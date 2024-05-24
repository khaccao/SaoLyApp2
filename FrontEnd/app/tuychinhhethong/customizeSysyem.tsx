import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function CustomeziSystem() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Tuỳ Chỉnh Hệ Thống</Text>
                <View style={styles.emptyView} />
            </View>
            <View style={styles.accountContainer}>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <FontAwesome5 name="user-shield" size={20} color="black" />
                        <Text style={styles.buttonText}>Quyền riêng tư</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <Feather name="lock" size={24} color="black" />
                        <Text style={styles.buttonText}>Bảo mật</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <Entypo name="language" size={24} color="black" />
                        <Text style={styles.buttonText}>Ngôn ngữ</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <FontAwesome5 name="paint-roller" size={24} color="black" />
                        <Text style={styles.buttonText}>Chọn giao diện</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
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
        backgroundColor: '#fff', // Màu nền của header
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
        width: 20, // Độ rộng của phần trống bên phải chữ
    },
    accountContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor:'#fff'
    },
    accountTitle: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
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
