import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducers = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducers, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type RootReducerStateType = ReturnType<typeof rootReducers>

