import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopicDetailHeading, Input, UIButton } from '../components'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const ResetPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <TopicDetailHeading title='Reset password' />
      </View>
      <View style={styles.content}>
        <Input placeholder='Enter your new password' widthInput={WIDTH - 100} heightInput={50} />
        <Input placeholder='Re-Enter your new password' widthInput={WIDTH - 100} heightInput={50} />
      </View>
      <View style={styles.bottom}>
        <UIButton title='UPdate' backgroundColor='#3AA6B9' />
      </View>
    </SafeAreaView>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#D2E9E9',
  },
  heading: {
  },
  content: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    alignItems: 'center',
  }
})