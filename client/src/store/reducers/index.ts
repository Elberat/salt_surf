import { useReducer } from "react";
import {combineReducers} from "redux";
import {itemReducer} from "./itemReducer";
import {lookbookReducer} from './lookbookReducer'
import {oneItemReducer} from './oneItemReducer'
import authReducer from './userReduser'


export const rootReducer = combineReducers({
    item: itemReducer,
    gallery: lookbookReducer,
    oneItem: oneItemReducer,
    user: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>
