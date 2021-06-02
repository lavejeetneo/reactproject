import Carousal from "./Carousal";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

import cakeData from "./data.js"
import Cake from "./Cake";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  var [isLogedin, setLogin] = useState(false)
  var [cakes, setCakes] = useState([])

  let data = {
    product : "Cake",
    contact : 9876543210
  }

  let cakeApi = "http://apibyashu.herokuapp.com/api/allcakes"

  useEffect(
    ()=>{
      axios({
        method:"get",
        url:cakeApi
      }).then(
        (res)=>{
          console.log(res.data);
          setCakes(res.data.data)
        },
        (error)=>{
          console.error(error);
        }
      )
    }, []
  )

  let LoginDone = ()=>{
    setLogin(true)
  }
  return (
    <div>
      <Navbar isLogedin={isLogedin} p1="Cake Shop" data={data}>kota</Navbar>
      <Carousal/>
      <Signup />
      <Login imformLogin={LoginDone}/>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            {
              cakes.map((each,index)=>{
                return (
                  <Cake cakeData={each} key={index}/>
                )
              })
            }
        </div>
    </div>
  );
}

export default App;
