import {initialState} from '../utils/initial-state';

export const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        loggedIn: true,
        loggedInUserId: action.payload.userId
      };
    default:
      return state;
  }
};