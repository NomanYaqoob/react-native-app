import React, { Component } from 'react';
import { Image } from 'react-native';
import { styles } from '../styles/card';
import StarRating from 'react-native-star-rating';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import { ImageField } from '../components/imageField';
export class StartupCard extends Component {


  state = {
    cardStyle: {
      color: '#000000',
    }
  }

  markFavourite() {
    if (this.state.cardStyle.color === '#000000') {
      this.setState({
        cardStyle: {
          color: '#ED4A6A'
        }
      });
    } else {
      this.setState({
        cardStyle: {
          color: '#000000'
        }
      });
    }
  }

  render() {
    return (
      <Card style={styles.cardContainer}>
        <CardItem style={styles.cardHeaderContainer} >
          <Left style={{ flex: 3 }}>
            <Thumbnail source={require('../assets/images/thumbnail.png')} />
            <Body>
              <Text>Restaurent Name</Text>
              <Text note>Italain, Pakistani Desi</Text>
            </Body>
          </Left>
          <Right style={styles.headerFavouriteContainer}>
            <Icon onPress={() => { this.markFavourite() }} name="heart" style={{ fontSize: 25, ...this.state.cardStyle }} />
          </Right>
        </CardItem>
        <CardItem >
          <Body>
            <ImageField itemClick={this.props.itemClick}
              originalWidth={950}
              originalHeight={555}
              diffWidth={30}
              source={require('../assets/images/pizza.jpg')} />
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Reviews: </Text>
            <StarRating starSize={25}
              disabled={true}
              maxStars={5}
              rating={4.5}
            />
          </Left>
        </CardItem>
      </Card>
    );
  }
}