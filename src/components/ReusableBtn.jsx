import {
    ScrollView, StyleSheet, Text,
    TextInput, TouchableOpacity, View, Image
} from "react-native"
import React from 'react'
import { COLORS, SIZES } from "../constants"
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ReusableBtn = ({ onPress, btnText, textColor, width, backgroundColor, borderwidth, borderColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={ReusableBtnStyle.btnStyle(width, backgroundColor, borderwidth, borderColor)}>
            <Text style={ReusableBtnStyle.btnText(textColor)}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ReusableBtn

const ReusableBtnStyle = StyleSheet.create({
    temp: {
        resizeMode: 'cover',
        width: SIZES.width,
        height: SIZES.height
    },
    btnStyle: (width, backgroundColor, borderwidth, borderColor) => ({
        width: width,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: SIZES.small,
        borderColor: borderColor,
        borderwidth: borderwidth
    }),
    btnText: (textColor) => ({
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        color: textColor,
    }),
})