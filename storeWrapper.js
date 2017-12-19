import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { SignedNavigator } from './router';

const store = configureStore();

export class Wrapper extends Component {

  render() {
    return (
      <Provider store={store}>
        <SignedNavigator />
      </Provider>
    )

  }
}