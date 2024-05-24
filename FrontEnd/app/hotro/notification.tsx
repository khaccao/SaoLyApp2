import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Notification() {
    const [selectedLanguage, setSelectedLanguage] = useState('vietnamese');

    const toggleLanguage = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Thông báo</Text>
                <View style={styles.emptyView} />
            </View>

            <Text style={styles.latestNotificationText}>Thông báo gần nhất</Text>

            <ScrollView style={styles.scrollView}>
                <View style={styles.notificationContainer}>
                    <Image 
                        source={require('../../assets/LogoSaoLy2.png')}
                        style={styles.profileImage} 
                    />
                    <View style={styles.notificationContent}>
                        <Text style={styles.welcomeText}>Chào mừng bạn tới viện thẩm mỹ SaoLy Beauty & Academy</Text>
                        <Text style={styles.notificationText}>
                            Chúng tôi rất vui được chào đón bạn trong cộng đồng. Chúng tôi hy vọng bạn sẽ có trải nghiệm tuyệt vời và hữu ích khi sử dụng ứng dụng này. Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi. Hãy bắt đầu khám phá và tận hưởng những tiện ích mà ứng dụng của chúng tôi mang lại!
                        </Text>
                        <Text style={styles.timestamp}>15:00     22/5/2024</Text>
                    </View>
                </View>

                <View style={styles.notificationContainer}>
                    <Image 
                        source={require('../../assets/LogoSaoLy2.png')}
                        style={styles.profileImage} 
                    />
                    <View style={styles.notificationContent}>
                        <Text style={styles.welcomeText}>Chào mừng bạn tới viện thẩm mỹ SaoLy Beauty & Academy</Text>
                        <Text style={styles.notificationText}>
                            Chúng tôi rất vui được chào đón bạn trong cộng đồng. Chúng tôi hy vọng bạn sẽ có trải nghiệm tuyệt vời và hữu ích khi sử dụng ứng dụng này. Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi. Hãy bắt đầu khám phá và tận hưởng những tiện ích mà ứng dụng của chúng tôi mang lại!
                        </Text>
                        <Text style={styles.timestamp}>15:00     22/5/2024</Text>
                    </View>
                </View>

                <View style={styles.notificationContainer}>
                    <Image 
                        source={require('../../assets/LogoSaoLy2.png')}
                        style={styles.profileImage} 
                    />
                    <View style={styles.notificationContent}>
                        <Text style={styles.welcomeText}>Chào mừng bạn tới viện thẩm mỹ SaoLy Beauty & Academy</Text>
                        <Text style={styles.notificationText}>
                            Chúng tôi rất vui được chào đón bạn trong cộng đồng. Chúng tôi hy vọng bạn sẽ có trải nghiệm tuyệt vời và hữu ích khi sử dụng ứng dụng này. Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi. Hãy bắt đầu khám phá và tận hưởng những tiện ích mà ứng dụng của chúng tôi mang lại!
                        </Text>
                        <Text style={styles.timestamp}>15:00     22/5/2024</Text>
                    </View>
                </View>
                <View style={styles.notificationContainer}>
                    <Image 
                        source={require('../../assets/LogoSaoLy2.png')}
                        style={styles.profileImage} 
                    />
                    <View style={styles.notificationContent}>
                        <Text style={styles.welcomeText}>Chào mừng bạn tới viện thẩm mỹ SaoLy Beauty & Academy</Text>
                        <Text style={styles.notificationText}>
                            Chúng tôi rất vui được chào đón bạn trong cộng đồng. Chúng tôi hy vọng bạn sẽ có trải nghiệm tuyệt vời và hữu ích khi sử dụng ứng dụng này. Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi. Hãy bắt đầu khám phá và tận hưởng những tiện ích mà ứng dụng của chúng tôi mang lại!
                        </Text>
                        <Text style={styles.timestamp}>15:00     22/5/2024</Text>
                    </View>
                </View>
                <View style={styles.notificationContainer}>
                    <Image 
                        source={require('../../assets/LogoSaoLy2.png')}
                        style={styles.profileImage} 
                    />
                    <View style={styles.notificationContent}>
                        <Text style={styles.welcomeText}>Chào mừng bạn tới viện thẩm mỹ SaoLy Beauty & Academy</Text>
                        <Text style={styles.notificationText}>
                            Chúng tôi rất vui được chào đón bạn trong cộng đồng. Chúng tôi hy vọng bạn sẽ có trải nghiệm tuyệt vời và hữu ích khi sử dụng ứng dụng này. Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi. Hãy bắt đầu khám phá và tận hưởng những tiện ích mà ứng dụng của chúng tôi mang lại!
                        </Text>
                        <Text style={styles.timestamp}>15:00     22/5/2024</Text>
                    </View>
                </View>
                <View style={styles.notificationContainer}>
                    <Image 
                        source={require('../../assets/LogoSaoLy2.png')}
                        style={styles.profileImage} 
                    />
                    <View style={styles.notificationContent}>
                        <Text style={styles.welcomeText}>Chào mừng bạn tới viện thẩm mỹ SaoLy Beauty & Academy</Text>
                        <Text style={styles.notificationText}>
                            Chúng tôi rất vui được chào đón bạn trong cộng đồng. Chúng tôi hy vọng bạn sẽ có trải nghiệm tuyệt vời và hữu ích khi sử dụng ứng dụng này. Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên hệ với chúng tôi. Hãy bắt đầu khám phá và tận hưởng những tiện ích mà ứng dụng của chúng tôi mang lại!
                        </Text>
                        <Text style={styles.timestamp}>15:00     22/5/2024</Text>
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
    latestNotificationText: {
        marginHorizontal: 15,
        margin: 10,
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
    },
    notificationContainer: {
        flexDirection: 'row',
        padding: 20,
        marginBottom: 15,
        backgroundColor: '#EEEEEE',
        marginHorizontal: 15,
        borderRadius: 10,
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
    profileImage: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    notificationContent: {
        flex: 1,
    },
    welcomeText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    notificationText: {
        fontSize: 10,
        color: '#555',
        marginBottom: 10,
    },
    timestamp: {
        fontSize: 10,
        color: '#000000',
        alignSelf: 'flex-end',
    },
});
