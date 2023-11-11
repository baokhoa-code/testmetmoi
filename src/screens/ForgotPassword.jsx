import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
const ForgotPassword = () => {
  return (
      <View style={styles.container}>
          <Octicons style={styles.icon} name="x" size={30} color='#DDE6ED' />
          <View style={styles.view1}>
              <Text style={styles.text1}>Forgot password?</Text>
              <Text style={styles.text2}>Enter your email to receive the link to reset your password</Text>
              <TextInput style={styles.textInput} placeholderTextColor={'#DDE6ED'} placeholder='@email'></TextInput>
          </View>
          <View style={styles.view2}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtButton}>SEND EMAIL</Text>
            </TouchableOpacity>
          </View>
      </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
    },
    view1:{
        flex: 3,
        top: 100,
        alignItems: 'center'
    },
    view2:{
        flex: 3,
        alignItems: 'center'
    },
    text1:{
        fontSize: 35,
        // fontFamily: 'Dosis-Bold',
        marginBottom: 20,
        color: '#DDE6ED',
        textAlign: 'center'
    },
    text2:{
        width: 350,
        textAlign: 'center',
        color: '#CCF3EE',
        // fontFamily: 'Dosis-Medium',
        fontSize: 17,
    },
    icon: {
        left: 20,
        top: 20
    },
    textInput:{
        borderColor: '#CCF3EE',
        borderWidth: 2,
        color: '#DDE6ED',
        width: 350,
        fontSize: 17,
        margin: 5,
        paddingLeft: 10,
        borderRadius: 10,
        top: 20,
    },
    button:{
        backgroundColor: '#93BFCF',
        width: 350,
        height: 45,
        borderRadius: 15,
    },
    txtButton:{
        textAlign: 'center',
        color: '#000000',
        // fontFamily: 'Dosis-Bold',
        fontSize: 18,
        top: 9
    }
})