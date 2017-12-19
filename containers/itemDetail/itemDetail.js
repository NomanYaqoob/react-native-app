import React, { Component } from 'react';
import { Card, CardItem, Body, Button, Icon } from 'native-base';
import { ImageField, ItemList } from '../../components';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../../styles/global';

export class ItemDetailContainer extends Component {

  static navigationOptions = {
    title: `What's in:  Restaurent !`
  }

  onCategorySelect(index) {
    this.props.navigation.navigate('Menu');
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={styles.whiteBackground}>
        <View style={{ flex: 1 }} >
          <View style={{ flex: 2 }}>
            <ImageField
              originalWidth={950}
              originalHeight={555}
              diffWidth={0}
              source={require('../../assets/images/pizza.jpg')} />
          </View>
          <View>
            <ItemList onItemPress={this.onCategorySelect.bind(this)} />
          </View>
        </View>
      </ScrollView>
    );
  }
}