import { Dimensions, StyleSheet } from 'react-native'
export default StyleSheet.create({
    
    container:{
        padding:10,
        margin:10,
        borderRadius:17,
        backgroundColor:'white',
        
    },
    info_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },

      username: {
        color: 'black',
        fontSize:20,
        flex:1
      },

      message_container: {
        paddingTop:10

      },
    
      message: {
            fontWeight: '400',
            fontSize: 20,
            color: 'black',
          },
        

    
})