import React ,{useState}from 'react'
import {View,Text,ActivityIndicator} from 'react-native'
import styles from './Sign.style'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Formik } from 'formik';
import { showMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth';

const initialValues = {
    usermail:'',
    password:'',
    repassword: ''
}

const Sign = ({navigation}) => {

    const[loading, setLoading] = useState(false)

    if(loading) {
        return <ActivityIndicator/>
    }

    async function handleFormSubmit(formValues){

        if(formValues.password !== formValues.repassword){
            showMessage({
                message: "Şifreler Eşleşmedi",
                type: 'danger',
              });
            return;
        }

        try {
            setLoading(true)
            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.repassword)
            setLoading(false)
            showMessage({
                message: "User has created",
                type: 'success',
            })
            navigation.navigate('LoginPage')
        } catch (error) {
            setLoading(false)
            showMessage({
                message: error.message,
                type: 'danger',
            })
        }



    }

    function handlePage(){
        navigation.navigate('LoginPage')
    }

    

    return(
            
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
                                values={values.password} 
                                isSecure/>

                            <Input
                                placeholder="şifrenizi tekrar giriniz"
                                onChangeText={handleChange('repassword')}
                                value={values.repassword}
                                isSecure />

                            <Button text="Kayıt Ol" theme='primary' onPress={handleSubmit} loading={false} />

                        </>
                        
                    )
                }
                
                
                </Formik>
                <Button text = "Geri" theme='secondary' onPress={handlePage} loading={false} />

            </View>

     
    )
}

export default Sign