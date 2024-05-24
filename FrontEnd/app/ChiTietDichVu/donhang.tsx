import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Profile() {
    const [selectedLanguage, setSelectedLanguage] = useState('vietnamese');
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleLanguage = (language) => {
        setSelectedLanguage(language);
    };

    // Danh sách các sản phẩm với ảnh và tên
    const products = [
        { id: 1, name: 'Product 1', subheading: 'Subheading 1', price: 'Giá 10.000.000 VNĐ', image: require('../../assets/images/Donhang1.jpg'), description: 'Body text for describing why this product is simply a must-buy.' },
        { id: 2, name: 'Product 2', subheading: 'Subheading 2', price: 'Giá 10.000.000 VNĐ', image: require('../../assets/images/donhang2.jpg'), description: 'Body text for describing why this product is simply a must-buy.' },
        { id: 3, name: 'Product 3', subheading: 'Subheading 3', price: 'Giá 20.000.000 VNĐ', image: require('../../assets/images/donhang3.jpg'), description: 'Body text for describing why this product is simply a must-buy.' },
        { id: 4, name: 'Product 4', subheading: 'Subheading 4', price: 'Giá 20.000.000 VNĐ', image: require('../../assets/images/Donhang1.jpg'), description: 'Body text for describing why this product is simply a must-buy.' },
        { id: 5, name: 'Product 5', subheading: 'Subheading 5', price: 'Giá 30.000.000 VNĐ', image: require('../../assets/images/donhang2.jpg'), description: 'Body text for describing why this product is simply a must-buy.' },
    ];

    const onScrollEnd = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / width);
        setCurrentIndex(index);
    };

    const renderDots = () => {
        return (
            <View style={styles.dotContainer}>
                {products.map((_, index) => (
                    <Text
                        key={index}
                        style={[
                            styles.dot,
                            { opacity: currentIndex === index ? 1 : 0.3 },
                        ]}
                    >
                        &bull;
                    </Text>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    <Text style={styles.headerText}>Đơn Hàng</Text>
                </View>
                <View style={styles.emptyView} />
            </View>
            
            <ScrollView>
                <ScrollView 
                    horizontal 
                    pagingEnabled 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.imageSlider}
                    onMomentumScrollEnd={onScrollEnd}
                >
                    {products.map((product) => (
                        <View key={product.id} style={styles.imageContainer}>
                            <Image source={product.image} style={styles.sliderImage} />
                        </View>
                    ))}
                </ScrollView>
                {renderDots()}
                <View style={styles.descriptionWrapper}>
                    <View style={styles.productContainer}>
                        <Text style={styles.productName}>{products[currentIndex].name}</Text>
                        <Text style={styles.subheading}>{products[currentIndex].subheading}</Text>
                        <Text style={styles.price}>{products[currentIndex].price}</Text>
                        <Text style={styles.description}>{products[currentIndex].description}</Text>
                        <TouchableOpacity style={styles.moreButton}>
                            <Text style={styles.moreButtonText}>Xem Thêm</Text>
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
    imageSlider: {
        height: 350,
        marginTop: 35,
    },
    imageContainer: {
        width: width - 40, // Adjust the width to account for the margin
        marginHorizontal: 20, // Add margin to left and right
    },
    sliderImage: {
        width: '100%', // Ensure the image takes the full width of the container
        height: 350,
        resizeMode: 'cover',
        borderRadius: 10, // Optional: Add border radius for better look
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        fontSize: 20,
        color: '#CFAE78',
        marginHorizontal: 2,
    },
    descriptionWrapper: {
        padding: 15,
    },
    productContainer: {
        marginBottom: 20,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 14,
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        marginVertical: 5,
    },
    description: {
        fontSize: 12,
        color: '#888',
        marginBottom: 10,
    },
    moreButton: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    moreButtonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});

