import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import { BrowserRouter } from "react-router-dom";
import Route from "./Routes/Route";
import HomeRoute from "./Routes/Route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
