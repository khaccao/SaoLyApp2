import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Profile() {
    const [selectedLanguage, setSelectedLanguage] = useState('vietnamese');

    const toggleLanguage = (language) => {
        setSelectedLanguage(language);
    };

    // Danh sách các sản phẩm với ảnh và tên
    const products = [
        { id: 1, name: 'Giá 10.000.000 VNĐ', image: require('../../assets/images/dichvu1.jpg'), teacherId: 1 },
        { id: 2, name: 'Giá 10.000.000 VNĐ', image: require('../../assets/images/dichvu2.jpg'), teacherId: 2 },
        { id: 3, name: 'Giá 20.000.000 VNĐ', image: require('../../assets/images/dichvu3.jpg'), teacherId: 1 },
        { id: 4, name: 'Giá 20.000.000 VNĐ', image: require('../../assets/images/dichvu1.jpg'), teacherId: 2 },
    ];

    // Danh sách giáo viên
    const teachers = [
        { id: 1, name: 'GRAND MASTER NGUYEN SAO LY ' },
        { id: 2, name: 'GRAND MASTER NGUYEN DUY HUNG ' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    <Text style={styles.headerText}>Phun Xăm Môi, Mày, Mí</Text>
                </View>
                <View style={styles.emptyView} />
            </View>

            {/* Phần ScrollView */}
            <ScrollView style={styles.scrollView}>
                {/* Phần nội dung của ScrollView */}
                {/* Phần 1 */}
                <View style={styles.section}>
                    <View style={styles.titleWrapper}>
                        <View style={styles.rectangle} />
                        <Text style={styles.headerText}>Phun Môi</Text>
                    </View>
                    <Text style={styles.description}>
                    Laser mày thường được sử dụng để loại bỏ lông mày không mong muốn hoặc để điều chỉnh hình dáng chân mày, Laser mí thường được sử dụng để tạo ra đường mí mắt sắc nét và đậm hơn, tạo điểm nhấn cho đôi mắt                    </Text>
                    <View style={styles.gridContainer}>
                        {products.map(product => (
                            <View key={product.id} style={styles.gridItemContainer}>
                                <TouchableOpacity style={styles.gridItem} onPress={() => alert(`Learn More about ${product.name}`)}>
                                    <Image source={product.image} style={styles.productImage} />
                                    <Text style={styles.productName}>{product.name}</Text>
                                    <Text style={styles.teacherName}>{teachers.find(teacher => teacher.id === product.teacherId).name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.divider} />
                {/* Phần 2 */}
                <View style={styles.section}>
                    <View style={styles.titleWrapper}>
                        <View style={styles.rectangle} />
                        <Text style={styles.headerText}>Phun Mày</Text>
                    </View>
                    <Text style={styles.description}>
                    Đôi khi, chỉ cần điều chỉnh hình dáng và đường viền của chân mày có thể làm cho chúng trở nên đẹp mắt hơn.                    </Text>
                    <View style={styles.gridContainer}>
                        {products.map(product => (
                            <View key={product.id} style={styles.gridItemContainer}>
                                <TouchableOpacity style={styles.gridItem} onPress={() => alert(`Learn More about ${product.name}`)}>
                                    <Image source={product.image} style={styles.productImage} />
                                    <Text style={styles.productName}>{product.name}</Text>
                                    <Text style={styles.teacherName}>{teachers.find(teacher => teacher.id === product.teacherId).name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={{ height: 50 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    divider: {
        height: 1,
        backgroundColor: '#CCCCCC',
        marginVertical: 10,
        marginRight: 25,
        marginLeft: 25,
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
    gridItemContainer: {
        width: '46%', // Để hiển thị 2 ô vuông trên mỗi dòng, bạn có thể điều chỉnh độ rộng ở đây
        marginBottom: 20,
        backgroundColor: '#E9D988',
    },
    gridItem: {
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        height: 150,
        borderRadius: 0,
    },
    productName: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    teacherName: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
});

