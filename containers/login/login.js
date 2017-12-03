import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export class LoginContainer extends Component {

  static navigationOptions = {
    title: 'Login'
  };

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Login Screen</Text>
        <Button title='Dashboard' onPress={() => { navigate('Dashboard') }} />
      </View>
    );
  }
}