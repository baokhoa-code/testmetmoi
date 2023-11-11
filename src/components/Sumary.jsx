import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const Sumary = () => {
    const data = [
        {
            id: 1,
            title: 'Total Learn',
            detail: '2+ hours'
        },
        {
            id: 2,
            title: 'On Process',
            detail: '10'
        },
        {
            id: 3,
            title: 'Achivements',
            detail: '20'

        }
    ]
    return (
        <View style={styles.content}>
            {data.map((content) => (
                <View style={styles.box1} key={content.id}>
                    <View >
                        <Text style={styles.detail_txt}>{content.detail}</Text>
                        <Text style={styles.title_txt}>{content.title}</Text>
                    </View>


                </View>
            ))}
        </View>
    )
}

export default Sumary

const styles = StyleSheet.create({
    content: {
        height: 100,
        width: WIDTH,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    box1: {
        padding: 20
    },
    detail_txt: {
        // fontFamily: 'Dosis-Bold',
        color: 'black',
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    title_txt: {
        textAlign: 'center',
        // fontFamily: 'Montserrat-MediumItalic',
        fontSize: 15,
        fontStyle: 'italic'
    }
})