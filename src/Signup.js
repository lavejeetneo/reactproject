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
            <div className="container">
                <div className="mb-3" style={{borderRadius:"10px", marginTop:"24px" , padding:"20px", background:"#82c3d0"}}>
                    <h5>Signup Form</h5>
                    <form>
                        <div className="mb-3">
                                <label htmlFor="signupName">Name</label>
                                <input type="text" onChange={this.getName} className="form-control" id="signupName" placeholder="Enter name"/>
                                {this.state.name}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signupEmail">Email address</label>
                                <input type="email" onChange={this.getEmail} className="form-control" id="signupEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                                {this.state.email}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signupPassword">Password</label>
                                <input type="password" onChange={this.getPassword} className="form-control" id="signupPassword" placeholder="Password"/>
                                {this.state.password}
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup