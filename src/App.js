import "./App.css";
import Loader from "./components/Loader";
import Home from "./components/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Loader />
      <Home />
    </div>
  );
}

export default App;
