import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { image } from '../../constants'
import { useFonts } from 'expo-font';
const TopicDetailLesson = ({ title, level, backgroundColor, navigateToStudyView }) => {
    const style = {
        border: {
            backgroundColor: backgroundColor,
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 80,
            margin: 15,
        },
    }
    return (
        <TouchableOpacity style={styles.container} onPress={navigateToStudyView}>
            <View style={style.border}>
                <Image source={image.lesson} style={{ width: 35, height: 35 }} />
            </View>
            <Text style={styles.txt}>{title}</Text>
            <Text style={styles.txt1}>{level}</Text>
        </TouchableOpacity>
    );
};
const LearningTrick = ({ title, level, backgroundColor }) => {
    const style = {
        icon: {
            backgroundColor: backgroundColor,
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 80,
            margin: 15,
        },
    }
    return (
        <TouchableOpacity style={styles.container}>
            <View style={style.icon}>
                <Image source={image.trick} style={{ width: 35, height: 35 }} />
            </View>
            <Text style={styles.txt}>{title}</Text>
            <Text style={styles.txt1}>{level}</Text>
            <Image style={styles.icon1} source={image.trick_icon} />
        </TouchableOpacity>
    );
};

const StoryLesson = ({ icon, title, backgroundColor, navigateToStudyView }) => {
    const style = {
        icon: {
            backgroundColor: backgroundColor,
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 80,
            margin: 15,
        },
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={navigateToStudyView}>
                <View style={style.icon}>
                    <Image source={icon} style={{ width: 40, height: 40 }} />
                </View>
                <Text style={styles.txtStoryContainer}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const TitleLesson = ({ backgroundColor, title, borderRadius }) => {
    const [fontsLoaded] = useFonts({
        'Bold': require('../../assets/font/Dosis-Bold.ttf')
    })
    const style = {
        txt: {
            height: 30,
            width: 250,
            backgroundColor: backgroundColor,
            color: '#000000',
            fontSize: 20,
            paddingLeft: 10,
            marginBottom: 10,
            fontWeight: '700',
        },
    }
    return (
        <Text style={[style.txt, { backgroundColor: backgroundColor }]}>{title}</Text>
    )
}


export { TopicDetailLesson, LearningTrick, StoryLesson, TitleLesson };

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#001C30',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10.0,
        elevation: 1,
        alignItems: 'center',
    },

    txt: {
        position: 'absolute',
        left: 80,
        top: 20,
        fontSize: 20,
        color: 'black',
        // fontFamily: 'Dosis',
        fontWeight: '500',
    },
    txt1: {
        position: 'absolute',
        top: 45,
        left: 80,
        fontSize: 15,
        color: 'black',
        // fontFamily: 'Dosis',
        fontStyle: 'italic',
    },
    icon1: {
        top: 5,
        right: 30,
        height: 50,
        width: 50
    },
    txtStoryContainer: {
        position: 'absolute',
        left: 80,
        top: 30,
        fontSize: 20,
        color: 'black',
        // fontFamily: 'Dosis',
        fontWeight: '500',
    }
});
