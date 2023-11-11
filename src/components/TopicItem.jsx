import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Alert } from 'react-native'
import React from 'react';
import { topicsData } from '../../Data';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const TopicItem = ({ navigateToTopicDetail }) => {
    return (
        <View style={styles.container}>
            {topicsData.map((topic) => (
                <TouchableOpacity onPress={navigateToTopicDetail} key={topic.id} style={styles.item}>
                    <Text style={styles.title}>{topic.title}</Text>
                    <Text style={styles.amount}>0/{topic.amount}</Text>
                    <Image source={topic.image} style={styles.img} />
                </TouchableOpacity>
            ))}
        </View>
    )
};

export default TopicItem;

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },

    item: {
        width: (WIDTH - 250),
        height: 170,
        backgroundColor: 'white',
        borderRadius: 19,
        margin: 10,
        flexWrap: 'wrap',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1, },
        shadowOpacity: 0.20,
        shadowRadius: 1.00,
        elevation: 2,
    },
    img: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 60
    },

    title: {
        position: 'absolute',
        // fontFamily: 'Dosis-Bold',
        fontSize: 20,
        color: 'black',
        left: 20,
        top: 15

    },
    amount: {
        position: 'absolute',
        left: 20,
        top: 40,
        // fontFamily: 'Dosis-Bold',
        fontStyle: 'italic'
    }
})
