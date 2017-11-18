import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';


const _nullState = {};
export default (state = _nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state);
      newState.currentUser = action.user;
      return newState;
    default:
      return state;
  }
};
