import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONTSIZE, SPACING } from '../themes/themes'
import * as Speech from 'expo-speech';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import Voice from '@react-native-voice/voice';

const SpeakingQuestion = ({ question, answers, selectedAnswer, onAnswerSelection }) => {
  const [record, setRecord] = useState()

  const speakTextFromApi = () => {
    const textToSpeak = question;
    Speech.speak(textToSpeak, {
      language: 'vi',
      pitch: 1.0,
      rate: 0.8,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>

      <View style={styles.answerContainer}>
        <TouchableOpacity style={styles.soundContainer} onPress={speakTextFromApi}>
          <AntDesign name="sound" size={70} color={COLORS.Black} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SpeakingQuestion

const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {

  },
  questionText: {
    fontSize: FONTSIZE.size_20,
    marginHorizontal: SPACING.space_15,
    marginVertical: SPACING.space_15,
    textAlign: 'center'
  },
  answerContainer: {
    width: WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_32 * 4,
    justifyContent: 'center',
    alignContent: 'center'
  },
  answerBox: {
    width: WIDTH * 0.8,
    height: WIDTH * 0.15,
    backgroundColor: COLORS.White,
    marginHorizontal: SPACING.space_10,
    marginVertical: SPACING.space_8,
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_10,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: SPACING.space_15,
    borderWidth: 2,
    borderColor: COLORS.Brown

  },
  shadow: {
    shadowColor: COLORS.Black,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    elevation: 0.1
  },
  textAnswer: {
    textAlign: 'center',
    fontSize: FONTSIZE.size_16
  },
  soundContainer: {
    width: WIDTH * 0.3,
    height: WIDTH * 0.3,
    backgroundColor: COLORS.LightBlue1,
    borderRadius: SPACING.space_15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: SPACING.space_10
  },
})