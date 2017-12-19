import {
  LOGIN_SUCCESS,
  REQUEST_LOGIN,
  LOGOUT_SUCCESS
} from '../constants';

const initialState = {
  isLoading: true,
  error: null,
  user: null
};

export default function AuthReducer(state = initialState, action) {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      }
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }

}