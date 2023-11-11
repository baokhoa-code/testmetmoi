import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const ApplicationOption = ({ title, icon, style, event }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={event}>
            <Text style={styles.txt}>{title}</Text>
            <View style={styles.boxicon}>{icon && <FontAwesome color='black' size={32} name={icon} />}</View>
        </TouchableOpacity>
    );
};

export default ApplicationOption

const styles = StyleSheet.create({

    button: {
        width: (WIDTH - 100),
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,

    },
    txt: {
        // fontFamily: 'Dosis-SemiBold',
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
    },
    boxicon: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
    },

})