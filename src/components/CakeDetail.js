import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

let CakeDetail = ()=>{
    let params = useParams()
    let [cake, setCake] = useState()
    let cakedetailapi = "https://apibyashu.herokuapp.com/api/cake/"+params.cakeid

    useEffect(
        ()=>{
            axios(
                {
                    method:"get",
                    url:cakedetailapi
                }
            ).then(
                (res)=>{
                    console.log(res.data.data);
                    setCake(res.data.data)
                },
                (error)=>{
                    console.error(error)
                }
            )
        }, []
    )

    return (
        <div>
            {
                cake &&
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={cake.image} className="card-img-top" alt="..." />
                    </div>
                    <div className='col-md-6'>
                    <div class="table-responsive">
                        <table class="table table-sm table-borderless mb-0">
                        <tbody>
                            <tr>
                            <th class="pl-0 w-25" scope="row"><strong>Rating</strong></th>
                            <td>{cake.ratings}</td>
                            </tr>
                            <tr>
                            <th class="pl-0 w-25" scope="row"><strong>Title</strong></th>
                            <td>{cake.name}</td>
                            </tr>
                            <tr>
                            <th class="pl-0 w-25" scope="row"><strong>Price</strong></th>
                            <td>{cake.price}$</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CakeDetail