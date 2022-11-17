import {StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:50,
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.wheat,
        borderWidth:1,
        borderColor:'darkorange'
    }
})