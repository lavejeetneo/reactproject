import { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Carousal from "./components/Carousal";
import pageNotFound from "./components/pageNotFound";
import Navbar from "./components/Navbar";
import Cake from "./components/Cake";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CakeDetail from "./components/CakeDetail";
import Search from "./components/Search";
import Home from "./components/Home";


function App() {

  var [isLogedin, setLogin] = useState(false)

  let data = {
    product : "Home",
    contact : 9876543210
  }

  let LoginDone = ()=>{
    setLogin(true)
  }

  return (
    <div>
      <Router>
        <Navbar isLogedin={isLogedin} p1="Cake Shop" data={data}>kota</Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact><Login imformLogin={LoginDone}/></Route>
          <Route path="/search" exact component={Search}></Route>
          <Route path="/cake/:cakeid" exact component={CakeDetail}></Route>
          <Route path="*" component={pageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
