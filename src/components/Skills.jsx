import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { skillsData } from '../../Data';
import { useFonts } from 'expo-font';
const Skills = () => {
    const [fontsLoaded] = useFonts({
        'Quicksand-Medium': require('../../assets/font/Quicksand-Medium.ttf'),
        'Quicksand-SemiBold': require('../../assets/font/Quicksand-SemiBold.ttf')
    })
    return (
        <View style={styles.view5}>
            {skillsData.map((skill, index) => (
                <TouchableOpacity style={[styles.view7, styles.shadowProp]} key={index}>
                    <View style={styles.borderImg}>
                        <Image style={styles.skill_img} source={skill.image} />
                    </View>
                    <Text style={styles.title_skill}>{skill.title}</Text>
                    <Text style={styles.content_skill}>{skill.content}</Text>
                    <ProgressBar style={styles.progress_skill} progress={0.3} color={'#FF8C8C'} />
                </TouchableOpacity>
            ))}
        </View>
    );

};

export default Skills;

const styles = StyleSheet.create({
    view5: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    view7: {
        width: 390,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        margin: 5,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 0.7,
    },
    skill_img: {
        width: 60,
        height: 60,
    },
    title_skill: {
        position: 'absolute',
        color: 'black',
        // fontFamily: 'Quicksand-SemiBold',
        fontSize: 22,
        left: 100,
        top: 30,
    },
    content_skill: {
        position: 'absolute',
        left: 100,
        fontSize: 15,
        // fontFamily: 'Quicksand-Medium',
        color: 'black',
        top: 60,
    },
    progress_skill: {
        position: 'absolute',
        width: '60%',
        left: 100,
        top: -10
    },
    borderImg: {
        height: 80,
        width: 80,
        left: 10,
        borderRadius: 15,
        backgroundColor: '#FAF0E4',
        alignItems: 'center',
        justifyContent: 'center'
    }
});