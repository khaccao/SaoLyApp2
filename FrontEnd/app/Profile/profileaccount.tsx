import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={require('../../assets/LogoSaoLy.png')}
                    style={styles.logo}
                />
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.ticketButton}>
                        <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="black" />
                        <Text style={styles.iconText}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <View style={styles.notificationCircle}>
                            <MaterialIcons name="notifications-none" size={24} color="black" />
                            <View style={styles.notificationBadge}>
                                <Text style={styles.notificationText}>20</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Background behind userInfoContainer */}
            <View style={styles.backgroundContainer}>
                {/* User Information */}
                <View style={styles.userInfoContainer}>
                    <View style={styles.userInfo}>
                        <View style={styles.userDetails}>
                            <Text style={styles.userName}>Tuan Ngo Anh</Text>
                            <Text style={styles.userLevel}>Bạc</Text>
                        </View>
                        <TouchableOpacity style={styles.exchangeButton}>
                            <Text style={styles.exchangeText}>Đổi 999 đ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.barcode}>
                        <Text style={styles.barcodeText}>0123456789</Text>
                    </View>
                </View>
            </View>
            <View style={styles.accountContainer}>
                <Text style={styles.accountTitle}>Tài khoản</Text>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <FontAwesome name="user-o" size={24} color="black" />
                        <Text style={styles.buttonText}>Thông tin tài khoản</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialIcons name="library-books" size={24} color="black" />
                        <Text style={styles.buttonText}>Khoá học của tôi</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.accountTitle}>Túi đồ</Text>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="black" />
                        <Text style={styles.buttonText}>Voucher</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <Feather name="box" size={24} color="black" />
                        <Text style={styles.buttonText}>Đơn hàng</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <Feather name="heart" size={24} color="black" />
                        <Text style={styles.buttonText}>Danh sách yêu thích</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialCommunityIcons name="script-text-outline" size={24} color="black" />
                        <Text style={styles.buttonText}>Hoá đơn của tôi</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.accountTitle}>Săn thưởng</Text>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialCommunityIcons name="ticket-percent-outline" size={24} color="black" />
                        <Text style={styles.buttonText}>Mã ưu đãi</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <AntDesign name="addusergroup" size={24} color="black" />
                        <Text style={styles.buttonText}>Giới thiệu bạn bè</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.accountTitle}>Khác</Text>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <MaterialIcons name="contact-support" size={24} color="black" />
                        <Text style={styles.buttonText}>Hỗ trợ</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountButton}>
                        <Feather name="settings" size={24} color="black" />
                        <Text style={styles.buttonText}>Tuỳ chỉnh hệ thống</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDEFDD',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        paddingHorizontal: 15,
        backgroundColor: '#FDEFDD',
    },
    logo: {
        width: 230,
        height: 50,
        marginLeft: -50,  // Dịch logo sang trái
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ticketButton: {
        marginLeft: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 40,
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    iconButton: {
        marginLeft: 10, // Giảm khoảng cách giữa biểu tượng thông báo và vé
        alignItems: 'center',
    },
    iconText: {
        fontSize: 12,
        color: 'black',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    notificationCircle: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    notificationBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    backgroundContainer: {
        width:'100%',
        height: 215,
        backgroundColor: '#FDEFDD',
        paddingHorizontal: 20,
    },
    userInfoContainer: {
        backgroundColor: '#A1ADCA',
        padding: 20,
        borderRadius: 15,
        marginVertical: 20,
        alignItems: 'center',
        height: 180,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    userDetails: {
        flexDirection: 'column',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    userLevel: {
        fontSize: 14,
        color: '#fff',
        marginVertical: 5,
    },
    exchangeButton: {
        backgroundColor: '#E9DCCB',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingVertical: 9,
        paddingHorizontal: 31,
        marginLeft: 98,
    },
    exchangeText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    },
    barcode: {
        marginTop: 20,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    barcodeText: {
        fontSize: 20,
        letterSpacing: 5,
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