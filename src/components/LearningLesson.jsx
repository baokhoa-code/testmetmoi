import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { topicsData } from '../../Data';
import { useFonts } from 'expo-font';
const LearningLesson = ({ navigateToTopicDetail }) => {
    const [fontsLoaded] = useFonts({
        'Quicksand-Medium': require('../../assets/font/Quicksand-Medium.ttf'),
        'Quicksand-SemiBold': require('../../assets/font/Quicksand-SemiBold.ttf')
    })
    return (
        <View style={styles.box}>
            {topicsData.map((lesson, index) => (
                <TouchableOpacity onPress={navigateToTopicDetail} key={index} style={styles.item}>
                    <Text style={styles.title}>{lesson.title}</Text>
                    <Text style={styles.amount}>0/{lesson.amount}</Text>
                    <Image source={lesson.image} style={styles.img} />
                </TouchableOpacity>
            ))}
        </View >
    );
}

export default LearningLesson

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        margin: 15
    },

    item: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 19,
        margin: 5,
        flexWrap: 'wrap',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1, },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    img: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 60
    },

    title: {
        position: 'absolute',
        // fontFamily: 'Quicksand-SemiBold',
        fontSize: 20,
        color: 'black',
        left: 20,
        top: 15,

    },
    amount: {
        position: 'absolute',
        left: 20,
        top: 40,
        // fontFamily: 'Quicksand-Medium',
        fontStyle: 'italic',
    }
})