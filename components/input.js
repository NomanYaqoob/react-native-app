import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Input, Item } from 'native-base';
import { styles } from '../styles/global';

export class InputField extends Component {


  render() {
    const { input, type, ...inputProps } = this.props;
    return (
      <View>
        <Item rounded style={styles.roundedInput}>
          <Input
            secureTextEntry={type === 'password'}
            type={type}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
            {...inputProps}
          />
        </Item>
      </View>
    )
  }
} 