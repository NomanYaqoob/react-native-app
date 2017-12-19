import React, { Component } from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView, StyleSheet, Image, View, Text } from 'react-native';
import { styles } from '../styles/drawer';

export class DrawerContent extends Component {

  render() {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.drawerImageContainer}>
          <Image style={styles.logoImage} source={require('../assets/images/logo.png')} />
          <Text style={styles.logoHeader}>Food App</Text>
        </View>
        <ScrollView style={styles.listContainer}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...this.props} />
          </SafeAreaView>
        </ScrollView>
      </View>
    )
  }

}

