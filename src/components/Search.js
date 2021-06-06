import { useParams, withRouter } from "react-router"
import querystring from "query-string"
import axios from "axios";
import CakeList from "./CakeList";
import { useEffect, useState } from "react";

let Search = (props)=>{

    var [cakes, setCakes] = useState([])

    // var param = useParams()

    // console.log(param);

    // console.log('>>>>>>>>>>>', props)
    let query = querystring.parse(props.location.search)

    console.log('??????????????????????????? ', query);

    let searchCakesApi = "https://apibyashu.herokuapp.com/api/searchcakes?q="+query.q
    
    useEffect(
        ()=>{
            if(query.q) {
                axios({
                    method:"get",
                    url:searchCakesApi
                }).then(
                    (res)=>{
                        console.log("search cakes data ", res.data)
                        setCakes(res.data.data)
                    },
                    (error)=>{
                        console.log("search error "+ error)
                    }
                )
            }
        }, [query.q]
    )

    return(
        <>
            <h2>Search Page</h2>
            <CakeList cakes={cakes}/>
        </>
    )
}

export default Search