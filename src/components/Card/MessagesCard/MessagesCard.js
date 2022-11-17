import { View, Text } from 'react-native'
import React from 'react'
import styles from './MessageCard.style'


const MessagesCard = ({item})=>{

    
    return( 
        <View style = {styles.container}>

            <View style ={styles.info_container}>
                <Text style={styles.username} >{item.username}</Text>
                <Text>{item.date}</Text>
            </View>

            <View style = {styles.message_container}>
                <Text style ={styles.message}>{item.message}</Text>
            </View>

        </View>
    )
}

export default MessagesCard;
