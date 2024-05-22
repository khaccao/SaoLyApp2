import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <View style={styles.container}>
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

            {/* User Information */}
            <View style={styles.userInfo}>
                <Text style={styles.userName}>Tuan Ngo Anh</Text>
                <Text style={styles.userLevel}>Bạc</Text>
                <TouchableOpacity style={styles.exchangeButton}>
                    <Text style={styles.exchangeText}>Đổi 999 đ</Text>
                </TouchableOpacity>
                <View style={styles.barcode}>
                    <Text style={styles.barcodeText}>0123456789</Text>
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
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        paddingHorizontal: 15,
        backgroundColor: '#F9F9F9',
    },
    logo: {
        width: 200,
        height: 50,
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
        marginLeft: 20,
        alignItems: 'center',
    },
    iconText: {
        fontSize: 12,
        color: 'black',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    notificationCircle: {
        width: 40,
        height: 40,
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
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    userInfo: {
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    userLevel: {
        fontSize: 16,
        color: '#888',
        marginVertical: 10,
    },
    exchangeButton: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    exchangeText: {
        fontSize: 16,
        color: 'black',
    },
    barcode: {
        marginTop: 20,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    barcodeText: {
        fontSize: 20,
        letterSpacing: 5,
    },
});
