import { combineReducers } from 'redux';
import sessionReducer from './sessionReducers';
import WishListReducer from './WishListReducer';
import CartReducer from './CartReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  wishListState:WishListReducer,
  cartState:CartReducer,
  userState:UserReducer
});

export default rootReducer;
