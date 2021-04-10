// import logo from './logo.svg';
import './App.css';
// import Test from "./components/test";
// import Header from "./components/header/header"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/Home"
import Products from "./components/pages/Products"


function App() {
  return (
    <div className="App">
      <Router>
            <Navbar/>
            
            <Switch>
                <Route exact path="/"  >
                    <Home/>
                </Route>
                <Route  path="/products"  >
                    <Products/>
                </Route>
            </Switch>
            </Router>
      {/* <Header/> */}
    {/* <Test/> */}


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
