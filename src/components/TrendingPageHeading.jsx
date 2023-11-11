import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const TrendingPageHeading = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>{title}</Text>
        </View>
    )
}

export default TrendingPageHeading

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1, },
        shadowOpacity: 1,
        shadowRadius: 1.00,
        elevation: 1,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    txt: {
        textAlign: 'center',
        // fontFamily: 'Montserrat-SemiBold',
        color: 'black',
        fontSize: 25,
        textTransform: 'uppercase',
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    }
})