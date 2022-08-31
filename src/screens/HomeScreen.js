import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ratings from '../components/Ratings';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Watches from '../components/Watches';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.space}>
                <View style={styles.sectionContainer}>
                    <AntDesign name="bars" style={{color: 'grey', fontSize: 20}} />
                </View>
                <View style={styles.sectionContainer}>
                    <Feather name="shopping-bag" style={{color: 'grey', fontSize: 20}} />
                </View>
            </View>
            <Text
                style={{
                    margin: 10,
                    marginLeft: 20,
                    fontWeight: '600',
                    fontSize: 40,
                }}>
                Welcome
            </Text>
            <View style={{alignItems: 'center', marginTop: 10}}>
                <View style={styles.searchSection}>
                    <Feather name="search" style={styles.searchIcon} />
                    <TextInput style={styles.input} placeholder="Search..."></TextInput>
                </View>
            </View>
            <View style={styles.trending}>
                <Text style={{fontWeight: '600', fontSize: 20}}>Popular Watches</Text>
            </View>
            <View style={{margin: 20, flexDirection: 'row'}}>
                <ScrollView horizontal={true}>
                    <Watches />
                </ScrollView>
            </View>
            <Text style={{fontWeight: '600', fontSize: 20, marginLeft: 20}}>Ratings</Text>
            <ScrollView horizontal={true}>
                <Ratings />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    more: {
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 20,
        marginTop: 30,
    },
    trending: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 10,
        marginTop: 40,
    },
    searchIcon: {
        padding: 10,
        color: 'grey',
    },
    searchSection: {
        margin: 'auto',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,

        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 6,
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'white',
        borderRadius: 10,
    },
    space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionContainer: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 20,
        height: 45,
        width: 45,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
});

export default HomeScreen;
