import React, { Component } from 'react';
import { styles } from '../../styles/global';
import { View, Text } from 'react-native';
export class ExtraContainer extends Component {

  static navigationOptions = {
    title: 'Practice Screen'
  }

  render() {
    return (
      <View>
        <Text>Extra Screen</Text>
      </View>
    )
  }
}