import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AnnouceBox = () => {
    const data = [
        {
            id: 1,
            type: 'Speaking',
            title: 'You passed the Alphabet Lesson',
            time: '1min',
            image: require('../../assets/image/alphabet.png')
        }
    ]
    return (
        <View>
            {data.map((announce) => (
                <TouchableOpacity key={announce.id} style={[styles.container, styles.shadow]}>
                    <Image source={announce.image} style={styles.img} />
                    <Text style={styles.type}>{announce.type} </Text>
                    <Text style={styles.title}>{announce.title}</Text>
                    <Text style={styles.time}>{announce.time}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default AnnouceBox

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'white',
        width: '90%',
        margin: 10,
        alignSelf: 'center',
        borderRadius: 10,
        top: 10
    },
    img: {
        width: 90,
        height: 90,
        left: 20
    },
    type: {
        position: 'absolute',
        top: 20,
        left: 110,
        // fontFamily: 'Dosis-SemiBold',
        color: 'black',
        fontSize: 16

    },
    time: {
        position: 'absolute',
        top: 20,
        left: 190,
        // fontFamily: 'Dosis-Light',
        fontStyle: 'italic',
        color: 'black'
    },
    title: {
        position: 'absolute',
        top: 45,
        left: 110,
        // fontFamily: 'Dosis-Bold',
        color: 'black',
        fontSize: 16
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1.00,
        shadowOffset: { height: 1, width: 1 },
        elevation: 1
    }
})