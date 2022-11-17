import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';

// this base for buuton style 
const base_style = StyleSheet.create({
    container:{
        padding:5,
        margin:10,
        backgroundColor:'#4169e1',
        borderRadius:5,
        alignItems:'center',

        
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'white'
    }
});

export default {
    primary:StyleSheet.create({
        ...base_style,

        container:{
            ...base_style.container,
            backgroundColor: colors.wheat
        },
        title:{
            ...base_style.title,
            color:'white'
        },
    }),

    secondary: StyleSheet.create({
        ...base_style,// like parent 
        container:{
            ...base_style.container,
            backgroundColor:'white',
            borderColor:colors.wheat,
            borderWidth:1,
        },
        title:{
            ...base_style.title,
            color:colors.wheat
        }

    })

}