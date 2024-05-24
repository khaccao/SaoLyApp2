import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FavouriteList() {

    const handlePress = (title) => {
        // Handle the press action for each item
        console.log(`Pressed: ${title}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <AntDesign name="left" size={20} color="#CFAE78" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Danh Sách Yêu Thích</Text>
                <View style={styles.emptyView} />
            </View>
            <ScrollView style={styles.accountContainer}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Khóa học yêu thích</Text>
                    <View style={styles.favoritesContainer}>
                        <FavoriteItem title="Khóa học 1" onPress={handlePress} />
                        <FavoriteItem title="Khóa học 2" onPress={handlePress} />
                        <FavoriteItem title="Khóa học 3" onPress={handlePress} />
                        <FavoriteItem title="Khóa học 4" onPress={handlePress} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Thiết bị yêu thích</Text>
                    <View style={styles.favoritesContainer}>
                        <FavoriteItem title="Máy phun" onPress={handlePress} />
                        <FavoriteItem title="Máy xăm" onPress={handlePress} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Màu mực yêu thích</Text>
                    <View style={styles.favoritesContainer}>
                        <FavoriteItem title="Mực đỏ " onPress={handlePress} />
                        <FavoriteItem title="Mực nâu" onPress={handlePress} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const FavoriteItem = ({ title, onPress }) => (
    <TouchableOpacity style={styles.favoriteItem} onPress={() => onPress(title)}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
        <View style={styles.titleContainer}>
            <Text style={styles.favoriteItemText}>{title}</Text>
            <AntDesign name="hearto" size={20} color="red" />
        </View>
    </TouchableOpacity>
);

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
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 10,
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
    favoritesContainer: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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
    favoriteItem: {
        width: '45%',
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 150,
        marginBottom: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    favoriteItemText: {
        fontSize: 14,
    },
});
