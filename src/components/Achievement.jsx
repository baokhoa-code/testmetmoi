import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { image } from '../../constants'

const Achievement = () => {
    return (
        <View style={styles.view8}>
            <TouchableOpacity style={[styles.view9, styles.shadow_achvProp]}>
                <Image style={styles.achieve_icon} source={image.crown} />
                <Text style={styles.title_lesson}>Alphabet</Text>
                <View style={styles.view10}>
                    <Entypo name="star" size={30} color={'yellow'} />
                    <Entypo name="star" size={30} color={'yellow'} />
                    <Entypo name="star" size={30} color={'yellow'} />
                    <Entypo name="star" size={30} color={'yellow'} />
                </View>
                <Text style={styles.content_lesson}>
                    You have completed the Alphabet lesson
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Achievement

const styles = StyleSheet.create({
    view8: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    view9: {
        backgroundColor: '#ffffff',
        width: 350,
        height: 80,
        borderRadius: 19,
        margin: 5,
        flexDirection: 'row'
    },
    view10: {
        flexDirection: 'row',
        position: 'absolute',
        left: 180,
        top: 3
    },

    shadow_achvProp: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1, },
        shadowOpacity: 0.18,
        shadowRadius: 11.00,
        elevation: 1,
    },
    lesson_txt: {
        margin: 10,
        fontSize: 17,
        // fontFamily: 'Dosis-SemiBold',
        color: 'black'
    },


    achieve_icon: {
        width: 65,
        height: 65,
        left: 10,

    },
    title_lesson: {
        color: 'black',
        // fontFamily: 'Dosis-Bold',
        fontSize: 22,
        left: 85,
        position: 'absolute',
        top: 7
    },
    content_lesson: {
        left: 10,
        fontSize: 15,
        // fontFamily: 'Dosis-Regular',
        color: 'black',
        top: 35,
        left: 85,
        position: 'absolute'
    },
})