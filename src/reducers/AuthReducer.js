import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from '../actions/Types';

const INITIL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
            break;
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
            break;
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIL_STATE,user: action.payload };
            break;
        case LOGIN_USER_FAILED:
            return { ...state, error: 'Auth failed', password: '', loading: false };
            break;
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
            break;
        default:
            return state;
    }
};