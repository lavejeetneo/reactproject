import { useState } from "react"

let Navbar = (props)=>{
    console.log(props)

    let searchString = 'kuch bhi search karo'
    let search = (e) => {
        e.preventDefault()
        console.log(searchString);
    }

    let getSearchText = (e)=>{
        searchString = e.target.value
        console.log(searchString);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.p1}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{props.data.product}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" onChange={getSearchText} type="search" placeholder="Search" aria-label="Search"/>
                    {searchString}
                    <button className="btn btn-outline-success" onClick={search} type="submit">Search</button>
                </form>

                { !props.isLogedin && <button type="button" class="btn btn-link">Login</button>}
                { props.isLogedin && <button type="button" class="btn btn-link">Logout</button>}

                </div>
            </div>
        </nav>
    )
}

export default Navbar