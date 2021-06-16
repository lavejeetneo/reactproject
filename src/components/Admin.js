import {useEffect, useState} from "react";
import axios from "axios";
import Cake from "./Cake";
import {withRouter} from "react-router-dom";
import {useDispatch, connect} from "react-redux";

const Admin = (props) => {
    const dispatch = useDispatch()
    const [cakeName, setCakeName] = useState('')
    const [cakeDesc, setCakeDesc] = useState('')
    const [cakePrice, setCakePrice] = useState('')
    const [cakeWeight, setCakeWeight] = useState('')
    const [uploadCakeImage, setUploadCakeImage] = useState('')
    const [cakeType, setCakeType] = useState('')
    const [cakeEggless, setCakeEggless] = useState(false)
    const [cakeFlavour, setCakeFlavour] = useState('')
    const [fields, setFields] = useState([{value: null}])
    let cakeIngredients = []

    const token = localStorage.getItem('token')

    if (!token) {
        props.history.push('/login')
    }

    const fileUpload = (event) => {
        let formData = new FormData()
        formData.append('file', event.target.files[0])
        axios({
            url: process.env.REACT_APP_API_BASE_URL + 'upload',
            method: 'post',
            data: formData,
            headers: {
                authtoken: localStorage.token
            }
        }).then(res => {
            setUploadCakeImage(res.data.imageUrl)
        }, err => {})
    }

    const submitCake = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_CAKE',
            payload: {name: cakeName, description: cakeDesc, price: cakePrice, weight: cakeWeight, image: uploadCakeImage, type: cakeType, eggless: cakeEggless, flavour: cakeFlavour, ingredients: cakeIngredients}
        })
    }

    return (
        <div>
            {props.isUploaded && <div class="alert alert-success" role="alert">
                Cake Uploaded!s
            </div>}
            <div className="container" style={{marginTop: "50px", paddingBottom:"50px"}}>
                <h1>Admin</h1>

                <div className="container">
                    <div className="mb-3" style={{borderRadius:"10px", marginTop:"24px" , padding:"20px", background:"#82c3d0"}}>
                        <h2>Add Cake</h2>
                        <form>
                                Preview:
                                <img src={uploadCakeImage} class="rounded mx-auto d-block" alt="..." style={{maxHeight:"200px"}}></img>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile" name='cake_image' onChange={fileUpload}/>
                                    <label class="custom-file-label" for="customFile" >Choose file</label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signupName">Name</label>
                                    <input type="text" className="form-control" value={cakeName} name='cake_name' onChange={e => setCakeName(e.target.value)} placeholder="Enter name"/>
                                </div>
                                <div className="mb-3">
                                    <label>Discription</label>
                                    <input type="text" className="form-control" value={cakeDesc} name='cake_desc'  onChange={e => setCakeDesc(e.target.value)} placeholder="Enter Discription"/>
                                </div>
                                <div className="mb-3">
                                    <label>Price</label>
                                    <input type="number" className="form-control" value={cakePrice} name='cake_price'  onChange={e => setCakePrice(e.target.value)} placeholder="Price"/>
                                </div>
                                <div className="mb-3">
                                    <label>Weight</label>
                                    <input type="number" className="form-control" value={cakeWeight} name='cake_weight' value={cakeWeight} name='cake_weight' onChange={e => setCakeWeight(e.target.value)} placeholder="Weight"/>
                                </div>
                                <div className="mb-3">
                                    <label>Type</label>
                                    <select class="form-control" id="exampleFormControlSelect1" ame="cake_type" value={cakeType} onChange={e => setCakeType(e.target.value)}>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="farewell">Farewell</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label>Eggless</label>
                                    <input type="text" className="form-control" placeholder="Enter Flavour" value={cakeEggless} name='cake_eggless' onChange={e => setCakeEggless(e.target.checked)}/>
                                </div>
                                <div className="mb-3">
                                    <label>Flavour</label>
                                    <input type="text" value={cakeFlavour} name='cake_flavour' onChange={e => setCakeFlavour(e.target.value)} className="form-control" placeholder="Add Flavour"/>
                                </div>
                        </form>
                        <button type="button" class="btn btn-primary" onClick={submitCake}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect ((state, props) => {
    return {
        isAdmin: state.AuthReducer.isAdmin,
        isUploaded: state.AdminReducer.isUploaded
    }
}) (withRouter(Admin))