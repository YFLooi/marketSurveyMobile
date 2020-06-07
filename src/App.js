/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainPage from './MainPage/MainPage.js';

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

function App (props) {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <MainPage />
    </ThemeContext.Provider>
  );
};

export default App;
  