import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { SignedNavigator, UnSignedNavigator } from './router';
const store = configureStore();

export default class App extends React.Component {

  state = {
    isReady: false
  }
  render() {

    return (
      <Provider store={store}>
        {
          this.state.isReady ?
            <UnSignedNavigator /> :
            <Text></Text>
        }

      </Provider>
    )
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf')
    });
    this.setState({ isReady: true });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 3,
  },
  signinContainer: {
    flex: 3,
    justifyContent: 'center'
  },
  forgotContainer: {
    flex: 1,
  }
});
