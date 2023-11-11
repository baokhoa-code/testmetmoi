import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Animated, Dimensions, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import appConfig from '../../app.config';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import { TopicDetailHeading } from '../components';
import { COLORS, FONTSIZE, SPACING } from '../themes/themes';
import ProgressBar from 'react-native-progress/Bar';
import { TopicContext } from '../context/topicContext';

const LearningLesson = () => {
    const [topics, setTopics] = useState([]);
    const { state } = useContext(AuthContext);
    const accessToken = state.accessToken

    const { setTopic } = useContext(TopicContext)
    const navigation = useNavigation()
    const IPV4_ADDRESS = appConfig.extra.IPV4

    useEffect(() => {
        const getTopicData = async () => {
            try {
                let response = await axios.get(`http://${IPV4_ADDRESS}:4000/api/v1/topic`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setTopics(response.data);
            } catch (error) {
                console.log('Error in getTopicData func', error);
            }
        }
        if (accessToken) {
            getTopicData();
        }
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <TopicDetailHeading title={'Topic'} />
            <View style={styles.line} />
            <ScrollView>
                <View style={styles.content}>
                    {topics.map((t) => {
                        const originalPath = t.topic.avatar.url
                        const updatedPath = originalPath.replace(/\\/g, "/");
                        const processNumber = parseFloat(t.progress)
                        const roundedNumber = processNumber.toFixed(2)
                        return (

                            <TouchableOpacity
                                style={styles.topicContainer}
                                key={t.topic.id}
                                onPress={async () => {
                                    setTopic({
                                        id: t.topic.id,
                                        title: t.topic.name,
                                        progress: t.progress
                                    })
                                    try {
                                        const response = await axios.post(
                                            `http://${IPV4_ADDRESS}:4000/api/v1/topic-progress`,
                                            {
                                                topicId: t.topic.id
                                            },
                                            {
                                                headers: {
                                                    Authorization: `Bearer ${accessToken}`
                                                }
                                            }
                                        );
                                    } catch (error) {
                                        console.error('Error creating progress:', error);
                                    }
                                    navigation.navigate('StudyViewStack')
                                }}
                            >
                                <Image
                                    style={styles.imageTopic}
                                    source={{ uri: `http://${IPV4_ADDRESS}:4000/${updatedPath}` }} />
                                <View style={styles.topicDetailContainer}>
                                    <Text style={styles.titleText}>{t.topic.name}</Text>
                                    {t.progress > 0 ? (
                                        <Text style={styles.processText}>Progress: {roundedNumber}%</Text>
                                    ) : (
                                        <Text style={styles.processText}>Progress: 0</Text>
                                    )}
                                    <ProgressBar progress={processNumber / 10} color={COLORS.LightBlack} borderColor={COLORS.Grey} width={200} />

                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LearningLesson;

const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Beige,
    },
    header: {
        width: WIDTH,
        flex: 1,
        marginBottom: SPACING.space_10

    },
    topicContainer: {
        width: WIDTH * 0.9,
        backgroundColor: COLORS.White,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: SPACING.space_10,
        marginVertical: SPACING.space_10 - 3,
        paddingHorizontal: SPACING.space_15,
        paddingVertical: SPACING.space_15,
        borderRadius: SPACING.space_15,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 0.3,
        elevation: 1,
    },
    imageTopic: {
        width: WIDTH * 0.25,
        height: WIDTH * 0.25,
        borderRadius: SPACING.space_15
    },
    line: {
        backgroundColor: COLORS.Grey,
        height: 0.3,
        width: WIDTH,
        marginVertical: SPACING.space_10
    },
    topicDetailContainer: {
        marginHorizontal: SPACING.space_10,
        marginVertical: SPACING.space_10
    },
    titleText: {
        textTransform: 'capitalize',
        color: COLORS.Black,
        fontWeight: '400',
        fontSize: FONTSIZE.size_18
    },
    processText: {
        marginVertical: SPACING.space_10 - 5
    }
});
