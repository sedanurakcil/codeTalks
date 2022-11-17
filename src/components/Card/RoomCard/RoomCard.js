import { Text, TouchableOpacity,View } from 'react-native'
import React from 'react'
import styles from './RoomCard.style'

const RoomCard = ({room, onSelect})=>{

    return (
        
        <TouchableOpacity onPress = {onSelect} >
            <View style = {styles.container}>
            <Text style = {styles.text}>{room.text}</Text>
            </View>
        </TouchableOpacity>
        
    )

}

export default RoomCard;
