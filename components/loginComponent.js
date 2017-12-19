import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputField } from './input';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { style } from '../styles/loginStyleSheet';
export class ContactForm extends Component {

  submit() {
    this.props.onSubmit();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={style.loginForm}>
        <View style={style.loginInput}>
          <Text>Email</Text >
          <Field name="firstName" component={InputField} type="email" />
        </View>
        <View style={style.loginInput}>
          <Text>Password</Text >
          <Field name="password" component={InputField} type="password" />
        </View>
        <View >
          <Button onPress={handleSubmit(this.submit.bind(this))} block info><Text> Login </Text></Button>
        </View>
      </View>
    )
  }
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)
