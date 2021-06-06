import axios from "axios"
import { Component, useState } from "react"
import { withRouter } from "react-router-dom"

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
        if(!user.email || !user.password) {
            setError("Please fill the details.")
        } else {
            let apiurl = "https://apibyashu.herokuapp.com/api/login"
            axios({
                url:apiurl,
                method:"post",
                data:user
            }).then(
                (res)=>{
                    console.log("response from signup api", res.data)
                    if(res.data.token) {
                        props.imformLogin()
                        // console.log(props);
                        props.history.push("/")
                    }
                },
                (error)=>{
                    console.log("error from signup api", error);
                }
            )
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

export default withRouter(Login)