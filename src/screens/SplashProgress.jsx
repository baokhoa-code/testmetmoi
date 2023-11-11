import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const SplashProgress = () => {
  return (
    <View style={styles.container}>
      <LottieView style={styles.animation} source={require('../../assets/logo/cat-loader.json')} autoPlay loop />
      <LottieView style={styles.loading} source={require('../../assets/logo/loading.json')} autoPlay loop />
    </View>
  )
}

export default SplashProgress

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    width: 250,
    height: 250
  },
  text: {
    color: '#ffffff'
  },
  loading: {
    top: -10,
    width: 200,
    height: 100,
  }
})