import { Component } from "react";

class Signup extends Component {
    constructor() {
        super()
        this.state = {}
    }

    getName = (e)=>{
        this.setState({
            name:e.target.value
        })
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

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="signupName">Name</label>
                    <input type="text" onChange={this.getName} className="form-control" id="signupName" placeholder="Enter name"/>
                    {this.state.name}
                </div>
                <div className="form-group">
                    <label htmlFor="signupEmail">Email address</label>
                    <input type="email" onChange={this.getEmail} className="form-control" id="signupEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    {this.state.email}
                </div>
                <div className="form-group">
                    <label htmlFor="signupPassword">Password</label>
                    <input type="password" onChange={this.getPassword} className="form-control" id="signupPassword" placeholder="Password"/>
                    {this.state.password}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Signup