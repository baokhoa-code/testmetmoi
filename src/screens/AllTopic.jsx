import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { TopicDetailHeading, TopicItem } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const AllTopic = () => {
    const navigation = useNavigation()
    const navigateToTopicDetail = () => {
        navigation.navigate('TopicDetailStack');
    };
    return (
        <SafeAreaView style={styles.container}>
            <TopicDetailHeading />
            <ScrollView>
                <View style={styles.content}>
                    <TopicItem navigateToTopicDetail={navigateToTopicDetail} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AllTopic

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2E9E9',
        flex: 1,
    },
    content: {
        height: '100%',
        // backgroundColor: '#FFFDF6',
        paddingTop: 20,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 10.00,
        elevation: 1,
    },
})