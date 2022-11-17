import React,{useState} from 'react'
import { View,Text,ActivityIndicator} from 'react-native'
import styles from './Login.style'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Formik } from 'formik';
import { showMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth';

const initialValues = {
    usermail:'',
    password:'',
   
}

const Login = ({navigation}) => {

    const [loading, setLoading] = useState(false)

    if(loading) {
        return <ActivityIndicator/>
    }

    async function handleFormSubmit(formValues){

        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            setLoading(false)
            showMessage({
                message: "Login success",
                type: 'success',
            })
            navigation.navigate('RoomsPage')
        } catch (error) {
            setLoading(false)
            showMessage({
                message: error.message,
                type: 'danger',
            })
        }



    }

    function handlePage(){
        
        navigation.navigate('SignPage')
    }

    

    return (
         
                <View style = {styles.container}>
                    <Text style = {styles.header}>codetalks</Text>
                    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
                
                        {({ handleChange, handleSubmit, values }) => 
                            (
                        <>
                            <Input
                                placeholder="e-postanızı giriniz.." 
                                onChangeText={handleChange('usermail')}
                                value={values.usermail} />
                            <Input
                                placeholder="şifrenizi giriniz.."
                                onChangeText={handleChange('password')}
                                values={values.password} />

                            

                            <Button text="Giriş Yap" theme="primary" onPress={handleSubmit} />

                        </>

                    )
                }
                
                
                </Formik>
                <Button text = "Kayıt Ol" theme="secondary" onPress={handlePage}/>

            </View>

     
    )
}

export default Login