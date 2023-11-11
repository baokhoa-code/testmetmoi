import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../themes/themes';
const TopicDetailHeading = ({ title, icon }) => {
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={style.icon}>
                <Ionicons name={icon} size={24} color="black" />
            </TouchableOpacity>
            <Text style={style.txt}>{title}</Text>
        </View>
    );
}

export default TopicDetailHeading
const WIDTH = Dimensions.get('window').width
const style = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
    },
    icon: {
        left: 5,

    },
    txt: {
        color: 'black',
        fontSize: 22,
        left: 15,
        fontWeight: '500',
        width: WIDTH * 0.9,
        textAlign: 'center',
        alignSelf: 'center'
    },

})