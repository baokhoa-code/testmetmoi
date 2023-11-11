import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import {
    TopicDetailHeading,
    TopicDetailLesson,
    LearningTrick,
    StoryLesson,
    TitleLesson,
} from '../components/';
import { data, trickData, storyLessonData } from '../../Data';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TopicContext } from '../context/topicContext';
const TopicDetail = () => {
    const navigation = useNavigation()
    const { topic } = useContext(TopicContext)
    const { id, title } = topic
    return (
        <SafeAreaView style={style.container}>
            <TopicDetailHeading title={title} />
            <View style={style.content}>
                <TitleLesson title="Learning by practice" />
                {data.map((lesson) => (
                    <TopicDetailLesson
                        key={lesson.id}
                        title={lesson.title}
                        level={lesson.level}
                        backgroundColor="#176B87"
                        navigateToStudyView={() => navigation.navigate('StudyViewStack')}
                    />
                ))}

                {trickData.map((trick) => (
                    <LearningTrick key={trick.id} title={trick.title} level={trick.level} backgroundColor="#176B87" />
                ))}

                <View style={style.item}>
                    <TitleLesson title="Practice with a story" borderRadius={20} />

                    {storyLessonData.map((story) => (
                        <StoryLesson
                            key={story.id}
                            icon={story.image}
                            title={story.title}
                            backgroundColor="#1F8A70"
                            navigateToStudyView={() => navigation.navigate('StudyViewStack')}
                        />
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TopicDetail;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2E9E9',
    },
    content: {
        height: '100%',
        padding: 20,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.00,
        elevation: 1
    },
    item: {
        top: 15
    }
});
