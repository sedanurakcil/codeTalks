import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../styles/colors'

export default StyleSheet.create({
    container:{
        
        backgroundColor:'white',
        width:Dimensions.get("window").width * 0.45,
        height :Dimensions.get("window").height/3 ,
        margin:10,
        borderRadius:10,
        borderWidth:2,
        borderColor: "#d6d7d8",
        alignItems:'center',
        justifyContent:'center' 

    },
    text:{
        color: colors.wheat,
        
        position:'relative',
        
    
    
    }

})
