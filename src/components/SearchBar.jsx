import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { image } from '../../constants'
import Input from './Input'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Input heightInput={50} widthInput={300} placeholder='Search..' />
            <TouchableOpacity style={styles.boderItem}>
                <Image source={image.search} style={styles.img} />
            </TouchableOpacity>
        </View>
    );
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: 300,
        justifyContent: 'center'
    },
    img: {
        width: 25,
        height: 25,
    },
    boderItem: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'flex-end'
    }
})