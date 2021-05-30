import Carousal from "./Carousal";
import Navbar from "./Navbar";
import Signup from "./Signup";


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
    </div>
  );
}

export default App;
