import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OptionsLogin = ({ source }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={source} style={styles.img} />
        </TouchableOpacity>
    )
}

export default OptionsLogin

const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#333',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.12,
        shadowRadius: 1.00,
        elevation: 1.00,
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 20
    },
    img: {
        width: 50,
        height: 50
    }
})