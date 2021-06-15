import {Link, withRouter} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";
import Cake from "./Cake";
import {connect} from "react-redux";
import {emptyCartMiddleware, removeOneCakeFromCartMiddleware, removeCakeFromCartMiddleware} from "../reduxstore/middleware";

let Cart = (props)=>{

    const [cakes, setCakes] = useState([]);
    let totalPrice = 0

    useEffect(() => {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +'cakecart',
            method: 'post',
            headers: {
                authtoken: props.token
            }
        }).then(res => {
            console.log(res.data)
            if (res.data !== 'Session Expired' && res.data.message !== 'Not Authorised') {
                const cakeList = res.data.data
                setCakes(cakeList);
                props.dispatch({
                    type: "SHOW_CART",
                    payload: {
                        data: cakeList
                    }
                })
            } else {
                props.history.push('/login')
            }
        }, err => {
            console.log('error')
        })
    }, [])

    const emptyCart = () => {
        props.dispatch(emptyCartMiddleware())
    }

    let removeItem = (cakeId) => {
        alert(cakeId)
        props.dispatch(removeOneCakeFromCartMiddleware(cakeId))
    }

    return (
        <>
            {
                <div class="container mb-4">
                    <div class="col-sm-12 col-md-4 text-right">
                        <button class="btn btn-lg btn-block btn-danger text-uppercase" onClick={()=>emptyCart}><i class="fa fa-trash"></i>  Clear Cart</button>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"> </th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Weight</th>
                                            <th scope="col" class="text-center">Quantity</th>
                                            <th scope="col" class="text-right">Price</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.cartCakes?.length > 0 &&
                                            props.cartCakes?.map((each, index) => {
                                                totalPrice += each.price * each.quantity
                                                return (
                                                    <tr>
                                                        <td><img src={each.image} style={{height:"80px"}}/> </td>
                                                        <td>{each.name}</td>
                                                        <td>{each.weight} Kg</td>
                                                        <td><input class="form-control" type="number" value={each.quantity} /></td>
                                                        <td class="text-right">{each.quantity} x {each.price} = {each.quantity * each.price} $</td>
                                                        <td class="text-right"><button type="button" onClick={()=>{removeItem(each.cakeid)}} class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <th scope="col">Total </th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col" class="text-center"></th>
                                        <th scope="col" class="text-right">{totalPrice} $</th>
                                        <th> </th>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="row">
                                <div class="col-sm-12  col-md-6">
                                    <Link to={"/"} class="btn btn-block btn-light">Continue Shopping</Link>
                                </div>
                                <div class="col-sm-12 col-md-6 text-right">
                                    <Link class="btn btn-lg btn-block btn-success text-uppercase" to={"/checkout"}>Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default connect((state, props) => {
    return {
        token: state.AuthReducer.token,
        cartCakes: state.CartReducer.cart,
        totalPrice: state.CartReducer.totalprice
    }
}) (withRouter(Cart))