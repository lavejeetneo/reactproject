import axios from "axios"
import { Component, useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {loginmiddleware} from "../reduxstore/middleware"

let Login = (props)=>{
    var [user, setUser] = useState({})
    var [error, setError] = useState()

    let getEmail = (e)=>{
        setUser({
            ...user,
            email:e.target.value
        })
    }

    let getPassword = (e)=>{
        setUser({
            ...user,
            password:e.target.value
        })
    }

    let login = (e)=>{
        e.preventDefault()

        // const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if(!user.email || !user.password) {
            setError("Please fill the details.")
        } else {
            props.dispatch(loginmiddleware(user))
        }
    }

    return (
        <div className="container">
            <div className="mb-3" style={{borderRadius:"10px", marginTop:"24px" , padding:"20px", background:"#82c3d0"}}>
                <h5>Login From</h5>
                <form>
                    <div className="mb-3">
                        <div className="form-group mb-3">
                            <label htmlFor="signupEmail">Email address</label>
                            <input type="email" onChange={getEmail} className="form-control" id="signupEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="signupPassword">Password</label>
                            <input type="password" onChange={getPassword} className="form-control" id="signupPassword" placeholder="Password"/>
                        </div>
                        <button type="submit" onClick={login} className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

// connect adds a prop to login component named as dispatch()
Login = connect(function(state, props){
    if(state.AuthReducer.isloggedin){
        props.history.push("/")
    }
})(Login)
// i passed login to withRouter it return me Login with some addional things
// then i exported modified Login
export default withRouter(Login)