import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const width_image = '70%';
const height_image = '50%';
const background_height = '95%';
const background_width = '60%';
const section_height = '50%';
const width = '75%';
const heart_width = '20%';

const DetailScreen = () => {
    const navigation = useNavigation();

    const arrowLeftPressed = () => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                <View style={{width: '20%'}}>
                    <View style={styles.sectionContainer}>
                        <AntDesign name="arrowleft" onPress={arrowLeftPressed} style={{color: 'grey', fontSize: 20}} />
                    </View>
                </View>

                <View style={styles.background}>
                    <Image
                        style={styles.logoImage}
                        source={{
                            uri: 'https://i.pinimg.com/originals/23/24/28/2324287097b26cde49893d5512434254.png',
                        }}
                    />
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://www.ugursaat.com.tr/Uploads/rolex/model/watch_assets_front_facing/landscape_assets/m326238-0009_modelpage_front_facing_landscape.png',
                        }}
                    />
                </View>
            </View>
            <View style={{margin: 20}}>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.text}>Sky-Dweller</Text>
                        <Text style={styles.text}>326238</Text>
                    </View>
                    <View>
                        <Text style={{color: '#2E58B5', fontSize: 24, fontWeight: '700'}}>$ 459.99</Text>
                    </View>
                </View>
                <Text style={{lineHeight: 25, fontSize: 12, color: '#79664F'}}>
                    THE OYSTER PERPETUAL SKY-DWELLER IN 18 CT YELLOW GOLD WITH A BRIGHT BLACK DIAL AND AN OYSTERFLEX BRACELET.
                </Text>

                <ScrollView style={{marginTop: 30}} horizontal={true}>
                    <View style={styles.interior}>
                        <Text>Switzerland</Text>
                        <Text style={{marginTop: 10, color: 'grey'}}>Country</Text>
                    </View>
                    <View style={styles.interior}>
                        <Text>Switzerland</Text>
                        <Text style={{marginTop: 10, color: 'grey'}}>Country</Text>
                    </View>
                    <View style={styles.interior}>
                        <Text>Switzerland</Text>
                        <Text style={{marginTop: 10, color: 'grey'}}>Country</Text>
                    </View>
                </ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.heartIcon}>
                        <AntDesign name="hearto" style={{color: '#AB8070', fontSize: 27}} />
                    </View>
                    <View style={styles.buy}>
                        <Text style={{color: 'white', fontSize: 20}}>Buy Now</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    buy: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AB8070',
        marginLeft: 10,
        marginTop: 30,
        height: 60,
        width: width,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    heartIcon: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8DFD7',

        marginTop: 30,
        height: 60,
        width: heart_width,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    interior: {
        marginRight: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 120,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.06,
        shadowRadius: 6,
    },
    section: {flexDirection: 'row', height: section_height},
    sectionContainer: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 20,
        height: 35,
        width: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    background: {
        backgroundColor: '#1B5D3C',
        height: background_height,

        width: background_width,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 50,
    },
    logoImage: {
        width: 30,
        height: 30,
        marginBottom: 30,
    },
    image: {
        width: width_image,
        height: height_image,
        overflow: 'hidden',
        borderRadius: 20,
    },
    textContainer: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#79664F',
        fontSize: 24,
        margin: 3,
        fontWeight: '600',
    },
});
