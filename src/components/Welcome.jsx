import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import React from 'react'
import { COLORS, SIZES } from "../constants"
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={WelcomeStyle.container}>
                <Text style={WelcomeStyle.welcomeTxt(COLORS.black, SIZES.xSmall)}>{' '}Find The Most</Text>
                <Text style={WelcomeStyle.welcomeTxt2(COLORS.primary, 0)}>{' '}Luxurious Furniture</Text>
            </View>
            <View style={WelcomeStyle.searchContainer}>
                <TouchableOpacity>
                    <Feather name='search' size={24} style={WelcomeStyle.searchIcon} />
                </TouchableOpacity>
                <View style={WelcomeStyle.searchWrapper}>
                    <TextInput
                        style={WelcomeStyle.searchInput}
                        value=""
                        onPressIn={() => navigation.navigate('Search')}
                        placeholder="What are you looking for?" />
                </View>
                <View>
                    <TouchableOpacity style={WelcomeStyle.searchBtn}>
                        <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Welcome

const WelcomeStyle = StyleSheet.create({
    container: {
        width: '100%'
    },
    welcomeTxt: (color, top) => ({
        fontFamily: 'bold',
        fontSize: SIZES.xxLarge - 10,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.small
    }),
    welcomeTxt2: (color, top) => ({
        fontFamily: 'bold',
        fontSize: SIZES.xxLarge - 12,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.small
    }),
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: '100%',
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    }
})