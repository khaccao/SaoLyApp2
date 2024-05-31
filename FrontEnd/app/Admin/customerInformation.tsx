import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function CustomerInformation() {

    const showDeleteAlert = () => {
        Alert.alert(
            "Xác nhận",
            "Bạn có chắc chắn muốn xóa?",
            [
                {
                    text: "Hủy",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Xóa", onPress: () => console.log("OK Pressed") }
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.row}>
                    <Image
                        source={require('../../assets/LogoSaoLy.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.dashboardText}>Khách hàng</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.searchContainer}>
                        <Feather name="search" size={20} color="black" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            placeholderTextColor="#666"
                        />
                    </View>
                    <TouchableOpacity style={styles.iconButton}>
                        <View style={styles.notificationCircle}>
                            <Feather name="bell" size={24} color="black" />
                            <View style={styles.notificationBadge}>
                                <Text style={styles.notificationText}>20</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Image
                            source={require('../../assets/avatar.jpeg')}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.accountContainer}>
                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity style={styles.backButton}>
                            <AntDesign name="left" size={20} color="#CFAE78" />
                            <Text style={styles.backButtonText}>Quay lại</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.rectangle}>
                        <View style={styles.profileContainer}>
                            <View style={styles.leftColumn}>
                                <Image
                                    source={require('../../assets/avatar.jpeg')}
                                    style={styles.profileImage}
                                />
                                <TouchableOpacity style={styles.editImageButton}>
                                    <Text style={styles.editImageButtonText}>Sửa ảnh</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.rightColumn}>
                                <Text style={styles.label}>Tên khách hàng: Ngô Anh Tuấn</Text>
                                <Text style={styles.label}>SĐT: 09868888888</Text>
                                <Text style={styles.label}>Email: tuanngoanh86@gmail.com</Text>
                                <Text style={styles.label}>Địa chỉ: Hà Nội</Text>
                                <Text style={styles.label}>Hạng: Bạc</Text>
                            </View>
                        </View>
                        <View style={styles.actionsContainer}>
                            <TouchableOpacity style={styles.actionButton}>
                                <AntDesign name="edit" size={24} color="#000000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton} onPress={showDeleteAlert}>
                                {/* Add onPress event to call showDeleteAlert */}
                                <AntDesign name="delete" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.historyText}>Lịch sử</Text>
                        <View style={styles.historyItem}>
                            <View style={styles.historyLeftColumn}>
                                <Text style={styles.historyLabel}>Ngày: 30/4/2024</Text>
                                <Text style={styles.historyLabel}>Dịch vụ: Laser</Text>
                                <Text style={styles.historyLabel}>Loại Dịch vụ: Lông Mày, Mi</Text>
                                <Text style={styles.historyLabel}>Master: Grand Master</Text>
                            </View>
                            <View style={styles.historyRightColumn}>
                                <Text style={styles.historyCost}>Chi phí: 21.000.000 đ</Text>
                            </View>
                        </View>

                        <View style={styles.historyItem}>
                            <View style={styles.historyLeftColumn}>
                                <Text style={styles.historyLabel}>Ngày: 30/4/2024</Text>
                                <Text style={styles.historyLabel}>Dịch vụ: Laser</Text>
                                <Text style={styles.historyLabel}>Loại Dịch vụ: Lông Mày, Mi</Text>
                                <Text style={styles.historyLabel}>Master: Grand Master</Text>
                            </View>
                            <View style={styles.historyRightColumn}>
                                <Text style={styles.historyCost}>Chi phí: 21.000.000 đ</Text>
                            </View>
                        </View>

                        <View style={styles.historyItem}>
                            <View style={styles.historyLeftColumn}>
                                <Text style={styles.historyLabel}>Ngày: 30/4/2024</Text>
                                <Text style={styles.historyLabel}>Dịch vụ: Laser</Text>
                                <Text style={styles.historyLabel}>Loại Dịch vụ: Lông Mày, Mi</Text>
                                <Text style={styles.historyLabel}>Master: Grand Master</Text>
                            </View>
                            <View style={styles.historyRightColumn}>
                                <Text style={styles.historyCost}>Chi phí: 21.000.000 đ</Text>
                            </View>
                        </View>

                        <View style={styles.historyItem}>
                            <View style={styles.historyLeftColumn}>
                                <Text style={styles.historyLabel}>Ngày: 30/4/2024</Text>
                                <Text style={styles.historyLabel}>Dịch vụ: Laser</Text>
                                <Text style={styles.historyLabel}>Loại Dịch vụ: Lông Mày, Mi</Text>
                                <Text style={styles.historyLabel}>Master: Grand Master</Text>
                            </View>
                            <View style={styles.historyRightColumn}>
                                <Text style={styles.historyCost}>Chi phí: 21.000.000 đ</Text>
                            </View>
                        </View>

                        

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
        backgroundColor: '#FDEFDD',
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        paddingHorizontal: 15,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 230,
        height: 50,
        marginLeft: -50,
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
    dashboardText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        paddingHorizontal: 30,
        height: 35,
        width: 250,
        marginLeft: 20,
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
    searchIcon: {
        marginRight: 5,
    },
    searchInput: {
        flex: 1,
        height: '100%',
    },
    iconButton: {
        marginLeft: 10,
        alignItems: 'center',
    },
    notificationCircle: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#EEEEEE',
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
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 20,
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
    content: {
        flex: 1,
    },
    accountContainer: {
        padding: 15,
    },
    backButtonContainer: {
        marginBottom: 10,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#000000',
    },
    rectangle: {
        backgroundColor: '#ABB3C3',
        borderRadius: 10,
        padding: 15,
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
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftColumn: {
        alignItems: 'center',
    },
    rightColumn: {
        flex: 1,
        marginLeft: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 5,
        marginTop: 5,
    },
    editImageButton: {
        backgroundColor: '#ABB3C3',
        paddingVertical: 1,
        paddingHorizontal: 0,
        borderRadius: 5,
    },
    editImageButtonText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    actionButton: {
        marginLeft: 10,
    },
    historyContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
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
    historyText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
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
    historyItem: {
        backgroundColor: '#737373',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    historyLeftColumn: {
        flex: 1,
    },
    historyRightColumn: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    historyLabel: {
        fontSize: 13,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    historyCost: {
        fontSize: 13,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default CustomerInformation;
