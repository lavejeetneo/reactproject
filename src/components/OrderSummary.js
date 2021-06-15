import {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";
import Cake from "./Cake";
import {withRouter, Link} from "react-router-dom";

const OrderSummary = (props) => {
    const [disableAddressLink, setDisableAddressLink] = useState(true)
    const [cakes, getCakes] = useState([]);

    let totalPrice = 0

    const activeNextUrl = () => {
        props.history.push('/checkout/address')
        setDisableAddressLink(false)
        props.onChange(disableAddressLink)
    }

    useEffect(() => {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +'/cakecart',
            method: 'post'
        }).then(res => {
            if (res.data !== 'Session Expired') {
                const cakeList = res.data.data
                getCakes(cakeList);
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

    return (
        <div className="container">
            <div className="row">

            <div class="container mb-4">
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.cartCakes?.length > 0 &&
                                            props.cartCakes.map((each, index) => {
                                                totalPrice += each.price * each.quantity
                                                return (
                                                    <tr>
                                                        <td><img src={each.image} style={{height:"80px"}}/> </td>
                                                        <td>{each.name}</td>
                                                        <td>{each.weight} Kg</td>
                                                        <td class="text-center">{each.quantity}</td>
                                                        <td class="text-right">{each.quantity} x {each.price} = {each.quantity * each.price} $</td>

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
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <button className="btn btn-primary" style={{float: "right"}} onClick={activeNextUrl}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default connect((state, props) => {
    return {
        token: state.AuthReducer.token,
        cartCakes: state.CartReducer.cart,
        totalPrice: state.CartReducer.totalprice
    }
}) (withRouter(OrderSummary))