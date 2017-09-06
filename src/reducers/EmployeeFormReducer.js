import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/Types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //El action.payload se verá como {prop: 'name', value: 'jane'}
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
            break;
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
            break;
        default:
            return state;
    }
};