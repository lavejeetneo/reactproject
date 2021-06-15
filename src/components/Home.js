import axios from "axios"
import { useEffect, useState } from "react"
import CakeList from "./CakeList"
import Carousal from "./Carousal"
import Loader from "./Loader"

let Home = ()=>{

    var [cakes, setCakes] = useState([])
    var [cakesLoaded, setCakesLoaded] = useState(false)
    var cakeApi = process.env.REACT_APP_API_BASE_URL+"allcakes"

    useEffect(
        ()=>{
            axios({
                method:"get",
                url:cakeApi
            }).then(
                (res)=>{
                    setCakes(res.data.data)
                    setCakesLoaded(true)
                },
                (error)=>{
                    console.error(error);
                }
            )
        }, []
    )


    return (
        <div>
            <Carousal/>
            {!cakesLoaded && <Loader/>}
            {cakesLoaded && <CakeList cakes={cakes}/>}
        </div>
    )
}

export default Home