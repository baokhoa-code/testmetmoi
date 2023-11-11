import {
    StyleSheet, Text,
} from "react-native"
import React from 'react'
import { SIZES } from "../constants"

const ReusableText = ({ text, family, size, color }) => {
    return (
        <Text style={ReusableTextStyle.textStyle(family, size, color)}>{text}</Text>
    )
}

export default ReusableText

const ReusableTextStyle = StyleSheet.create({
    temp: {
        resizeMode: 'cover',
        width: SIZES.width,
        height: SIZES.height
    },
    textStyle: (family, size, color) => ({
        fontFamily: family,
        fontSize: size,
        color: color,
    }),
})