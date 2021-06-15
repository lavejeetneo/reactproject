import { findAllByDisplayValue } from "@testing-library/react"

let AuthReducer = (
    state={
        isloggedin: localStorage.token?true:false,
        username: localStorage.getItem('userData') ? (JSON.parse(localStorage.getItem('userData'))).name : undefined,
        token: localStorage.token,
        isloading: false,
        isAdmin: false
    },
    action
)=>{
    switch(action.type) {
        case "LOGIN_STARTED" : {
            state = {...state}
            state["token"] = action.payload?.token
        }
        case "LOGIN_SUCCESS" :{
            state = {...state}
            state["token"] = action.payload?.token
            state["isloading"] = true
            state["isloggedin"] = true
            state["isAdmin"] = false
            state["username"] = action.payload?.username
            return state
        }
        case "ADMIN_LOGIN_SUCCESS" :{
            state = {...state}
            state["token"] = action.payload?.token
            state["isloading"] = true
            state["isloggedin"] = true
            state["isAdmin"] = true
            state["username"] = action.payload?.username
            return state
        }
        case "LOGIN_FAIL" :{
            state = {...state}
            state["isloading"] = false
            return state
        }
        case"LOGOUT" :{
            state = {...state}
            state["token"] = localStorage.clear()
            state["isloggedin"] = false
            state["username"] = undefined
            state["isAdmin"] = false
            return state
        }
        default : return state
    }
}

export default AuthReducer