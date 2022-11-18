
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';
import FlashMessage from "react-native-flash-message";
import Rooms from './pages/Rooms';
import RoomsDetail from './pages/RoomsDetail'
import colors from './styles/colors';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();


const App = () => {

  const [userSession, setUserSession] = React.useState(false)

  // check user control
  React.useEffect(()=>{

    auth().onAuthStateChanged((user)=>{
      setUserSession(!!user)
    })

  },[])

  const AuthStack = () =>{
    return(

      <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="SignPage" component={Sign}  />
      <Stack.Screen name="LoginPage" component={Login} />
      </Stack.Navigator>   
    )
  }

  return(

    <NavigationContainer>
      
      <Stack.Navigator >
      {!userSession ? (<Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown : false}}/>)
      :(
        <>
        <Stack.Screen 
          name='RoomsPage'
          component={Rooms} 
          options=
              {{
              title:'Odalar' ,
              headerTintColor : colors.wheat,
              headerTitleAlign:'center',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.wheat}
                  onPress={() => auth().signOut()}
                />
              ),
             }}/>
        <Stack.Screen 
            name="RoomsDetail" 
            component={RoomsDetail}
            options={({route}) => ({
              title: route.params.item.text,
              headerTitleAlign: 'center',
              headerTintColor: colors.wheat,
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.wheat}
                  onPress={() => auth().signOut()}
                />
              ),
            })}
             />
        </>
      )}
      
      
      </Stack.Navigator>
      
      <FlashMessage position='top' /> 

    </NavigationContainer>


  )


}
  
export default App;
  
