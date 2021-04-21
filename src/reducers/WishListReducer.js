import * as actions from '../constants/actionTypes';

const initialState = {
    items:(localStorage.getItem(actions.WISHLIST_ITEM) && localStorage.getItem(actions.WISHLIST_ITEM) !== 'undefined')
            ? JSON.parse(localStorage.getItem(actions.WISHLIST_ITEM))
            :[]
}

const removeItem = (items, id) => {
    return items.filter( item => item.id !== id);
}

const WishListReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.ADD_TO_WISHLIST:{
            const {data, id} = action.payload;
            state.items = removeItem(state.items, id);
            const stateData = {...state, items:[...state.items, data]};
            localStorage.setItem(actions.WISHLIST_ITEM, JSON.stringify(stateData.items));
            return stateData;
        }
        case actions.REMOVE_FROM_WISHLIST:{
            const data = {...state, items : removeItem(state.items, action.id)};
            if(data){
                localStorage.setItem(actions.WISHLIST_ITEM, JSON.stringify(data.items));
            }
            else{
                localStorage.removeItem(actions.WISHLIST_ITEM);
            }
            return data;
        } 
        default:
            return state;       
    }
}

export default WishListReducer;