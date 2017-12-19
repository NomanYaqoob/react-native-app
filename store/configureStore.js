import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers';

export default function configureStore() {
  let store = createStore(AppReducer, applyMiddleware(thunk));
  return store;
}