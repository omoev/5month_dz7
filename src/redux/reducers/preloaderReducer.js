import { types } from "../types";

const initialState = {
    preloader: false
}

export default function preloaderReducer(state = initialState, action) {
    switch (action.type) {
        case types.PRELOADER_ON:
            return {...state, preloader: true}
        case types.PRELOADER_OFF:
            return {...state, preloader: false}
        default: return state
    }
}