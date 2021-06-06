import { Link } from "react-router-dom";

let Cake = (props)=>{
    return (
        <Link to={"cake/"+props.cakeData.cakeid}>
            <div class="col">
                <div className="card" style={{width:"18rem"}}>
                    <img src={props.cakeData.image} style={{height:"220px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.cakeData.name}</h5>
                        <p className="card-text">{props.cakeData.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Cake