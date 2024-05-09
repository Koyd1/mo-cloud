import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";

const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer
})

// Заменяем applyMiddleware(thunk) на applyMiddleware(thunk())
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

