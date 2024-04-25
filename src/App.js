import Appbar from "./Components/appbar";
import { AuthDetails } from "./Components/auth/AuthDetails";
// import { IsLogged } from "./Components/auth/IsLogged";
import getEmdedData from "./Components/functions/getEmdedData";
import './app.css'
import { Link, Outlet } from "react-router-dom";

const data = await getEmdedData('https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task.json')

function App() {
  console.log(data)
  return (
    <div className="App">
        <Appbar id="detail">
          <br/>
          <br/>dasdada
          <br/>
          <br/>
          <Link to={'tasks'}></Link>
        </Appbar>
        <AuthDetails/>
    </div>
  );
}

export default App;
