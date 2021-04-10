import React from 'react'
import "./Header.scss"
import Logo from "../../assets/logo.png"
import {AiOutlineShoppingCart,AiOutlineUser,AiOutlineGlobal,AiOutlineSearch} from 'react-icons/ai'


function Header(props) {
    return (
            <header className="header">
                <div className="wrap">
                    <div className="logo">
                    <img src={Logo} alt="SimpleTut LOGO" />
                    </div>
                    <div className="search-input">
                    <span><AiOutlineSearch/></span>
                    <input type="text"></input>
                    </div>
                    
                    <div className="cart-logo"><AiOutlineShoppingCart/></div>
                    <div className="user-logo"><AiOutlineUser/></div>
                    <div className="user-signin"><span>LogIn/SignUp</span></div>
                    <div className="glob-logo"><AiOutlineGlobal/></div>
                    

                </div>

            </header>
    )
}

export default Header
