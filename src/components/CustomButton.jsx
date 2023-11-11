import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/'

const CustomButton = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    var textColor = props.filled ? COLORS.white : COLORS.primary;
    textColor = props.textColor ? props.textColor : textColor
    const textSize = props.textSize ? props.textSize : 18;
    return (
        <TouchableOpacity
            style={{
                ...CustomButtonStyle.button,
                ...props.style,
                ...{ backgroundColor: bgColor },
                ...{ borderWidth: 0 },
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: textSize, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const CustomButtonStyle = StyleSheet.create({
    button: {
        paddingBottom: 14,
        paddingVertical: 10,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0, .4)', 
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2, 
        flexDirection: 'row'
    }
})
export default CustomButton