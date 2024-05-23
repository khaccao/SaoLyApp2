import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Thêm import này

export default function Profile() {
    const [selectedLanguage, setSelectedLanguage] = useState('vietnamese');

    const toggleLanguage = (language) => {
        setSelectedLanguage(language);
    };

    // Danh sách các sản phẩm với ảnh và tên
    const products = [
        { id: 1, name: 'Giá 10.000.000 VNĐ', image: require('../../assets/images/dichvu1.jpg') },
        { id: 2, name: 'Giá 10.000.000 VNĐ', image: require('../../assets/images/dichvu1.jpg') },
        { id: 3, name: 'Giá 20.000.000 VNĐ', image: require('../../assets/images/dichvu1.jpg') },
        { id: 4, name: 'Giá 20.000.000 VNĐ', image: require('../../assets/images/dichvu1.jpg') },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    
                    <Text style={styles.headerText}>Thiết Kế Chân Mày, Môi Phong Thủy</Text>
                </View>
                <View style={styles.emptyView} />
            </View>

            {/* Phần 1 */}
            <View style={styles.section}>
            <View style={styles.titleWrapper}>
                <View style={styles.rectangle} />
                <Text style={styles.headerText}>Thiết Kế Chân Mày</Text>
            </View>
                <Text style={styles.description}>
                    Thiết kế chân mày phong thủy là một phương pháp điều chỉnh hình dáng và kiểu dáng chân mày sao cho phù hợp với các nguyên tắc phong thủy, nhằm mang lại sự cân bằng, hài hòa và may mắn cho người sở hữu.
                </Text>
                <View style={styles.gridContainer}>
                    {products.map(product => (
                        <TouchableOpacity key={product.id} style={styles.gridItem} onPress={() => alert(`Learn More about ${product.name}`)}>
                            <Image source={product.image} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Phần 2 */}
            <View style={styles.section}>
            <View style={styles.titleWrapper}>
                <View style={styles.rectangle} />
                <Text style={styles.headerText}>Môi Phong Thủy</Text>
            </View>
                <Text style={styles.description}>
                    Môi Phong là một phương pháp bla bla bla.
                </Text>
                <View style={styles.gridContainer}>
                    {products.map(product => (
                        <TouchableOpacity key={product.id} style={styles.gridItem} onPress={() => alert(`Learn More about ${product.name}`)}>
                            <Image source={product.image} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
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
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rectangle: {
        width: 5,
        height: 20,
        backgroundColor: '#B19E5B',
        marginRight: 7,
    },
    emptyView: {
        width: 20,
    },
    section: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 12,
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '48%', // Để hiển thị 2 ô vuông trên mỗi dòng, bạn có thể điều chỉnh độ rộng ở đây
        marginBottom: 15,
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    productName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});