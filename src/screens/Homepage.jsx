import { StyleSheet, Text, View, ScrollView, } from 'react-native'
import React, { useContext } from 'react'
import { Skills, ProgressHeader, HomePageHeading, LearningLesson } from '../components';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { COLORS, FONTSIZE, SPACING } from '../themes/themes';
import { AuthContext } from '../context/authContext';

const Homepage = () => {
    const { accessToken } = useContext(AuthContext)
    const navigation = useNavigation();
    const navigaToAnnouceScreen = () => {
        navigation.navigate('AnnoucePageStack');
    };
    const navigateToTopicDetail = () => {
        navigation.navigate('TopicDetailStack');
    };

    const [fontsLoaded] = useFonts({
        'Quicksand': require('../../assets/font/Quicksand-Light.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.view1}>
                <View style={styles.header}>
                    <HomePageHeading navigaToAnnouceScreen={navigaToAnnouceScreen} />
                </View>
                <ScrollView contentInset={{ bottom: 50 }} style={styles.content}>
                    <ProgressHeader />
                    <Text style={styles.txt}>Recent process</Text>
                    <Skills />
                    <Text style={styles.txt}>Recent topics</Text>
                    <ScrollView horizontal>
                        <LearningLesson navigateToTopicDetail={navigateToTopicDetail} />
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Homepage

const HEADER_HEIGHT = 70
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Beige,
    },
    header: {
        height: HEADER_HEIGHT,
    },
    content: {
        paddingTop: 5,
        position: 'relative',
    },
    txt: {
        marginLeft: SPACING.space_20,
        marginTop: SPACING.space_10,
        fontSize: FONTSIZE.size_18,
        // fontFamily: 'Quicksand'
    }


})