import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Accessory, Avatar } from 'react-native-elements';
import { image } from '../../constants';

const UserAvatar = () => {
    return (
        <View style={styles.container}>
            <Avatar size={170} source={image.avatar}>
                <Avatar.Accessory {...Accessory} />
            </Avatar>
        </View>
    )
}

export default UserAvatar

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    }
})