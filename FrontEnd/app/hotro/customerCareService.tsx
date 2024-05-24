import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function CustomerCareService() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Hỗ trợ</Text>
                <View style={styles.emptyView} />
            </View>
            <View style={styles.accountContainer}>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <Entypo name="chat" size={24} color="black" />
                        <Text style={styles.buttonText}>Hỗ trợ qua chat</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <Ionicons name="call" size={24} color="black" />
                        <Text style={styles.buttonText}>Hỗ trợ qua điện thoại</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <Entypo name="email" size={24} color="black" />
                        <Text style={styles.buttonText}>Hỗ trợ qua email</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialCommunityIcons name="web" size={24} color="black" />
                        <Text style={styles.buttonText}>Website</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <FontAwesome5 name="user-shield" size={20} color="black" />
                        <Text style={styles.buttonText}>Điều khoản sử dụng</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialIcons name="privacy-tip" size={24} color="black" />
                        <Text style={styles.buttonText}>Chính sách bảo mật</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialCommunityIcons name="home-city" size={24} color="black" />
                        <Text style={styles.buttonText}>Về chúng tôi</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <Octicons name="location" size={24} color="black" />
                        <Text style={styles.buttonText}>Về cơ sở</Text>
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
