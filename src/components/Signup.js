import axios from "axios";
import { useState } from "react";

let Signup = (props)=>{

    var [user, setUser] = useState({})
    var [error, setError] = useState()

    let getName = (e)=>{
        setUser({
            ...user,
            name:e.target.value
        })
    }

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

    let signup = (e)=>{
        e.preventDefault()
        if(!user.name || !user.email || !user.password){
            setError("Please fill the details.")
        } else {
            let apiurl = "https://apibyashu.herokuapp.com/api/register"
            axios({
                url:apiurl,
                method:"post",
                data:user
            }).then(
                (res)=>{
                    console.log("response from signup api", res.data)
                },
                (error)=>{
                    console.log("error from signup api", error);
                }
            )
        }
    }

    return (
        <div className="container">
            {console.log(props)}
            <div className="mb-3" style={{borderRadius:"10px", marginTop:"24px" , padding:"20px", background:"#82c3d0"}}>
                <h5>Signup Form</h5>
                <form>
                    <div className="mb-3">
                            <label htmlFor="signupName">Name</label>
                            <input type="text" onChange={getName} className="form-control" id="signupName" placeholder="Enter name"/>
                            {user.name}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signupEmail">Email address</label>
                            <input type="email" onChange={getEmail} className="form-control" id="signupEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                            {user.email}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signupPassword">Password</label>
                            <input type="password" onChange={getPassword} className="form-control" id="signupPassword" placeholder="Password"/>
                            {user.password}
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={signup}>Submit</button>
                        {error}
                </form>
            </div>
        </div>
    )
    
}

export default Signup