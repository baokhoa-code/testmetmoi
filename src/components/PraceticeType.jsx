import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { typePracticeData } from '../../Data';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const PraceticeType = ({ navigateToQuizScreen }) => {
    return (
        <View>
            {typePracticeData.map((type) => (
                <TouchableOpacity key={type.id} onPress={navigateToQuizScreen} style={styles.container}>
                    <View style={styles.icon}>
                        <Image source={type.icon} style={{ width: 35, height: 35 }} />
                    </View>
                    <Text style={styles.txt}>{type.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default PraceticeType;

const styles = StyleSheet.create({
    container: {
        width: (WIDTH - 50),
        height: 80,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#222',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.0,
        elevation: 1,
        marginBottom: 10,
    },
    icon: {
        backgroundColor: '#F9E0BB',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        marginRight: 15,
    },
    txt: {
        color: 'black',
        fontSize: 20,
        // fontFamily: 'Montserrat-SemiBold'
    },
});
