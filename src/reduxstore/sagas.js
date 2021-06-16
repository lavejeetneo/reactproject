import {call, takeEvery, put, all} from "redux-saga/effects"
import axios from "axios";

const addCake = (action) => {
    return axios({
        url: process.env.REACT_APP_API_BASE_URL + 'addcake',
        method: "post",
        headers: {
            authtoken: localStorage.token
        },
        data: action.payload || {}
    })
}

export function *AddCakeGenerator(action, props) {
    let result = yield(call(addCake, action))
    if (result.data) {
        yield put({
            type: "ADD_CAKE_SUCCESS"
        })
    } else {
        yield put({
            type: "ADD_CAKE_FAILURE"
        })
    }
}

function *AddCakeSaga() {
    yield takeEvery('ADD_CAKE', AddCakeGenerator)
}
export default function *MainSaga() {
    yield all([AddCakeSaga()])
}