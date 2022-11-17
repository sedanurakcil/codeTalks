import {SafeAreaView, FlatList, View,
 ActivityIndicator} from 'react-native'
import React from 'react'
import styles from './Rooms.style'
import FloatingButton from '../../components/FloatingButton'
import ContentInputModal from '../../components/modal/ContentInputModal'
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth'
import parseContentData from '../../utils/parseContentData'
import RoomCard from '../../components/Card/RoomCard'




const Rooms = ({navigation})=>{
    const [inputModalVisible , setInputModalVisible] = React.useState(false)

    const [rooms, setRooms] = React.useState([])

    const [loading, setLoading] =React.useState(false)

   

    React.useEffect( () => {
        console.log("useeffect ")
        const reference = database().ref('rooms/')
        reference.on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {})
            console.log(parsedData)
            setRooms(parsedData)
           
        }
        
        )


    }, [])

    if(loading) {
        return <ActivityIndicator/>
    }



    function handleInputToggle(){
       setInputModalVisible(!inputModalVisible)
    }

    function handleContentSend(content) {
        handleInputToggle()
        sendContent(content)
    }
    // content send to database 
     async function sendContent(content){
        console.log('database gönderme işlemleri başlıyor.')
        setLoading(true)
        const userMail = auth().currentUser.email
        const newRoom = rooms.findIndex((room) => room.text.toLowerCase() === content.toLowerCase())
        if (newRoom > 0) {
            showMessage({
                message: "Bu oda daha önce oluşturuldu.",
                type: "danger"
            })
            return
        }
        try {
            const contentObject = {
                text: content,
                username: userMail.split('@')[0],
                date: new Date().toISOString(),
            }
           
            await  database().ref('rooms/').push(contentObject)
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
            showMessage({
                message: error,
                type: "danger",
            });
        }

    }
    function handleDetailPage(item){
        navigation.navigate('RoomsDetail', item)

    }
    const  renderRooms = ({item}) => <RoomCard room = {item} onSelect={()=>handleDetailPage({item})}/>

    return(
       
        <View style = {styles.container}>

            <FlatList
                numColumns={2}
                data ={rooms}
                renderItem = {renderRooms}/>
            
            <FloatingButton icon= "plus" onPress={handleInputToggle}/>

            <ContentInputModal 
                visible = {inputModalVisible} 
                onClose = {handleInputToggle}
                onSend = {handleContentSend}
                placeholder= "Oda adı..."
                buttonText="Ekle"
           />
           
            
        </View>


    )
}

export default Rooms