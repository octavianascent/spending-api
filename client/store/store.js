import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {AuthReducer} from '../reducers/auth-reducer';
import {initialState} from '../utils/initial-state';

export const initializeStore = (appInitialState = initialState) => {
  return createStore(AuthReducer, appInitialState, composeWithDevTools(applyMiddleware(thunk)));
};