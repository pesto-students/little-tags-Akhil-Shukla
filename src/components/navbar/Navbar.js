import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose,AiOutlineShoppingCart} from 'react-icons/ai'
import {SidebarData} from "./SidebarData"
import "./Navbar.css"
import {IconContext} from 'react-icons' 

function Navbar() {
    const [sidebar,setSidebar]=useState(false)
    const [hovcont,setHovcont]=useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    const hovContent = () => setHovcont(!hovcont)

    const sideBarInfo= SidebarData.map((item,index)=>{
        return <li key={index} className={item.cName}>
            <Link to={item.path} style={{color:"black"}}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
        </li>
    })

    return (<>
    <IconContext.Provider value={{color:'white'}}>
        <div class="header">
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <div  className="navbar">
        <div className="cart" onMouseEnter={hovContent}><AiOutlineShoppingCart  />
        <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div></div>
        
        </div>
        
       
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to="#" className="menu-bars">
                <AiOutlineClose/>
                </Link>
            </li>
            {sideBarInfo}
            </ul>
        </nav>
        </div>
        
        </IconContext.Provider>
        </>
    )
}

export default Navbar
