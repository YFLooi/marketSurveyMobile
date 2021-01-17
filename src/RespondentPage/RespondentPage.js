/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect }  from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { globalStyles } from '../globalStyles.js';

//"navigation" declared twice here. One for switching pages (navigation.navigate())
//and the other for setParams
function RespondentPage ({route, navigation, navigation:{ setParams }}) {
  //Destructuring assignment. Means "route.params.stringData"
  const { stringData } = route.params; 
  
  //Clears route.params.stringData
  const clearStringData = () => {
    //Works like setState()!
    setParams({
      //Setting as "" returns ""! Use "undefined" instead
      stringData: route.params.stringData = undefined
    })
  }

  return (
    <React.Fragment>
      <StatusBar 
        /**for the Battery icon bar up top*/
        barStyle="dark-content" 
      /> 
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <View className="navButtons">
            <Button title="MainPage" style={globalStyles.Button} onPress={()=>{navigation.navigate("MainPage");}}/>
            <Button title="SurveyPage" style={globalStyles.Button} onPress={()=>{navigation.navigate("SurveyPage");}}/>
            <Button title="Go back" style={globalStyles.Button} onPress={()=>{navigation.goBack();}}/>
          </View>
          <View>
            <Text>This is the Respondent Page</Text>
            <Button title="Click to go back" onPress={()=>{navigation.goBack();}}/>
          </View>
          <View className="passedData">
              <Text>stringData: {JSON.stringify(stringData)}</Text>
              <Button title="Clear stringData" style={globalStyles.Button} onPress={()=>{clearStringData();}}/>
            </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default RespondentPage;

