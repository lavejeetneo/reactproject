import { Component } from "react"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email : '',
            password : '',
            msg : '',
        }
    }

    getEmail = (e)=>{
        this.setState({
            email:e.target.value
        })
    }

    getPassword = (e)=>{
        this.setState({
            password:e.target.value
        })
    }

    login = (e)=>{
        e.preventDefault()
        if(this.state.email === 'test123@gmail.com' && this.state.password === '123456') {
            this.setState({
                msg: 'Login Success'
            })
        } else {
            this.setState({
                msg: 'Invailid email or Password'
            })
        }
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="signupEmail">Email address</label>
                    <input type="email" onChange={this.getEmail} className="form-control" id="signupEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="signupPassword">Password</label>
                    <input type="password" onChange={this.getPassword} className="form-control" id="signupPassword" placeholder="Password"/>
                </div>
                <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                {this.state.msg}
            </form>
        )
    }
}

export default Login