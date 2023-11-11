import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'
import { useFonts } from 'expo-font';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const ProgressHeader = () => {
    const [fontsLoaded] = useFonts({
        'Quicksand-Medium': require('../../assets/font/Quicksand-Medium.ttf'),
        'Dosis-Bold': require('../../assets/font/Dosis-Bold.ttf'),
        'Quicksand-SemiBold': require('../../assets/font/Quicksand-SemiBold.ttf')
    })
    return (
        <View style={styles.view4}>
            <ProgressCircle
                percent={30}
                radius={50}
                borderWidth={10}
                color="#FF8C8C"
                shadowColor="#EDEDED"
                bgColor="#fff"
                outerCircleStyle={{ left: 15 }}
            >
                <Text style={styles.txt_progress}>{'30%'}</Text>
            </ProgressCircle>
            <Text style={styles.txt2}>Good result!</Text>
            <Text style={styles.txt3}>Your Vietnamese has been improved.</Text>
        </View>
    );
};

export default ProgressHeader

const styles = StyleSheet.create({
    view4: {
        height: (HEIGHT / 4),
        width: (WIDTH - 50),
        backgroundColor: '#ffffff',
        borderRadius: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.12,
        shadowRadius: 1.00,
        elevation: 1

    },
    txt_progress: {
        fontSize: 25,
        color: '#FF8787',
        // fontFamily: 'Quicksand-Medium'
    },
    txt2: {
        position: 'absolute',
        fontSize: 35,
        // fontFamily: 'Quicksand-SemiBold',
        left: 135,
        top: 60,
        width: 200,
        textAlign: 'left'
    },
    txt3: {
        // fontFamily: 'Quicksand-Medium',
        position: 'absolute',
        fontSize: 17,
        width: 180,
        left: 135,
        top: 100,
        width: 200,
        textAlign: 'left'

    },

})