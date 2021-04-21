import * as actions from '../constants/actionTypes';

export const addToWishList = (data,id) => {
    return {
        type : actions.ADD_TO_WISHLIST,
        payload : {data,id}
    };
};

export const removeFromWishList = id => {
    return{
        type : actions.REMOVE_FROM_WISHLIST,
        id
    }
}