import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomerCareService() {
    const openMap = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.iconButton}>
                        <AntDesign name="left" size={20} color="#CFAE78" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Các cơ sở</Text>
                    <View style={styles.emptyView} />
                </View>

                <View style={styles.headerRow}>
                    <Image
                        source={require('../../assets/LogoSaoLy.png')}
                        style={styles.logo}
                    />
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.ticketButton}>
                            <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="black" />
                            <Text style={styles.iconText}>12</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationButton}>
                            <View style={styles.notificationCircle}>
                                <MaterialIcons name="notifications-none" size={24} color="black" />
                                <View style={styles.notificationBadge}>
                                    <Text style={styles.notificationText}>20</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <AntDesign name="search1" size={20} color="#000" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Tìm kiếm"
                            placeholderTextColor="#555"
                        />
                    </View>
                    <TouchableOpacity style={styles.mapButton}>
                        <MaterialIcons name="map" size={24} color="black" />
                        <Text style={styles.mapButtonText}>Bản đồ</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.accountContainer}>
                <Text style={styles.headerText1}>Cơ sở gần đây</Text>

                {/* Cơ sở 1 */}
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <Image source={require('../../assets/LogoSaoLy.png')} style={styles.logoImage} />
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Cơ sở 1</Text>
                            <Text style={styles.addressText}>
                                Địa chỉ: <Text style={styles.blueText} onPress={() => Linking.openURL('https://maps.app.goo.gl/qaqwg79K4kUryFNG8')}>37 Vũ Phạm Hàm, Cầu Giấy, Hà Nội</Text>
                            </Text>
                            <View style={styles.starContainer}>
                                <MaterialIcons name="star" size={20} color="#CFAE78" style={styles.starIcon} />
                                <Text style={styles.starText}>4.5 (500 đánh giá)</Text>
                            </View>
                            <Text style={styles.distanceText}>cách đây bao nhiêu 1.5km</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Cơ sở 2 */}
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <Image source={require('../../assets/LogoSaoLy.png')} style={styles.logoImage} />
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Cơ sở 2</Text>
                            <Text style={styles.addressText}>
                                Địa chỉ: <Text style={styles.blueText} onPress={() => Linking.openURL('https://maps.app.goo.gl/kzp9TxJfjg4Ha9CF6')}>43 Cầu Lớn, Đông Anh, Hà Nội</Text>
                            </Text>
                            <View style={styles.starContainer}>
                                <MaterialIcons name="star" size={20} color="#CFAE78" style={styles.starIcon} />
                                <Text style={styles.starText}>4.5 (500 đánh giá)</Text>
                            </View>
                            <Text style={styles.distanceText}>cách đây bao nhiêu 15.6km</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Cơ sở 3 */}
                <Text style={styles.headerText1}>Cơ sở khác</Text>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton}>
                        <Image source={require('../../assets/LogoSaoLy.png')} style={styles.logoImage} />
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Cơ sở 3</Text>
                            <Text style={styles.addressText}>
                                Địa chỉ: <Text style={styles.blueText} onPress={() => Linking.openURL('https://maps.app.goo.gl/sYV7dbosMwZmJUfi6')}>23 Nguyễn Thị Thập, Tân Hưng, Quận 7, Tp HCM</Text>
                            </Text>
                            <View style={styles.starContainer}>
                                <MaterialIcons name="star" size={20} color="#CFAE78" style={styles.starIcon} />
                                <Text style={styles.starText}>4.5 (500 đánh giá)</Text>
                            </View>
                            <Text style={styles.distanceText}>cách đây bao nhiêu 1892.2km</Text>
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
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
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
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconButton: {
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyView: {
        width: 20,
    },
    logo: {
        marginLeft:-50,
        width: 230,
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
    notificationButton: {
        marginLeft: 10,
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    mapButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 5,
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
    mapButtonText: {
        fontSize: 14,
        marginLeft: 5,
    },
    accountContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    headerText1: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    accountButtons: {
        marginBottom: 10,
        borderRadius: 10,
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
    logoImage: {
        width: 70,
        height: 70,
        borderRadius: 25,
    },
    buttonContent: {
        marginLeft: 20,
    },
    buttonText: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight:'bold'
    },
    addressText: {
        color: '#000000',
        marginTop: 5,
        fontSize: 11,
    },
    blueText: {
        color: '#000000',
        fontSize: 9,
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    starIcon: {
        marginLeft: 5,
    },
    starText: {
        marginLeft: 1,
        fontSize: 10,
    },
    distanceText: {
        marginTop: 7,
        fontSize: 10,
    },
});
