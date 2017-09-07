import { EMPLOYEES_FETCH_SUCCESS } from '../actions/Types';

const INITIAL_STATE = {};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            //return {...state, [id]: action.payload }; si quisieramos que regresara un solo término por el ID
            return action.payload;
            break;
        default:
            return state;
    }
};