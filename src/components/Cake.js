import { Link } from "react-router-dom";

let Cake = (props)=>{
    let cakename
    if(props.cakeData.name.length > 14) {
        cakename = props.cakeData.name.substr(1,14)+'...'
    }
    return (
        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <Link to={"cake/"+props.cakeData?.cakeid}>
                <div class="card-flyer">
                    <div class="text-box">
                        <div class="image-box">
                            <img src={props.cakeData.image} alt="" />
                        </div>
                        <div class="text-container">
                            <h6>{cakename ? cakename : '...'}</h6>
                            <h5>$ {props.cakeData.price}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Cake