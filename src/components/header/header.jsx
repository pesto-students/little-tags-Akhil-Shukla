import React,{useState} from "react";
// import {FiAlignJustify} from "react-icons/fi"
import {AiOutlineSearch,AiOutlineShoppingCart,AiOutlineLogin} from "react-icons/ai"
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Navbar from "../navbar/Navbar"
// import Home from "../pages/Home"
// import Products from "../pages/Home"

import "./header.scss"


export default function Header(){
    let [toggle,setToggel]=useState(false)

    return (<div class="row header">
       
        {/* <div class="col-sm-2 ham-icon ">
        <FiAlignJustify size="40px" />
        </div> */}

        <div class="col-sm-2 ham-icon" >
            {/* <Router>
            <Navbar/>
            <Switch>
                <Route  path="/" >
                    <Home/>
                </Route>
                <Route  path="/products" >
                    <Products/>
                </Route>
            </Switch>
            </Router> */}
            
        </div>
        
        <div class="col-sm-8 search ">
        <input type="text"  placeholder="Search"  ></input>
       <span style={{fontSize:"30px"}}><AiOutlineSearch /></span> 
        </div>
        {/* <div class="col-sm-2 cart">
           </div> */}
        <div class="col-sm-2 cart">
            <span style={{fontSize:"30px"}}><AiOutlineShoppingCart/></span>
            <span style={{fontSize:"30px"}}><AiOutlineLogin/></span>
        </div>
        

    </div>)
}