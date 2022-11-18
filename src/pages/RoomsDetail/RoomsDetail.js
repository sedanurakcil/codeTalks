import {View, FlatList, Text} from 'react-native'
import React from 'react'
import FloatingButton from '../../components/FloatingButton'
import ContentInputModal from '../../components/modal/ContentInputModal'
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth'
import parseContentData from '../../utils/parseContentData'
import MessagesCard from '../../components/Card/MessagesCard';
import styles from './RoomsDetail.style'


const RoomsDetail=({route})=>{
    const [inputModalVisible , setInputModalVisible] = React.useState(false)
    const [messages, setMessages] = React.useState([])
    const {item}= route.params;

    React.useEffect(() => {
        
        database().ref(`rooms/${item.id}/${item.text}`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            setMessages(parsedData)
            
        })
    }, [])


    function handleInputToggle(){
       setInputModalVisible(!inputModalVisible)
    }

    function handleContentSend(message) {
        handleInputToggle()
        sendContent(message)
    }
    // content send to database 
    async function sendContent(message){
        

        const userMail = auth().currentUser.email
        try {
            const contentObject = {
                message: message,
                username: userMail.split('@')[0],
                date: new Date().toISOString(),
            }
            database().ref(`rooms/${item.id}/${item.text}`).push(contentObject)
            
        } catch (error) {
            showMessage({
                message: error,
                type: "danger",
            });
        }

    }


    
    const renderRoomMessages = ({item}) => <MessagesCard item = {item}/>

    
    return (
       
        <View style = {styles.container}>

            <Text style={styles.room_name}>{item.text} odası kuruldu!</Text>

            

            <FlatList
                data = {messages}
                renderItem = {renderRoomMessages}/>

    
            <FloatingButton icon= "plus" onPress={handleInputToggle}/>

            <ContentInputModal 
                visible = {inputModalVisible} 
                onClose = {handleInputToggle}
                onSend = {handleContentSend}
                placeholder= "Mesajınız..."
                buttonText="Gönder "
           />
            
        </View>

    )
}


export default RoomsDetail;