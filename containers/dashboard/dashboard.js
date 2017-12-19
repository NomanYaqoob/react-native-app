import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StartupCard } from '../../components'
import { styles } from '../../styles/global';

export class DashboardContainer extends Component {

  static navigationOptions = {
    title: 'Food Courts'
  };

  state = {
    list: [1, 1, 1, 1, 1, 1, 11, 1,]
  }

  onItemClick(index) {
    this.props.navigation.navigate('Detail', { name: index });
  }

  render() {
    return (
      <View style={{
        flex: 1, flexDirection: 'row'
      }} style={styles.whiteBackground}>
        <ScrollView>
          {this.state.list.map((item, index) => {
            return <StartupCard itemClick={() => { this.onItemClick(index) }} key={index} index={index} />
          })}
        </ScrollView>
      </View>
    );
  }
}