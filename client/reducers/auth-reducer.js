import {initialState} from '../utils/initial-state';

export const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        token: action.payload.token,
        loggedInUserId: action.payload.userId
      };
    default:
      return state;
  }
};