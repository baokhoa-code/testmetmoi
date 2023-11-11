import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Dimensions, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import appConfig from '../../app.config';
import { UIButton, OptionsLogin, TopicDetailHeading, Input } from '../components';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { image } from '../../constants'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, FONTSIZE } from '../themes/themes';


const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const Login = () => {
    const navigation = useNavigation()

    const authContext = useContext(AuthContext)
    const state = authContext.state
    const setState = authContext.setState
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const IPV4_ADDRESS = appConfig.extra.IPV4

    const handleLogin = async () => {
        try {
            if (!username || !password) {
                Alert.alert('Please enter all fields')
                return
            }
            const { data } = await axios.post(`http://${IPV4_ADDRESS}:4000/api/v1/auth/signin`, {
                username,
                password
            })
            setState(data)
            console.log(data)
            await AsyncStorage.setItem('@auth', JSON.stringify(data))
            navigation.navigate('Tab')
        } catch (error) {
            alert(error.response.data.message)
            console.log(error)
        }
    }
    const getData = async () => {
        let data = await AsyncStorage.getItem('@auth')
        // console.log('data: ', data)
    }
    getData()
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <TopicDetailHeading icon={'caret-back'} />
                    <LottieView
                        style={{
                            width: 250,
                            height: 250,
                            alignSelf: 'center'
                        }}
                        source={require('../../assets/logo/Graduation.json')}
                        autoPlay
                        loop
                    />

                </View>
                <View style={styles.content}>
                    <TextInput
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor={COLORS.LightBlack}
                    />
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        placeholderTextColor={COLORS.LightBlack}

                    />
                    <UIButton
                        title='Login'
                        backgroundColor={COLORS.Blue}
                        textColor='white' size={18}
                        event={handleLogin}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        height: HEIGHT,
        width: WIDTH,
        backgroundColor: '#F0EEED',
    },
    header: {
        height: (HEIGHT / 3),
        width: WIDTH,
    },
    content: {
        alignItems: 'center',
        width: WIDTH,
        height: (HEIGHT / 4),
        width: WIDTH,
        justifyContent: 'flex-start',
    },
    input: {
        height: 50,
        width: 300,
        margin: 5,
        color: COLORS.Black,
        backgroundColor: '#D0D4CA',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: FONTSIZE.size_16,
        borderRadius: 10,
        shadowColor: '#444',
        shadowOffset: {
            height: 1, width: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
});
