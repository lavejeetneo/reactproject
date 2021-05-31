import Carousal from "./Carousal";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

import cakeData from "./data.js"
import Cake from "./Cake";


function App() {
  let data = {
    product : "Cake",
    contact : 9876543210
  }
  return (
    <div>
      <Navbar p1="Cake Shop" data={data}>kota</Navbar>
      <Carousal/>
      <Signup />
      <Login />
      {
        cakeData.map((each,index)=>{
          return (
            <Cake cakeData={each} key={index}/>
          )
        })
      }
    </div>
  );
}

export default App;
