import { Link } from "react-router-dom"

let pageNotFound = ()=>{
    return (
        <>
            <h2>Pahe Not Found</h2>
            <Link to="/">Go to home page</Link>
        </>
    )
}

export default pageNotFound