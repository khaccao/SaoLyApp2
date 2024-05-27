import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Dashboard() {
    const [selectedValue, setSelectedValue] = useState("week");
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState("T5");

    const dropdownOptions = [
        { value: 'week', label: 'Theo tuần' },
        { value: 'month', label: 'Theo tháng' },
        { value: 'year', label: 'Theo năm' },
    ];

    const tabs = ["T3", "T4", "T5", "T6", "T7"];

    const handleSelectValue = (value) => {
        setSelectedValue(value);
        setDropdownVisible(false);
    };

    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.row}>
                    <Image
                        source={require('../../assets/LogoSaoLy.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.dashboardText}>Dashboard</Text>
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
                    <View style={styles.overviewRow}>
                        <Text style={styles.overviewText}>Tổng quan</Text>
                        <View style={styles.dropdownContainer}>
                            <TouchableOpacity onPress={() => setDropdownVisible(!isDropdownVisible)} style={styles.dropdownButton}>
                                <Text style={styles.dropdownButtonText}>
                                    {dropdownOptions.find(option => option.value === selectedValue)?.label}
                                </Text>
                                <Feather name={isDropdownVisible ? "chevron-up" : "chevron-down"} size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {isDropdownVisible && (
                        <View style={styles.dropdownMenu}>
                            {dropdownOptions.map(option => (
                                <TouchableOpacity
                                    key={option.value}
                                    onPress={() => handleSelectValue(option.value)}
                                    style={styles.dropdownItem}
                                >
                                    <Text style={styles.dropdownItemText}>{option.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    <View style={styles.cardsBackground}>
                        <View style={styles.cardsContainer}>
                            <View style={styles.card}>
                                <View style={styles.cardIconContainer}>
                                    <Feather name="pie-chart" size={20} color="#000" />
                                </View>
                                <Text style={styles.cardValue}>1.400.000.000 đ</Text>
                                <Text style={styles.cardLabel}>Tổng doanh thu</Text>
                            </View>
                            <View style={styles.card}>
                                <View style={styles.cardIconContainer}>
                                    <Feather name="users" size={20} color="#000" />
                                </View>
                                <Text style={styles.cardValue}>1.015</Text>
                                <Text style={styles.cardLabel}>Số lượng khách hàng</Text>
                            </View>
                            <View style={styles.card}>
                                <View style={styles.cardIconContainer}>
                                    <Feather name="book" size={20} color="#000" />
                                </View>
                                <Text style={styles.cardValue}>3.568</Text>
                                <Text style={styles.cardLabel}>Số lượng khóa học</Text>
                            </View>
                            <View style={styles.card}>
                                <View style={styles.cardIconContainer}>
                                    <AntDesign name="home" size={20} color="black" />
                                </View>
                                <Text style={styles.cardValue}>3</Text>
                                <Text style={styles.cardLabel}>Số lượng chi nhánh</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.chartTitle}>Tổng quan doanh thu theo Tuần</Text>
                    {/* Chart Section */}
                    <View style={styles.chartContainer}>
                        
                        <View style={styles.tabContainer}>
                            {tabs.map(tab => (
                                <TouchableOpacity
                                    key={tab}
                                    onPress={() => handleTabSelect(tab)}
                                    style={[
                                        styles.tabButton,
                                        selectedTab === tab && styles.selectedTabButton
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.tabButtonText,
                                            selectedTab === tab && styles.selectedTabButtonText
                                        ]}
                                    >
                                        {tab}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <LineChart
                            data={{
                                labels: ["","Tuần 1", "Tuần 2","Tuần 3", "Tuần 4"],
                                datasets: [
                                    {
                                        data: [120,700, 450, 380, 800]
                                    }
                                ]
                            }}
                            width={screenWidth - 70} // adjust the width to fit within the padding
                            height={220}
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "#e26a00",
                                backgroundGradientFrom: "#fb8c00",
                                backgroundGradientTo: "#ffa726",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "4",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 0
                            }}
                        />
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
    overviewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    overviewText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
    },
    dropdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FDEFDD',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    dropdownButtonText: {
        fontSize: 14,
        color: '#000000',
        marginRight: 5,
    },
    dropdownMenu: {
        position: 'absolute',
        top: 60,
        right: 15,
        backgroundColor: '#FDEFDD',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 1000, // Set a high zIndex to bring it above other content
    },
    dropdownItem: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    dropdownItemText: {
        fontSize: 16,
        color: '#333',
    },
    cardsBackground: {
        backgroundColor: '#D1C7C7',
        borderRadius: 15,
        padding: 10,
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
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#FDEFDD',
        borderRadius: 10,
        width: '48%',
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
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
    cardIconContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        padding: 10,
        alignSelf: 'flex-start',
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
    cardValue: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardLabel: {
        fontSize: 12,
        color: '#666',
    },
    chartContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center', // Center the chart horizontally
    },
    chartTitle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    tabButton: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        marginLeft: 7
    },
    selectedTabButton: {
        backgroundColor: '#FDEFDD',
    },
    tabButtonText: {
        fontSize: 14,
        color: '#000000',
    },
    selectedTabButtonText: {
        color: '#000000',
    },
    chartPlaceholder: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderRadius: 15,
    },
});
