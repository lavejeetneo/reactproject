import { Component } from "react"

class Login extends Component {
    constructor(props) {
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
        console.log(this.props);
        if(this.state.email === 'test123@gmail.com' && this.state.password === '123456') {
            this.setState({
                msg: 'Login Success'
            })
            this.props.imformLogin()

        } else {
            this.setState({
                msg: 'Invailid email or Password'
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="mb-3" style={{borderRadius:"10px", marginTop:"24px" , padding:"20px", background:"#82c3d0"}}>
                    <h5>Login From</h5>
                    <form>
                        <div className="mb-3">
                            <div className="form-group mb-3">
                                <label htmlFor="signupEmail">Email address</label>
                                <input type="email" onChange={this.getEmail} className="form-control" id="signupEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="signupPassword">Password</label>
                                <input type="password" onChange={this.getPassword} className="form-control" id="signupPassword" placeholder="Password"/>
                            </div>
                            <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                            {this.state.msg}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login