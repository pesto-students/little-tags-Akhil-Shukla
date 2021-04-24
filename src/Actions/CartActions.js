import * as actions from '../constants/actionTypes';

export const addToCart = (data,id) => {
    return {
        type : actions.ADD_TO_BAG,
        payload : {data,id}
    };
};

export const removeFromCart = id => {
    return{
        type : actions.REMOVE_FROM_BAG,
        id
    }
}