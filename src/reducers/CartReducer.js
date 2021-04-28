import * as actions from '../constants/actionTypes';

const initialState = {
    items:(localStorage.getItem(actions.CART_ITEM) && localStorage.getItem(actions.CART_ITEM) !== 'undefined')
            ? JSON.parse(localStorage.getItem(actions.CART_ITEM))
            :[]
}

const removeItem = (items, id) => {
    return items.filter( item => item.id !== id);
}

const CartReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.ADD_TO_BAG:{
            const {data, id} = action.payload;
            console.log(typeof state.items)
            state.items = removeItem(state.items, id);
            
            const stateData = {...state, items:[...state.items, data]};
            localStorage.setItem(actions.CART_ITEM, JSON.stringify(stateData.items));
            return stateData;
        }
        case actions.REMOVE_FROM_BAG:{
            const data = {...state, items : removeItem(state.items, action.id)};
            if(data){
                localStorage.setItem(actions.CART_ITEM, JSON.stringify(data.items));
            }
            else{
                localStorage.removeItem(actions.CART_ITEM);
            }
            return data;
        } 
        default:
            return state;       
    }
}

export default CartReducer;