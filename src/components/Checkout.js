import {Link, Route} from "react-router-dom";
import Summary from "./OrderSummary";
import Address from "./DeliveryAddress";
import {useState} from "react";
import {connect} from "react-redux";
import {placeOrderMiddleware} from "../reduxstore/middleware";
import {withRouter} from "react-router-dom";

let Checkout = (props) => {

    const [disableAddressLink, setDisableAddressLink] = useState(true)
    const [disablePaymentLink, setDisablePaymentLink] = useState(true)
    const data = {}
    let totalPrice = 0;

    const handleAddressLink = () => {
        setDisableAddressLink(false)
    }

    const handlePaymentLink = () => {
        setDisablePaymentLink(false)
    }

    const handleAddressSubmit = (value) => {
        value = value.split("_")
        data.address = value[0]
        data.city = value[1]
        data.pincode = value[2]
        data.phone = value[3]
        props.cakes.map((each, index) => {
            totalPrice += each.price
            return totalPrice
        })
        data.name = (JSON.parse(localStorage.getItem('userData'))).name
        data.price = totalPrice
        data.cakes = props.cakes
        console.log('data final value: ', data)
        props.dispatch(placeOrderMiddleware(data))
    }

    return (
        <div className="container" style={{marginTop: "20px", paddingBottom:"50px"}}>
            <h1>Checkout Page</h1>
            <div className="row">
                <ul className="nav nav-tabs" style={{width: '100%'}}>
                    <li className="nav-item" style={{width: '50%'}}>
                        <Link className={"nav-link " + (disableAddressLink ? "active" : "")} aria-current="page" to={'/checkout'}>Order Summary</Link>
                    </li>
                    <li className="nav-item" style={{width: '50%'}}>
                        {
                            !disableAddressLink
                            ? <Link className={"nav-link " + (disablePaymentLink ? "active" : "")} to={'/checkout/address'}>Address Details</Link>
                                : <Link className="nav-link disabled" to={'/checkout/address'} tabIndex="-1" aria-disabled="true">Address Details</Link>
                        }
                    </li>
                </ul>
                <div className="card" style={{width: '100%'}}>
                    <div className="card-body">
                        <Route exact path="/checkout"><Summary disableAddressLink={disableAddressLink} onChange={handleAddressLink} /></Route>
                        <Route exact path="/checkout/address"><Address disablePaymentLink={disablePaymentLink} onChange={handlePaymentLink} onSubmit={handleAddressSubmit} /></Route>
                    </div>
                </div>
            </div>
        </div>
    )
}

Checkout = connect(function (state, props) {
    if(state.CartReducer.success) {
        props.history.push('/orders')
        state.CartReducer.success = false
    }
    return {
        cakes: state.CartReducer.cart
    }
}) (Checkout)

export default withRouter(Checkout)