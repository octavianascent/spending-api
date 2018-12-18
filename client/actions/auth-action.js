import Router from 'next/router';
import jsCookie from 'js-cookie';

const setUser = (user) => {
  return {
    type: 'AUTH_USER',
    payload: user
  }
};

export const loginUser = (user) => {
  return async dispatch => {
    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: user
      });

      const loggedInUser = await res.json();

      jsCookie.set('token', loggedInUser.token);

      dispatch(setUser(loggedInUser));

      Router.push('/all-spending');

    }
    catch(err) {

    }
  };
};