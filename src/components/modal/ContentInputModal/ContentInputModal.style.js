import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
         padding:15,
        margin:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height: Dimensions.get('window').height/3,
        marginHorizontal:10

    },
    modal:{
        justifyContent:'flex-end',
        margin:0
    },
    input_container:{
        flex:1
    }

})