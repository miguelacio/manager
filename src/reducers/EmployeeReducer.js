import { EMPLOYEES_FETCH_SUCCESS } from '../actions/Types';

const INITIAL_STATE = {};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log(action);
            return state;
            break;
        default:
            return state;
    }
};