import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/Types';

const INITIL_STATE = { email: '', password: '' };

export default (state = INITIL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
            break;
            case PASSWORD_CHANGED:
            return {...state, password: action.payload};
            break;
        default:
            return state;
    }
};