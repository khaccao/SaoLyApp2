import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ScheduleSuccess() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Đặt lịch thành công</Text>
                <View style={styles.emptyView} />
            </View>
            <ScrollView style={styles.accountContainer}>
                <View style={styles.rectangle}>
                    <Image 
                        source={{ uri: 'https://via.placeholder.com/150' }} 
                        style={styles.image} 
                    />
                    <View style={styles.infoContainer}>
                        <View style={styles.addressRow}>
                            <Text style={styles.addressText}>
                                37 Vũ Phạm Hàm, Yên Hoà, Cầu Giấy, Hà Nội
                            </Text>
                            <TouchableOpacity style={styles.copyIcon}>
                                <MaterialCommunityIcons name="content-copy" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.infoText}>
                            <Text style={styles.boldText}>Hẹn Gặp:</Text> Anh Hoàng Minh Tú (0983846637)
                        </Text>
                        <Text style={styles.infoText}>
                            <Text style={styles.boldText}>Vào lúc:</Text> 15h30, Hôm nay, Thứ Hai, 27.05.2024
                        </Text>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.innerButton}>
                                <MaterialCommunityIcons name="directions" size={24} color="#000" />
                                <Text style={styles.buttonText}>Chỉ đường</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.innerButton}>
                                <MaterialCommunityIcons name="phone" size={24} color="#000" />
                                <Text style={styles.buttonText}>Gọi Hotline</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.detailsRectangle}>
                    <Text style={styles.detailsHeaderText}>Chi tiết đặt lịch</Text>
                    <Text style={styles.detailsText}>
                        <Text style={styles.boldText}>Dịch vụ:</Text>
                    </Text>
                    <Text style={styles.detailsText}>Thiết kế chân mày</Text>
                    <Text style={styles.detailsText}>Khử thâm môi</Text>
                    <Text style={styles.detailsText}>Phun xăm môi</Text>
                    <View style={styles.line} />
                    <Text style={styles.detailsText}>
                        <Text style={styles.boldText}>Master thực hiện:</Text> Grand Master
                    </Text>
                    <View style={styles.line} />
                    <Text style={styles.detailsText}>
                        <Text style={styles.boldText}>Ghi chú:</Text> Khách hàng VIP
                    </Text>
                    <View style={styles.line} />
                    <Text style={styles.detailsText}>
                        <Text style={styles.boldText}>Tổng tiển:</Text> Tổng tiền Anh cần thanh toán sau khi áp dụng ưu đãi: 0K
                    </Text>
                </View>

                <View style={styles.guidelinesContainer}>
                    <Text style={styles.guidelinesHeaderText}>Hướng Dẫn Đổi/Hủy Lịch Hẹn Đã Đặt</Text>
                    <Text style={styles.guidelinesText}>
                        Nếu anh đến muộn quá 1 tiếng chúng em sẽ đổi lịch hẹn sang khung giờ sau để anh có thể trải nghiệm dịch vụ một cách thoải mái với Master mà anh đã đặt.
                    </Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.outerButton}>
                            <MaterialCommunityIcons name="swap-horizontal" size={24} color="#000" />
                            <Text style={styles.buttonText}>Đổi Lịch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.outerButton}>
                            <MaterialCommunityIcons name="cancel" size={24} color="#000" />
                            <Text style={styles.buttonText}>Hủy Lịch</Text>
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
        width: 20,
    },
    accountContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    rectangle: {
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    infoContainer: {
        flexDirection: 'column',
    },
    addressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    addressText: {
        paddingTop: 5,
        fontSize: 14,
        flex: 1,
    },
    copyIcon: {
        marginLeft: 10,
    },
    line: {
        height: 1,
        backgroundColor: '#000000',
        marginVertical: 5,
    },
    infoText: {
        paddingTop: 5,
        fontSize: 14,
        marginBottom: 5,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    innerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 14,
    },
    detailsRectangle: {
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    detailsHeaderText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    detailsText: {
        paddingTop: 5,
        fontSize: 14,
        marginBottom: 5,
    },
    guidelinesContainer: {
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        marginTop: 20,
        marginBottom: 20,
    },
    guidelinesHeaderText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    guidelinesText: {
        fontSize: 12,
        marginBottom: 5,
    },
    outerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
    },
});

export default ScheduleSuccess;
