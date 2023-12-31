import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, Alert } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { TopicDetailHeading, CustomAlert } from '../components';
import { TopicContext } from '../context/topicContext';
import { AuthContext } from '../context/authContext';
import { QuestionContext } from '../context/questionContext';
import appConfig from '../../app.config';
import axios from 'axios';
import FillQuestion from './FillQuestion';
import ListeningQuestion from './ListeningQuestion';
import SpeakingQuestion from './SpeakingQuestion';
import MultipleQuestion from './MultipleQuestion';
import { COLORS, FONTSIZE, SPACING } from '../themes/themes';
import ImageQuestion from './ImageQuestion';
import ProgressBar from 'react-native-progress/Bar';

const StudyView = () => {
  const IPV4_ADDRESS = appConfig.extra.IPV4
  const { topic } = useContext(TopicContext);
  const { state } = useContext(AuthContext);
  const id = topic.id;
  const accessToken = state.accessToken;
  const {
    setAnswerChecked,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  } = useContext(QuestionContext);

  const [questionList, setQuestionList] = useState([]);
  const [isCheckButtonEnabled, setIsCheckButtonEnabled] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const currentQuestion = questionList[currentQuestionIndex];
  useEffect(() => {
    const getData = async () => {
      try {
        // console.log(id, accessToken);
        let response = await axios.get(`http://${IPV4_ADDRESS}:4000/api/v1/lesson/topic/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setQuestionList(response.data.unlearnedLessons);
      } catch (error) {
        console.log('Error in getData func', error);
      }
    };

    getData();
  }, []);


  const onPressCheck = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer.isCorrect;
      setIsAnswerCorrect(isCorrect);
      setShowAlert(true);
    }
  };

  const onPressNext = () => {
    try {
      if (currentQuestionIndex < questionList.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswerChecked(false);
        setShowAlert(false);
      }
    } catch (error) {
      console.log('Error in onPressNext func', error);
    }
  };

  const handleAnswerSelection = (answer) => {
    const isCurrentlySelected = selectedAnswer === answer;
    const newSelectedAnswer = isCurrentlySelected ? null : answer;

    setSelectedAnswer(newSelectedAnswer);
    const isAnswerSelected = newSelectedAnswer !== null;

    setIsCheckButtonEnabled(isAnswerSelected);
  };
  const onPressContinue = async () => {
    try {
      const status = isAnswerCorrect ? 'True' : 'False';
      const response = await axios.post(
        `http://${IPV4_ADDRESS}:4000/api/v1/lesson-progress`,
        {
          lessonId: currentQuestion.lesson.id,
          status: status
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      onPressNext();
    } catch (error) {
      console.error('Error creating question progress', error);
    }
  };

  const renderQuestionTypeComponent = () => {
    try {
      if (currentQuestion && currentQuestion.lesson) {
        const type = currentQuestion.lesson.type;
        switch (type) {
          case 'Image':
            return (
              <ImageQuestion
                question={currentQuestion.lesson.question}
                answers={currentQuestion.lesson.answers}
                selectedAnswer={selectedAnswer}
                onAnswerSelection={handleAnswerSelection}
              />
            );
          case 'Multiple':
            return (
              <MultipleQuestion
                question={currentQuestion.lesson.question}
                answers={currentQuestion.lesson.answers}
                selectedAnswer={selectedAnswer}
                onAnswerSelection={handleAnswerSelection}
              />
            );
          case 'Fill':
            return (
              <FillQuestion
                question={currentQuestion.lesson.question}
                answers={currentQuestion.lesson.answers}
                selectedAnswer={selectedAnswer}
                onAnswerSelection={handleAnswerSelection}
              />
            );
          case 'Listening':
            return (
              <ListeningQuestion
                audio={currentQuestion.lesson.attachmentQuestion}
                question={currentQuestion.lesson.question}
                answers={currentQuestion.lesson.answers}
                selectedAnswer={selectedAnswer}
                onAnswerSelection={handleAnswerSelection} />
            );
          case 'Speaking':
            return (
              <SpeakingQuestion
                question={currentQuestion.lesson.question}
                answers={currentQuestion.lesson.answers}
                selectedAnswer={selectedAnswer}
                onAnswerSelection={handleAnswerSelection}
              />
            );
          default:
            return <Text style={{ alignSelf: 'center', color: COLORS.Black, fontSize: FONTSIZE.size_18 }}>Loading...</Text>;
        }
      } else {
        return <Text style={{ alignSelf: 'center', color: COLORS.Black, fontSize: FONTSIZE.size_18 }}>Loading...</Text>;
      }
    } catch (error) {
      console.log('Error in renderQuestionTypeComponent func', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopicDetailHeading icon={'caret-back'} />
      <View style={styles.contentContainer}>
        {renderQuestionTypeComponent()}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.checkButton,
            {
              backgroundColor: isCheckButtonEnabled ? COLORS.Yellow1 : 'gray',
            },
          ]}
          onPress={onPressCheck}
          disabled={!isCheckButtonEnabled}
        >
          <Text style={styles.textButton}>Check</Text>
        </TouchableOpacity>
      </View>
      <CustomAlert
        isVisible={showAlert}
        isCorrect={isAnswerCorrect}
        onNextQuestion={onPressContinue}
      />

    </SafeAreaView>
  );
};

export default StudyView;
const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    padding: 5,
  },
  progress: {
    width: 250,
    height: 10,
    borderRadius: 20,
  },
  txt: {
    fontSize: 25,
    color: 'black',
  },
  contentContainer: {
    width: WIDTH,

  },
  buttonContainer: {
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: SPACING.space_24,
    // left: 0,
    // right: 0,
  },
  checkButton: {
    height: WIDTH * 0.1,
    width: WIDTH * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SPACING.space_15,
    marginVertical: SPACING.space_20 * 2
  },
  textButton: {
    fontSize: FONTSIZE.size_20,
    textTransform: 'uppercase',
    color: COLORS.White,
    fontWeight: 'bold'
  }
});
