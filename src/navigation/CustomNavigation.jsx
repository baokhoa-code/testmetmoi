import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getItem } from '../utils/asyncStorage.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    AllTopic,
    AnnoucePage,
    EditProfile,
    FillQuestion,
    ForgotPassword,
    Homepage,
    ImageQuestion,
    LearningLesson,
    ListeningQuestion,
    Login,
    MultipleQuestion,
    ProfilePage,
    Registration,
    ResetPassword,
    SpeakingQuestion,
    SplashProgress,
    StudyView,
    TopicDetail,
    WelcomeScreen,
} from '../screens'
import BottomTab from './BottomTab.jsx'

const Stack = createNativeStackNavigator();


export default function CustomNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='WelcomeStack'>
                <Stack.Screen name='WelcomeStack' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='LoginStack' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='RegistrationStack' component={Registration} options={{ headerShown: false }} />
                <Stack.Screen name='Tab' component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name='AllTopicStack' component={AllTopic} options={{ headerShown: false }} />
                <Stack.Screen name='AnnoucePageStack' component={AnnoucePage} options={{ headerShown: false }} />
                <Stack.Screen name='EditProfileStack' component={EditProfile} options={{ headerShown: false }} />
                <Stack.Screen name='TopicDetailStack' component={TopicDetail} options={{ headerShown: false }} />
                <Stack.Screen name='StudyViewStack' component={StudyView} options={{ headerShown: false }} />
                <Stack.Screen name='ImageQuestionStack' component={ImageQuestion} options={{ headerShown: false }} />
                <Stack.Screen name='MultipleQuestionStack' component={MultipleQuestion} options={{ headerShown: false }} />
                <Stack.Screen name='FillQuestionStack' component={FillQuestion} options={{ headerShown: false }} />
                <Stack.Screen name='ListeningQuestionStack' component={ListeningQuestion} options={{ headerShown: false }} />
                <Stack.Screen name='SpeakingQuestionStack' component={SpeakingQuestion} options={{ headerShown: false }} />
                <Stack.Screen name='ResetPassStack' component={ResetPassword} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
