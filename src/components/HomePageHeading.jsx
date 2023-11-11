import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { image } from '../../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const HomePageHeading = ({ navigaToAnnouceScreen }) => {

    return (
        <View style={styles.view3}>
            <Image style={styles.image_usr} source={image.avatar} />
            <Text style={styles.txt}>Hello, user!</Text>
            <TouchableOpacity style={styles.icon} onPress={navigaToAnnouceScreen}>
                {/* <Image source={image.announce} style={styles.icon}/> */}
                <MaterialCommunityIcons name='bell' color='#0E2954' size={32} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default HomePageHeading;

const styles = StyleSheet.create({
    view3: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },
    image_usr: {
        position: 'absolute',
        width: 40,
        height: 40,
        top: 15,
        left: 10,
    },
    txt: {
        position: 'absolute',
        top: 20,
        left: 60,
        // fontFamily: 'Inter-SemiBoldItalic',
        fontSize: 20,
        color: 'black',
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
