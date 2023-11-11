import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TopicDetailHeading, AnnouceBox } from '../components/'
const AnnoucePage = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <TopicDetailHeading icon={'caret-back'} />
      <AnnouceBox />
    </SafeAreaView>
  );
}

export default AnnoucePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2E9E9',
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginTop: 10,
  }
})