import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Loader from "./Loader"
import {addCartMiddleware} from "../reduxstore/middleware";

let CakeDetail = (props)=>{
    let params = useParams()
    let [cake, setCake] = useState()
    let [cakeLoaded, setCakeLoaded] = useState(false)
    let cakedetailapi = process.env.REACT_APP_API_BASE_URL+"cake/"+params.cakeid


    useEffect(
        ()=>{
            axios(
                {
                    method:"get",
                    url:cakedetailapi,
                    headers:{
                        authtoken:props.token
                    }
                }
            ).then(
                (res)=>{
                    console.log(res.data.data);
                    setCake(res.data.data)
                    setCakeLoaded(true)
                },
                (error)=>{
                    console.error(error)
                }
            )
        }, []
    )

    let addToCart = (data)=>{
        if(!localStorage.token) {
            props.history.push('/')
        } else {
            props.dispatch(addCartMiddleware(data))
        }
    }

    return (
        <div>
            {!cakeLoaded && <Loader/>}
            {
                cake && cakeLoaded &&

                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="product-content product-wrap clearfix product-deatil">
                        <div class="row">
                            <div class="col-md-5 col-sm-12 col-xs-12">
                                <div class="product-image">
                                    <div id="myCarousel-2" class="carousel slide">
                                        <div class="carousel-inner">
                                            <div class="item active">
                                                <img src={cake.image} style={{maxHeight : "400px"}} class="img-responsive" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                <h2 class="name">
                                    {cake.name}
                                    <small> by Cake Shop </small>
                                    <span class="fa fa-2x"><h5>(109) Votes </h5></span>
                                    <a href="">109 customer reviews</a>
                                </h2>
                                <hr />
                                <h3 class="price-container">
                                    ${cake.price}
                                    <small>*includes tax</small>
                                </h3>
                                <div class="certified">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);">Delivery time<span>7 Working Days</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">Certified<span>Quality Assured</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                    <div class="description description-tabs">

                                        {cake.ratings} <i class="fa fa-star fa-2x text-primary"></i>
                                        
                                    </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                        <button class="btn btn-success btn-lg" onClick={()=>addToCart(cake)}>Add to cart (${cake.price})</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

CakeDetail = connect(function (state, props){
    if (state.CartReducer.success) {
        state.CartReducer.success = false
        props.history.push('/cart')
    }
})(CakeDetail);

export default withRouter(CakeDetail)