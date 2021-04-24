import { combineReducers } from 'redux';
import sessionReducer from './sessionReducers';
import WishListReducer from './WishListReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  wishListState:WishListReducer,
  cartState:CartReducer
});

export default rootReducer;
