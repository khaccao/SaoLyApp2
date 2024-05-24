import React from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, Foundation } from '@expo/vector-icons';


export default function PromoCode() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Mã ưu đãi</Text>
                <View style={styles.emptyView} />
            </View>
            <ScrollView>
            <View style={styles.accountContainer}>
                <Image source={require('../../assets/mauudai.jpeg')} style={styles.image} />
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.roundButton}>
                        <View style={styles.roundButtonOverlay} />
                        <Foundation name="pricetag-multiple" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Ưu đãi</Text>
                    <Text style={styles.buttonText}>Khoá học</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.roundButton}>
                        <View style={styles.roundButtonOverlay} />
                        <FontAwesome5 name="pen-alt" size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Ưu đãi</Text>
                    <Text style={styles.buttonText}>Thiết bị</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.roundButton}>
                        <View style={styles.roundButtonOverlay} />
                        <FontAwesome5 name="prescription-bottle" size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Ưu đãi</Text>
                    <Text style={styles.buttonText}>Mực xăm</Text>
                </View>
            </View>
            <View style={styles.promoContainer}>
                <View style={styles.promoBackground}>
                    <View style={styles.promoTextContainer}>
                        <Text style={styles.promoText}>Đại hội ưu đãi</Text>
                    </View>
                </View>
            </View>
            <View style={styles.discountContainer}>
                <View style={styles.discountCodeContainer}>
                    <Text style={styles.discountCodeText}>30%</Text>
                    <Text style={styles.paymentText}>Tất cả hình thức thanh toán</Text>
                </View>
                <View style={styles.validityContainer}>
                    <Text style={styles.validityText}>Hiệu lực từ ngày 15.05</Text>
                    <TouchableOpacity style={styles.conditionLink}>
                        <Text style={styles.conditionLinkText}>Điều kiện</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Lưu</Text>
                </TouchableOpacity>
            </View> 

            <View style={styles.discountContainer}>
                <View style={styles.discountCodeContainer}>
                    <Text style={styles.discountCodeText}>30%</Text>
                    <Text style={styles.paymentText}>Tất cả hình thức thanh toán</Text>
                </View>
                <View style={styles.validityContainer}>
                    <Text style={styles.validityText}>Hiệu lực từ ngày 15.05</Text>
                    <TouchableOpacity style={styles.conditionLink}>
                        <Text style={styles.conditionLinkText}>Điều kiện</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Lưu</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.discountContainer}>
                <View style={styles.discountCodeContainer}>
                    <Text style={styles.discountCodeText}>30%</Text>
                    <Text style={styles.paymentText}>Tất cả hình thức thanh toán</Text>
                </View>
                <View style={styles.validityContainer}>
                    <Text style={styles.validityText}>Hiệu lực từ ngày 15.05</Text>
                    <TouchableOpacity style={styles.conditionLink}>
                        <Text style={styles.conditionLinkText}>Điều kiện</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Lưu</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.discountContainer}>
                <View style={styles.discountCodeContainer}>
                    <Text style={styles.discountCodeText}>30%</Text>
                    <Text style={styles.paymentText}>Tất cả hình thức thanh toán</Text>
                </View>
                <View style={styles.validityContainer}>
                    <Text style={styles.validityText}>Hiệu lực từ ngày 15.05</Text>
                    <TouchableOpacity style={styles.conditionLink}>
                        <Text style={styles.conditionLinkText}>Điều kiện</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Lưu</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.discountContainer}>
                <View style={styles.discountCodeContainer}>
                    <Text style={styles.discountCodeText}>30%</Text>
                    <Text style={styles.paymentText}>Tất cả hình thức thanh toán</Text>
                </View>
                <View style={styles.validityContainer}>
                    <Text style={styles.validityText}>Hiệu lực từ ngày 15.05</Text>
                    <TouchableOpacity style={styles.conditionLink}>
                        <Text style={styles.conditionLinkText}>Điều kiện</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Lưu</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.discountContainer}>
                <View style={styles.discountCodeContainer}>
                    <Text style={styles.discountCodeText}>30%</Text>
                    <Text style={styles.paymentText}>Tất cả hình thức thanh toán</Text>
                </View>
                <View style={styles.validityContainer}>
                    <Text style={styles.validityText}>Hiệu lực từ ngày 15.05</Text>
                    <TouchableOpacity style={styles.conditionLink}>
                        <Text style={styles.conditionLinkText}>Điều kiện</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Lưu</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 180,
        borderRadius: 5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 50,
    },
    buttonWrapper: {
        alignItems: 'center',
    },
    roundButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#FDEFDD',
        borderRadius: 40,
        position: 'relative',
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
    roundButtonOverlay: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#D5D5D5',
        zIndex: -1,
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
    buttonText: {
        color: 'black',
        fontSize: 11,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    promoContainer: {
        marginTop: 20,
        paddingHorizontal: 0,
        position: 'relative',
        alignItems: 'flex-start',
    },
    promoBackground: {
        width: 211, // larger width for the background layer
        height: 42, // larger height for the background layer
        borderTopRightRadius: 2000,
        borderBottomRightRadius: 20,
        backgroundColor: '#FDEFDD',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 2, // slight padding for better positioning
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
    promoTextContainer: {
        width: 205,
        height: 35,
        borderTopRightRadius: 2000,
        borderBottomRightRadius: 20,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        paddingLeft: 4, // add padding for better text alignment
    },
    promoText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center', // center the text horizontally
    },

    discountCodeText: {
        marginTop: 17,
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
    },


    paymentText: {
        marginLeft: 18,
        marginTop: 11,
        fontSize: 8,
        color: '#fff',
    },

    validityText: {
        fontSize: 12,
        color: '#333333',
    },
    conditionLink: {
        marginTop: 5,
    },
    conditionLinkText: {
        fontSize: 12,
        color: 'blue',
    },
    saveButtonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    discountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        marginTop: 20,
        backgroundColor:'#fff',
        borderWidth: 0.4,
        borderColor: '#2B2525',
        width: '90%', // Đặt chiều rộng của discountContainer là 80% của màn hình
        alignSelf: 'center', // Đặt align self là center để căn giữa theo chiều ngang
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    
    discountCodeContainer: {
        backgroundColor: '#1E5E5A',
        height: 80,
        width: '40%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    
    validityContainer: {
        alignItems: 'flex-start', // Đặt alignItems là flex-start để đặt sát discountCodeContainer
    },
    
    saveButton: {
        backgroundColor: '#1E5E5A',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginRight: 10,
    },
    
});
