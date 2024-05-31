import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Camera() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.row}>
                    <Image
                        source={require('../../assets/LogoSaoLy.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.dashboardText}>Camera</Text>
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
                    <View style={styles.cameraFrame}>
                        {/* Khung frame để hiện camera */}
                    </View>
                    <View style={styles.cameraHeader}>
                        <View style={styles.cameraHeaderLeft}>
                            <Text style={styles.cameraHeaderText}>#Tầng 2</Text>
                            <Text style={styles.cameraHeaderDate}>30/5/2024</Text>
                        </View>
                        <View style={styles.cameraHeaderRight}>
                            <TouchableOpacity style={styles.iconWrapper}>
                                <Feather name="mic" size={20} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconWrapper}>
                                <Feather name="crosshair" size={20} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconWrapper}>
                                <Feather name="filter" size={20} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconWrapper}>
                                <Feather name="calendar" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={styles.detectionContainer}>
                        <Text style={styles.detectionTime}>14:47:37</Text>
                        <Text style={styles.detectionText}>Phát hiện có người 30/05/2024</Text>
                        <View style={styles.detectionImage}></View>
                    </View>
                    <View style={styles.detectionContainer}>
                        <Text style={styles.detectionTime}>14:47:37</Text>
                        <Text style={styles.detectionText}>Phát hiện có người 30/05/2024</Text>
                        <View style={styles.detectionImage}></View>
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
    cameraFrame: {
        width: '100%',
        height: 300,
        backgroundColor: '#CCCCCC', 
        borderColor: '#000', // Màu đường viền
    },
    cameraHeaderLeft: {
        alignItems: 'center',
        marginRight: 110,
    },
    cameraHeaderRight: {
        flexDirection: 'row',
    },
    cameraHeader: {
        padding: 15,
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: '#EFE7E7',
        marginBottom: 10,
    },
    cameraHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cameraHeaderDate: {
        fontSize: 14,
        color: '#7a7a7a',
        marginTop: 5,
    },
    
    cameraHeaderInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Đặt các icon sang phải
        paddingVertical: 10,
        backgroundColor: '#EFE7E7',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    iconWrapper: {
        backgroundColor: '#E0D4D4',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        marginLeft: 5,
    },
    detectionContainer: {
        backgroundColor: '#EFE7E7',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    detectionTime: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    detectionText: {
        fontSize: 14,
        color: '#000',
        marginBottom: 10,
    },
    detectionImage: {
        backgroundColor: '#5C4F4F',
        height: 100,
        borderRadius: 10,
    },
});

export default Camera;
