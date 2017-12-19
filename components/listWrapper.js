import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Right, Icon, Body } from 'native-base';
export class ItemList extends Component {
  state =
    {
      items: ['Appitizers', 'Fresh Deals', 'Starter', 'Main Menu']
    }
  render() {
    return (
      <List>
        <ListItem itemHeader first>
          <Text>Menu</Text>
        </ListItem>
        {this.state.items.map((item, index) => {
          return (
            <ListItem key={index} onPress={() => { this.props.onItemPress(index) }} style={{ flex: 1, paddingLeft: 8 }} icon>
              <Body>
                <Text>{item}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>)
        })}
      </List >
    );
  }
}
