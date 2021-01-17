//For React Navigation
import 'react-native-gesture-handler'; 
//needs to wrap entire app to allow navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//For React native
import React from 'react';
import MainPage from './MainPage/MainPage.js';
import SurveyPage from './SurveyPage/SurveyPage.js';
import RespondentPage from './RespondentPage/RespondentPage.js';

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage}/>
        <Stack.Screen name="RespondentPage" component={RespondentPage}/>
        <Stack.Screen name="SurveyPage" component={SurveyPage} initialParams={{ stringData: undefined }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
