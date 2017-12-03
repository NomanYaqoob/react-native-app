import React, { Component } from 'react';
import { View, Text } from 'react-native';


export class DashboardContainer extends Component {

  static navigationOptions = {
    title: 'Dashboard'
  };

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}