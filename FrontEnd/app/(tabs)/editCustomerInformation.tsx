import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function EditCustomerInformation() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

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
                    
                    <View style={styles.profileContainer}>
                        {/* Avatar Image */}
                        <Image
                            source={require('../../assets/avatar.jpeg')}
                            style={styles.profileImage}
                        />
                        {/* Edit Image Button */}
                        <TouchableOpacity style={styles.editImageButton}>
                            <Text style={styles.editImageButtonText}>Sửa ảnh</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Text Input Fields */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Tên khách hàng</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>SĐT</Text>
                        <TextInput
                            style={styles.input}
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Địa chỉ</Text>
                        <TextInput
                            style={styles.input}
                            value={address}
                            onChangeText={setAddress}
                        />
                    </View>

                    {/* Save Button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveButtonText}>Lưu</Text>
                        </TouchableOpacity>
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
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editImageButton: {
        marginTop: 10,
    },
    editImageButtonText: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderRadius: 10,
        padding: 10,
        height:50,
        fontSize: 16,
        backgroundColor: '#D9D9D9',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    saveButton: {
        marginTop: 30,
        backgroundColor: '#CFAE78',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: 100,
    },
    saveButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditCustomerInformation;
