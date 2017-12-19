import React, { Component } from 'react';
import {
  Dimensions,
  Image, View,
  TouchableHighlight
} from 'react-native';

export class ImageField extends Component {

  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    let windowWidth = Dimensions.get('window').width;
    let widthRatio = (windowWidth - this.props.diffWidth) / this.props.originalWidth;
    let newWidth = widthRatio * this.props.originalWidth;
    let newHeight = widthRatio * this.props.originalHeight;
    return (
      <TouchableHighlight onPress={this.props.itemClick}>
        <Image source={this.props.source} style={{ width: newWidth, height: newHeight}} />
      </TouchableHighlight>

    );
  }
}
