
import React from 'react'
import { TextInput,View } from 'react-native'
import Modal from 'react-native-modal'
import styles  from './ContentInputModal.style'
import Button from '../../Button'


const ContentInputModal=({visible, onClose,onSend,placeholder,buttonText})=>{

    const [text,setText] = React.useState(null)

    function handleSend(){
        if(!text){
           
            console.log('txt gelmiyo')
            return;
        }
        onSend(text)
        setText(null)
        
        
    }


    return(
            <Modal 
                style = {styles.modal}
                swipeDirection = 'down'
                isVisible = {visible}
                onSwipeComplete={onClose}
                onBackdropPress = {onClose}
                onBackButtonPress = {onClose}
                >
                <View style = {styles.container} >
                    <View style = {styles.input_container}>
                    <TextInput 
                        placeholder= {placeholder}
                        onChangeText={setText}
                        multiline
                    />
                   </View>
                    <Button text= {buttonText} onPress = {handleSend}/>
                </View>
             </Modal>
    )
}

export default ContentInputModal;