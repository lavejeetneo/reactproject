import Carousal from "./Carousal";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

import cakeData from "./data.js"
import Cake from "./Cake";
import { useState } from "react";


function App() {

  var [isLogedin, setLogin] = useState(false)
  
  let data = {
    product : "Cake",
    contact : 9876543210
  }

  let LoginDone = ()=>{
    setLogin(true)
  }
  return (
    <div>
      <Navbar isLogedin={isLogedin} p1="Cake Shop" data={data}>kota</Navbar>
      <Carousal/>
      <Signup />
      <Login imformLogin={LoginDone}/>
      <div className="row">
        {
          cakeData.map((each,index)=>{
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
