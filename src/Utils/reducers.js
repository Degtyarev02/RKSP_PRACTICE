import { UPDATE_AGREEMENT } from './action';

const initialState = {
    agreement: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_AGREEMENT:
            return {
                ...state,
                agreement: action.agreement,
            };
        default:
            return state;
    }
};

export default rootReducer;