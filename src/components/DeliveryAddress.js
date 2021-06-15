import {useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const Address = (props) => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [phone, setPhone] = useState('')

    const submitAddress = (event) => {
        event.preventDefault()
        const CompleteAddress = address + '_' + city + '_' + pincode + '_' + phone
        props.onSubmit(CompleteAddress)
    }

    return (
        <div className="container">
            <form onSubmit={submitAddress}>
                <div className="form-group address">
                    <label>Enter Address</label>
                    <input value={address} name='address' onChange={e => setAddress(e.target.value)} className="form-control" placeholder="Enter Address"/>
                </div>
                <div className="form-group city">
                    <label>Enter City</label>
                    <input value={city} name='city' onChange={e => setCity(e.target.value)} className="form-control" placeholder="Enter City"/>
                </div>
                <div className="form-group pincode">
                    <label>Enter Pincode</label>
                    <input value={pincode} name='pincode' onChange={e => setPincode(e.target.value)} className="form-control" placeholder="Enter Pin Code"/>
                </div>
                <div className="form-group phone">
                    <label>Enter Phone Number</label>
                    <input value={phone} name='phone' onChange={e => setPhone(e.target.value)} className="form-control" placeholder="Enter Phone"/>
                </div>
                <button type="submit" className="btn btn-primary" style={{float: "right"}}>
                    Place Order
                </button>
            </form>
        </div>
    )
}

export default connect() (withRouter(Address))