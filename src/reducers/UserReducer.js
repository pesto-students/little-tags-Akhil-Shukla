import * as actions from '../constants/actionTypes';

const initialState = {
    items:localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : Array,
}

const removeItem = (Array, id) => {
    return Array.filter( item => item.id !== id);
    
}




const UserReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.ADD_ADDRESS:{
            const {data, id} = action.payload;
            console.log(id)
            console.log(typeof state.items)
            // state.items = removeItem(state.items, id);
            
            console.log(typeof state.items)
            const stateData = {...state, items:[...state.items, data]};
            localStorage.setItem(actions.ADDRESS, JSON.stringify(stateData.items));
            
            return stateData;
        }
        case actions.REMOVE_ADDRESS:{
            const data = {...state, items : removeItem(state.items, action.id)};
            if(data){
                localStorage.setItem(actions.ADDRESS, JSON.stringify(data.items));
            }
            else{
                localStorage.removeItem(actions.ADDRESS);
            }
            return data;
        } 
        default:
            return state;       
    }
}

export default UserReducer;


























// import * as actions from '../constants/actionTypes';

// const initialStateForUser = {
//     userData:(localStorage.getItem(actions.ADDRESS) && localStorage.getItem(actions.ADDRESS) !== 'undefined')
//     ? JSON.parse(localStorage.getItem(actions.ADDRESS))
//     :[]
//   };


// //   const initialStateForUser = {
// //     userData: {
// //         address:(localStorage.getItem(actions.ADDRESS) && localStorage.getItem(actions.ADDRESS) !== 'undefined')
// //         ? JSON.parse(localStorage.getItem(actions.ADDRESS))
// //           :[]
// //     }
// //   };

// const removeItem = (array, action) =>
// array.filter(item => item._id !== action.payload.id);

// const UserReducer = (state = initialStateForUser, action) => {
//     switch (action.type) {
//       case actions.SET_USER:
//         return {
//           ...state,
//           userData: action.data,
//         };
//       case actions.ADD_ADDRESS: {
//         const {data} = action;
        
//         const stateData = {...state, userData:[...state.userData, data]};
        
//         localStorage.setItem(actions.ADDRESS, JSON.stringify(stateData));
        
//         console.log(stateData)


        
//         return state;
//       }
//       case actions.REMOVE_ADDRESS: {
//         // const temp = state.userData.address.filter(u => {
//         //   return u.id !== action.id;
//         // });
//         // state.userData.address = temp;
//         // localStorage.removeItem(actions.ADDRESS)
//         // return state;
//         // const data = {...state, items : removeItem(state.userData.address, action.id)};
//         //     if(data){
//         //         localStorage.setItem(actions.ADDRESS, JSON.stringify(data.items));
//         //     }
//         //     else{
//         //         localStorage.removeItem(actions.ADDRESS);
//         //     }
//         //     return data;


//       }
//       default:
//         return { ...state };
//     }
//   };

// export default UserReducer;