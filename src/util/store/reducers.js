import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import woundReducer from './wound-reducers';

const rootReducer = combineReducers({
  wound: woundReducer,
  user: userReducer,

});

export default rootReducer;