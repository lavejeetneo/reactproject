import { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Carousal from "./components/Carousal";
import pageNotFound from "./components/pageNotFound";
import Navbar from "./components/Navbar";
import Cake from "./components/Cake";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {

  var [isLogedin, setLogin] = useState(false)
  var [cakes, setCakes] = useState([])

  let data = {
    product : "Home",
    contact : 9876543210
  }

  let cakeApi = "https://apibyashu.herokuapp.com/api/allcakes"

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
      <Router>
        <Navbar isLogedin={isLogedin} p1="Cake Shop" data={data}>kota</Navbar>
        <Switch>
          <Route path="/" exact>
            <Carousal/>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                  cakes.map((each,index)=>{
                    return (
                      <Cake cakeData={each} key={index}/>
                    )
                  })
                }
            </div>
          </Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          {/* <Route path="/login" exact><Login imformLogin={LoginDone}/></Route> */}
          <Route path="*" component={pageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
