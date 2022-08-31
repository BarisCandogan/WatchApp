import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Entypto from 'react-native-vector-icons/Entypo';
const width_proportion = '40%';

const Ratings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.patekLogo}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://watchesulike.com/68424-home_default/patek-philippe-logo-to-stick-tm.jpg',
                        }}
                    />
                    <Text style={{color: 'white', fontSize: 10}}>Patek Philippe</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                    <Text>Rating : </Text>
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                </View>
            </View>
            <View style={styles.background}>
                <View style={styles.rolexLogo}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://i.pinimg.com/originals/23/24/28/2324287097b26cde49893d5512434254.png',
                        }}
                    />
                    <Text style={{color: 'white', fontSize: 10}}>Rolex</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                    <Text>Rating : </Text>
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star-outlined" style={{color: 'orange'}} />
                </View>
            </View>

            <View style={styles.background}>
                <View style={styles.omegaLogo}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://cdn.iconscout.com/icon/free/png-256/omega-watches-3421593-2854274.png',
                        }}
                    />
                    <Text style={{color: 'white', fontSize: 10}}>Omega</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                    <Text>Rating : </Text>
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star" style={{color: 'orange'}} />
                    <Entypto name="star-outlined" style={{color: 'orange'}} />
                    <Entypto name="star-outlined" style={{color: 'orange'}} />
                </View>
            </View>
        </View>
    );
};

export default Ratings;

const styles = StyleSheet.create({
    rolexLogo: {
        padding: 5,
        borderRadius: 6,
        backgroundColor: '#1B5D3C',
        alignItems: 'center',
        width: 80,
    },
    patekLogo: {
        padding: 5,
        borderRadius: 6,
        backgroundColor: '#B09145',
        alignItems: 'center',
        width: 80,
    },
    omegaLogo: {
        padding: 5,
        borderRadius: 6,
        backgroundColor: '#1B3C52',
        alignItems: 'center',
        width: 80,
    },
    image: {
        width: 20,
        height: 20,
    },
    container: {
        width: 500,
        marginTop: 20,
        margin: 10,
        flexDirection: 'row',
    },
    background: {
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: width_proportion,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 8,
    },
});
