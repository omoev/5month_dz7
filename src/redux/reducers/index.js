import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";
import usersReducer from './usersReducer';


export const rootReducer = combineReducers({
    preloaderReducer,
    usersReducer
})