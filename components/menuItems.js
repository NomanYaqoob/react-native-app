import React, { Component } from 'react';
import { Right, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export class MenuWithThumb extends Component {

  /** PROPS:
   * menuHeading : string
   * menu: {name,url,price,detail}
   */

  render() {
    return (
      <List>
        <ListItem itemHeader first>
          <Text>{this.props.menuHeading}</Text>
        </ListItem>
        {this.props.menu.map((item, index) => {
          return (
            <ListItem key={index}>
              <Thumbnail square size={80} source={{ uri: item.url }} />
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.detail}</Text>
              </Body>
              <Right>
                <Text>Rs. {item.price}</Text>
              </Right>
            </ListItem>
          )
        })}
      </List>
    );
  }
}
