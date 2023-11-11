import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { categoriesData } from '../../Data'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const Categories = () => {
    return (
        <View style={styles.box}>
            {categoriesData.map((skill, index) => (
                <TouchableOpacity key={index} style={styles.categories}>
                    <Image style={styles.img} source={skill.image} />
                    <Text style={styles.txt}>{skill.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    box: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        top: 5,
    },
    categories: {
        width: '35%',
        height: 100,
        margin: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1, },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    img: {
        width: 70,
        height: 70,
    },
    txt: {
        fontSize: 18,
        // fontFamily: 'Dosis-Bold',
        color: 'black'

    },

})