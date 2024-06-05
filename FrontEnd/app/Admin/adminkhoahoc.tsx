import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Platform, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const AdminKhoahoc = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.row}>
                    <Image
                        source={require('../../assets/images/LogoSaoly.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.dashboardText}>Khoá học</Text>
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
                            source={require('../../assets/images/avt.png')}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* User Info */}
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {[...Array(5)].map((_, index) => (
                    <View style={styles.userInfoContainer} key={index}>
                        <View style={styles.userInfoLeft}>
                            <Image
                                source={require('../../assets/images/avt.png')}
                                style={styles.userInfoAvatar}
                            />
                            <TouchableOpacity onPress={() => alert('Edit Profile')}>
                                <Text style={styles.editProfileText}>Sửa ảnh</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.userInfoRight}>
                            <Text style={styles.userInfoName}>StarBrown(offline)</Text>
                            <Text style={styles.userInfoPhone}>22/05 -27/05 : 5 buổi</Text>
                            <Text style={styles.userInfoEmail}>Grand Master: Saoly</Text>
                            <Text style={styles.userInfoEmail}>Đã có: 5/10 người đăng kí</Text>
                            <Text style={styles.userInfoRank}>100.000.000 đ</Text>
                        </View>
                        <View style={styles.userInfoIcons}>
                            <TouchableOpacity style={styles.userInfoIcon}>
                                <Feather name="info" size={20} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.userInfoIcon}>
                                <Feather name="edit" size={20} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.userInfoIcon}>
                                <Feather name="trash-2" size={20} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

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
    scrollViewContent: {
        paddingBottom: 20,
    },
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FDEFDD',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginTop: 20,
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
    userInfoLeft: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 10,
        flex: 1,
    },
    userInfoAvatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
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
    editProfileText: {
        color: 'black',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    userInfoRight: {
        flex: 3,
        justifyContent: 'center',
    },
    userInfoName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userInfoPhone: {
        marginBottom: 5,
    },
    userInfoEmail: {
        marginBottom: 5,
    },
    userInfoRank: {
        marginBottom: 5,
    },
    userInfoIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    userInfoIcon: {
        marginLeft: 10,
    },
});

export default AdminKhoahoc;
