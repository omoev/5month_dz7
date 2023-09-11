
import { types } from '../types';

const initialState = {
    users: [],
    error: null,
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS_SUCCESS:
            return { ...state, users: action.payload, error: null };
        case types.GET_USERS_FAILURE:
            return { ...state, users: [], error: action.payload };
        default:
            return state;
    }
}
