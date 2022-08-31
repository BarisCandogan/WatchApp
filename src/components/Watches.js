import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const watches = [
    {
        id: '1',
        title: 'Rolex Sky-Dweller',
        image: 'https://www.ugursaat.com.tr/Uploads/rolex/model/watch_assets_front_facing/landscape_assets/m326238-0009_modelpage_front_facing_landscape.png',
        price: '$ 50.000',
        model: 'Swiss Watches',

        color: '#1B5D3C',
    },
    {
        id: '2',
        title: 'Patek Philippe Geneve',
        image: 'https://i.pinimg.com/originals/00/9c/c7/009cc746f9c1093b635231ffb2f41f65.png',
        screen: 'HomeDisplay',
        model: 'Swiss Watches',

        price: '40.000$',
        color: '#B09145',
    },
    {
        id: '3',
        title: 'Omega Speedmaster',
        image: 'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-21030422004001-l.png',
        screen: 'HomeDisplay',
        model: 'Swiss Watches',
        price: '$ 15.000',
        color: '#1B3C52',
    },
];

const Watches = () => {
    const navigation = useNavigation();

    const onWatchPressed = () => {
        navigation.navigate('Detail');
    };

    return watches.map(item => (
        <TouchableOpacity onPress={onWatchPressed}>
            <View key={item.id} style={styles.container}>
                <View style={[styles.position]}>
                    <View
                        style={{
                            backgroundColor: item.color,
                            height: '60%',
                            width: '80%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 50,
                            borderRadius: 10,
                        }}>
                        <Image style={styles.image} source={{uri: item.image}} />
                        <Text style={{marginTop: 15, width: '120%', textAlign: 'center'}}>{item.title}</Text>
                        <Text style={{color: 'grey', marginTop: 3}}>{item.model}</Text>
                        <Text
                            style={{
                                color: '#0205d2',
                                marginTop: 8,
                                fontSize: 16,
                                fontWeight: '700',
                            }}>
                            {item.price}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    ));
};

export default Watches;

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 120,
        marginBottom: 20,
        overflow: 'hidden',
        borderRadius: 20,
        marginTop: 42,
    },
    container: {
        width: 200,
        display: 'flex',
        flexDirection: 'row',
    },
    position: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 20,
        paddingBottom: 20,
        height: 220,
        width: 150,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 8,
    },
});
