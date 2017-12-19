import React, { Component } from 'react';
import { MenuWithThumb } from '../../components';
import { ScrollView } from 'react-native';
import { styles } from '../../styles/global';

export class MenuContainer extends Component {


  static navigationOptions = {
    title: `Menu List`
  }
  state = {
    menuItems: []
  }

  componentWillMount() {
    this.setState({
      menuItems: [
        {
          name: 'B.B.q Pizza',
          price: '1200/=',
          url: 'https://www.thecountrycook.net/wp-content/uploads/2012/04/BBQ-Chicken-Pizza-thecountrycook.jpg',
          detail: 'BBQ Chicken Pizza - The Country Cook'
        },
        {
          name: 'Pineapple Fajita Pizza',
          price: '1800/=',
          url: 'https://www.santamariaworld.com//globalassets/uk/recipes/pineapple_fajita_pizza.jpg?id=325',
          detail: 'Pineapple Fajita Pizza | Santa Maria'
        },
        {
          name: 'B.B.q Pizza',
          price: '1200/=',
          url: 'https://www.thecountrycook.net/wp-content/uploads/2012/04/BBQ-Chicken-Pizza-thecountrycook.jpg',
          detail: 'BBQ Chicken Pizza - The Country Cook'
        }
      ]
    });
  }

  render() {
    return (
      <ScrollView style={styles.whiteBackground}>
        <MenuWithThumb menu={this.state.menuItems} menuHeading={'Main Menu'} />
      </ScrollView>
    );
  }
}