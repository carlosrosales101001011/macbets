import { types } from "../types/types";
// const state = {
//     name: 'Fernando',
//     logged: true
// }


export const authReducer = (state={}, action) =>{

    switch(action.type){
        case types.login:
            return {
                name: action.payload.name,
                logged: true
            }
        case types.logout:
            return{
                logged: false
            }
        default:
            return state;
    }


}