import { combineReducers } from 'redux';
import sessionReducer from './sessionReducers';
import WishListReducer from './WishListReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  wishListState:WishListReducer
});

export default rootReducer;
