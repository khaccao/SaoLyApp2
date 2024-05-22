import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Profile() {
    const [selectedOptions, setSelectedOptions] = useState({
        contactInfo: false,
        accessLocation: false,
        accessContacts: false,
        accessCamera: false,
    });

    const toggleOption = (option) => {
        setSelectedOptions({
            ...selectedOptions,
            [option]: !selectedOptions[option],
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Quyền Riêng Tư</Text>
                <View style={styles.emptyView} />
            </View>
            <ScrollView style={styles.accountContainer}>
                <View style={styles.accountButtons}>
                    <TouchableOpacity style={styles.accountButton} onPress={() => toggleOption('contactInfo')}>
                        <MaterialCommunityIcons name="account-off-outline" size={24} color="black" />
                        <Text style={styles.buttonText}>Ẩn thông tin liên lạc</Text>
                        <View style={styles.radioContainer}>
                            <MaterialCommunityIcons name={selectedOptions.contactInfo ? 'radiobox-marked' : 'radiobox-blank'} size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>
                        Kích hoạt tính năng tuỳ chọn nếu bạn không muốn được tìm thấy bởi người khác.
                    </Text>
                    <TouchableOpacity style={styles.accountButton} onPress={() => toggleOption('accessLocation')}>
                        <Feather name="map-pin" size={24} color="black" />
                        <Text style={styles.buttonText}>Cho phép SaoLy truy cập vị trí</Text>
                        <View style={styles.radioContainer}>
                            <MaterialCommunityIcons name={selectedOptions.accessLocation ? 'radiobox-marked' : 'radiobox-blank'} size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>
                        Cho phép truy cập giúp xác định Vị Trí tìm những thứ gần bạn.
                    </Text>
                    <TouchableOpacity style={styles.accountButton} onPress={() => toggleOption('accessContacts')}>
                        <Feather name="book" size={24} color="black" />
                        <Text style={styles.buttonText}>Cho phép SaoLy truy cập danh bạ</Text>
                        <View style={styles.radioContainer}>
                            <MaterialCommunityIcons name={selectedOptions.accessContacts ? 'radiobox-marked' : 'radiobox-blank'} size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>
                        Cho phép truy cập để đánh giá sản phẩm.
                    </Text>
                    <TouchableOpacity style={styles.accountButton} onPress={() => toggleOption('accessCamera')}>
                        <Feather name="camera" size={24} color="black" />
                        <Text style={styles.buttonText}>Cho phép SaoLy truy cập máy ảnh</Text>
                        <View style={styles.radioContainer}>
                            <MaterialCommunityIcons name={selectedOptions.accessCamera ? 'radiobox-marked' : 'radiobox-blank'} size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.subText}>
                        Cho phép truy cập để sử dụng Máy Ảnh trên thiết bị.
                    </Text>
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
        marginLeft: 30, // Căn chỉnh theo icon và button text
        marginBottom: 10,
        marginTop:5, 
        fontSize: 12,
        color: '#6F6F6F', // Màu chữ phụ
    },
});
