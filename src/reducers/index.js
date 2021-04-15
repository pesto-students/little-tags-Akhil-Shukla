import { combineReducers } from 'redux';
import sessionReducer from './sessionReducers';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
});

export default rootReducer;
