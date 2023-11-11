import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { UIButton } from '../components/';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Voice from '@react-native-voice/voice';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const WelcomeScreen = () => {
    const navigation = useNavigation();
    const navigateToLoginScreen = () => {
        navigation.navigate('LoginStack');
    };
    const navigateToRegistration = () => {
        navigation.navigate('RegistrationStack')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <LottieView
                    style={styles.LottieView}
                    source={require('../../assets/logo/Graduation.json')}
                    autoPlay
                    loop
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.text1}>VLEARNING</Text>
                <Text style={styles.text2}>Learning language for free</Text>
            </View>
            <View style={styles.footer}>
                <UIButton
                    title="sign up"
                    backgroundColor="#0A6EBD"
                    textColor="white"
                    size={18}
                    event={navigateToRegistration}
                />
                <UIButton
                    title="i already have an account"
                    backgroundColor="#0A6EBD"
                    textColor="white"
                    event={navigateToLoginScreen}
                    size={18}
                />
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        height: HEIGHT,
        width: WIDTH,
        backgroundColor: '#F0EEED',
    },
    text1: {
        textAlign: 'center',
        color: '#164B60',
        // fontFamily: 'Dosis-Bold',
        fontSize: 50,
    },
    text2: {
        textAlign: 'center',
        color: '#164B60',
        // fontFamily: 'Dosis-Medium',
        fontSize: 20,
    },
    header: {
        height: (HEIGHT / 4),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        height: (HEIGHT / 5),
        justifyContent: 'flex-start',
        padding: 20,
        alignItems: 'center',
    },
    footer: {
        height: (HEIGHT / 4),
        alignItems: 'center'
    },
    LottieView: {
        width: 250,
        height: 250,
    },
});
