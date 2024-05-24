import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, FlatList, Alert, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Profile() {
    const [selectedLanguage, setSelectedLanguage] = useState('vietnamese');

    const toggleLanguage = (language) => {
        setSelectedLanguage(language);
    };

    // Danh sách các sản phẩm với ảnh và tên
    const products = [
        { id: 1, name: 'Product 1', subheading: 'Subheading 1', price: 'Giá 10.000.000 VNĐ', image: require('../../assets/images/Donhang1.jpg') },
        { id: 2, name: 'Product 2', subheading: 'Subheading 2', price: 'Giá 10.000.000 VNĐ', image: require('../../assets/images/donhang2.jpg') },
        { id: 3, name: 'Product 3', subheading: 'Subheading 3', price: 'Giá 20.000.000 VNĐ', image: require('../../assets/images/donhang3.jpg') },
        { id: 4, name: 'Product 4', subheading: 'Subheading 4', price: 'Giá 20.000.000 VNĐ', image: require('../../assets/images/Donhang1.jpg') },
        { id: 5, name: 'Product 5', subheading: 'Subheading 5', price: 'Giá 30.000.000 VNĐ', image: require('../../assets/images/donhang2.jpg') },
    ];

    const handleDetailPress = (productName) => {
        Alert.alert('Thông báo', `Xem chi tiết sản phẩm: ${productName}`);
        // Add navigation logic here if needed
    };

    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <TouchableOpacity style={styles.detailContainer} onPress={() => handleDetailPress(item.name)}>
                <Text style={styles.detailText}>Chi tiết sản phẩm</Text>
                <AntDesign name="right" size={16} color="#CFAE78" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    <Text style={styles.headerText}>Set Môi</Text>
                </View>
                <View style={styles.emptyView} />
            </View>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.productList}
            />
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
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
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
        width: 20, // Adjust this width to match the width of the back icon
    },
    productList: {
        padding: 10,
    },
    productContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#FDEFDD',
        borderRadius: 0,
        overflow: 'visible', // Đảm bảo overflow được thiết lập thành 'visible'
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    
    productImage: {
        width: '100%',
        height: width / 2 - 40, // Maintain square aspect ratio
        resizeMode: 'cover',
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FDEFDD',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    detailText: {
        fontSize: 14,
        color: '#000',
    },
});
