/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
} from 'react-native';
import { styles } from './MainPageStyles.js';
import { globalStyles } from '../globalStyles.js';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function MainPage ({route, navigation}) {
  
  return (
    <React.Fragment>
      <StatusBar 
        /**for the Battery icon bar up top*/
        barStyle="dark-content" 
      /> 
      <SafeAreaView>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
          <View style={styles.body}>
            <View className="navButtons" style={{width:"100%", minHeight:250, padding:10, display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
              <Button title="MainPage" onPress={()=>{navigation.navigate("MainPage");}}/>
              <Button 
                title="SurveyPage" 
                color="#266716" 
                onPress={()=>{navigation.navigate(
                  "SurveyPage"
                );}}
              />
              <Button title="Force reload MainPage"  onPress={()=>{navigation.push("MainPage");}}/>
              <Button 
                title="Pass data then show" 
                style={globalStyles.Button} 
                onPress={()=>{navigation.navigate(
                  "SurveyPage", 
                  { stringData: "This is from MainPage.js" }
                );}}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                  <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
              </Text>
          </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default MainPage;

