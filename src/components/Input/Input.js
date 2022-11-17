import { TextInput, View,} from 'react-native'
import React from 'react'


import styles from './Input.style'

const Input =({placeholder , onChangeText,value, isSecure})=>{
    return(
        <View style={styles.container}> 
            <TextInput style = {styles.input}
                 autoCapitalize='none'
                 placeholder = {placeholder} 
                 onChangeText={onChangeText}
                 value={value}
                 secureTextEntry={isSecure}
                 placeholderTextColor='white'
            
              />
            
            <View style = {styles.bar}></View>
            
            
        </View>
    )
}
export default Input;
