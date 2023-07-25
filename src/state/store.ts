import {combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";

const rootReducer = combineReducers({
    count: countReducer
})

export const store = createStore(rootReducer)

export type TAppRootState = ReturnType<typeof rootReducer>