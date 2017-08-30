import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAILED
} from '../actions/Types';

const INITIL_STATE = {
    email: '',
    password: '',
    user: null,
    error: ''
};

export default (state = INITIL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
            break;
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
            break;
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '' };
            break;
        case LOGIN_USER_FAILED:
            return { ...state, error:'Auth failed', password: ''};
            break;
        default:
            return state;
    }
};