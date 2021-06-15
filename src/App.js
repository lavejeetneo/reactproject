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
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Order";
import Admin from "./components/Admin";


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
        <Navbar p1="Cake Shop" data={data}>kota</Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact><Login imformLogin={LoginDone}/></Route>
          <Route path="/search" exact component={Search}></Route>
          <Route path="/cake/:cakeid" exact component={CakeDetail}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="*" component={pageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
