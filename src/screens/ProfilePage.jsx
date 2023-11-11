import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Sumary, ApplicationOption, ProfilePageHeading } from '../components';
import { image } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
function ProfilePage() {
    const navigation = useNavigation();
    const navigateToEditProfile = () => {
        navigation.navigate('EditProfileStack');
    };

    const logOut = () => {
        navigation.navigate('WelcomeStack')
    }
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <ProfilePageHeading navigateToEditProfile={navigateToEditProfile} />
                </View>
                <Sumary />
                <Text style={styles.txt}>Application dashboard</Text>
                <View style={[styles.card1, styles.shadow_Prop]}>
                    <ApplicationOption title="Setting" />
                    <ApplicationOption title="Achivements" />
                    <ApplicationOption title="Privacy" />
                </View>
                <Text style={styles.txt}>My account</Text>
                <View style={styles.card1}>
                    <ApplicationOption title="Switch to another account" />
                    <ApplicationOption title="Logout Account" event={logOut} />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        height: HEIGHT,
        width: WIDTH,
        backgroundColor: '#D2E9E9',
    },
    content: {
        height: HEIGHT,
        backgroundColor: 'white',
        marginTop: 100,
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.12,
        shadowRadius: 1.00,
        elevation: 1
    },
    card1: {
        margin: 20,
        borderRadius: 20,
        alignItems: 'center'
    },
    txt: {
        marginLeft: 20,
        // fontFamily: 'Dosis-Bold',
        color: 'black',
        fontSize: 19,
        fontWeight: 500
    },

});
