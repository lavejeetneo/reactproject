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
                <div class="form-group">
                    <label for="signupName">Name</label>
                    <input type="text" onChange={this.getName} class="form-control" id="signupName" placeholder="Enter name"/>
                    {this.state.name}
                </div>
                <div class="form-group">
                    <label for="signupEmail">Email address</label>
                    <input type="email" onChange={this.getEmail} class="form-control" id="signupEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    {this.state.email}
                </div>
                <div class="form-group">
                    <label for="signupPassword">Password</label>
                    <input type="password" onChange={this.getPassword} class="form-control" id="signupPassword" placeholder="Password"/>
                    {this.state.password}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Signup