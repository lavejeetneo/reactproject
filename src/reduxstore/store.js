import { createStore, combineReducers, applyMiddleware } from "redux"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"
import AdminReducer from "./AdminReducer"
import thunk from "redux-thunk"
import createSaga from "redux-saga"
import MainSaga from "./sagas"

let middle = store => next => action => {
    let currentDate = new Date()
    console.log(JSON.stringify(action.type) , 'action dispatched at: ', currentDate);
    next(action)
}

let reducers = combineReducers({AuthReducer, CartReducer, AdminReducer})

let sagaMiddleware = createSaga()

let store = createStore(reducers, applyMiddleware(middle, thunk, sagaMiddleware))

sagaMiddleware.run(MainSaga)

export default store