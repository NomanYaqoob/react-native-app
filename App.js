import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import RootApp from './router';

export default class App extends React.Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <View style={[styles.boxContainer, styles.logoContainer]} >
    //       <Image source={require('./assets/images/logo.png')} />
    //     </View>
    //     <View style={[styles.boxContainer, styles.signinContainer]}>
    //       <Button title="Sign in" onPress={() => { navigate('Login') }} />
    //     </View>
    //     <View style={[styles.boxContainer, styles.forgotContainer]}>
    //       <Text>Forgot Password ? </Text>
    //     </View>
    //   </View >
    // );
    return (
      <RootApp />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
