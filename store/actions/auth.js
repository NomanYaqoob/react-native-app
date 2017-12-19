import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT
} from '../constants'

export class AuthActions {

  static login(credentials) {
    return {
      type: REQUEST_LOGIN,
      payload: credentials
    }
  }

  static logout(credentials) {
    return {
      type: REQUEST_LOGOUT
    }
  }
}