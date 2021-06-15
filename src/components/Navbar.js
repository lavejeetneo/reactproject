import { useState } from "react"
import { connect } from "react-redux"
import {Link, withRouter} from "react-router-dom"

let Navbar = (props)=>{

    var [searchString, setSearchString] = useState('')

    let getSearchText = (e)=>{
        setSearchString(e.target.value)
    }

    let search = (e) => {
        e.preventDefault()
        console.log(searchString);
        if(searchString) {
            let url = "/search?q="+searchString
            props.history.push(url)
        }
    }

    let logout = () => {
        props.dispatch({
            type: "LOGOUT",
            payload: {
                token: localStorage.getItem('token')
            }
        })
        props.history.push('/')
    }

    {console.log(props)}

    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#5b6672", borderBottom:"1px solid"}}>
            <Link className="navbar-brand" to={"/"}>{props.p1}</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    { props.isAdmin && <Link to="/admin"><button type="button" class="btn">Admin</button></Link>}
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" onChange={getSearchText}/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={search}>Search</button>
                </form>

                { !props.isloggedin && <Link to="/signup"><button type="button" class="btn">Signup</button></Link>}
                { !props.isloggedin && <Link to="/login"><button type="button" class="btn">Login</button></Link>}
                { props.isloggedin && <button type="button" class="btn btn-link" onClick={logout}>Logout</button>}
                { props.isloggedin && <Link to="/cart"><button type="button" class="btn">Cart</button></Link>}
            </div>
        </nav>
    )
}

Navbar = withRouter(Navbar)

let mapStateToProps = (state, props) => {
    return {
        username: state.AuthReducer.username,
        isloggedin: state.AuthReducer.isloggedin,
        totalItems: state.CartReducer.totalItems,
        isAdmin: state.AuthReducer.isAdmin
    }
}

export default connect (mapStateToProps) (Navbar)