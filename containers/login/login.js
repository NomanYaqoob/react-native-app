import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { style } from '../../styles/loginStyleSheet';
import { ContactForm } from '../../components/loginComponent';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation';

export class LoginContainer extends Component {

  static navigationOptions = {
    header: null
  };



  onSubmit() {

    const navigationAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' })
      ]
    });
    this.props.navigation.dispatch(navigationAction);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={style.loginContainer}>
        <View style={style.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
        <View style={style.logoFormContainer}>
          <ContactForm onSubmit={this.onSubmit.bind(this)} />
        </View>
        <View style={style.loginOtherContainer}>
          <Text>Forgot your password ?</Text>
        </View>
      </View>
    );
  }
}