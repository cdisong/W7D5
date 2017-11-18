import * as APIUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => dispatch => (
  APIUtil.logIn(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);

const nullUser = { id: -1, username: '' };

export const logout = () => dispatch => (
  APIUtil.logOut()
    .then(() => dispatch(receiveCurrentUser(nullUser)))
);
