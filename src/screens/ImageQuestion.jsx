import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTSIZE, SPACING } from '../themes/themes'


const ImageQuestion = ({ question, answers, selectedAnswer, onAnswerSelection }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{" " + question + " "}</Text>
      <View style={styles.answerContainer}>
        {answers.map((answer, index) => {
          const originalPath = answer.attachment.url;
          const updatedPath = originalPath.replace(/\\/g, "/");
          const isSelected = answer === selectedAnswer;

          return (
            <TouchableOpacity
              style={[
                styles.answerBox,
                { backgroundColor: isSelected ? COLORS.Yellow : COLORS.White },
              ]}
              key={index}
              onPress={() => onAnswerSelection(answer)}
            >
              <Image
                source={{ uri: `http://192.168.1.8:4000/${updatedPath}` }}
                style={styles.img}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default ImageQuestion
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
    paddingVertical: SPACING.space_32 * 4
  },
  answerBox: {
    backgroundColor: COLORS.White,
    width: WIDTH * 0.42,
    height: WIDTH * 0.40,
    borderRadius: SPACING.space_10,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: SPACING.space_10,
    marginVertical: SPACING.space_10
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: SPACING.space_10,
    alignSelf: 'center'
  }
})

