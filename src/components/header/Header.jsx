import React from 'react'
import "./Header.scss"
import Logo from "../../assets/logo.png";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineGlobal, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'


function Header({ manageSigInModal, showLogo, handleSignOut,manageProduct }) {
    const displayName = window.sessionStorage.getItem('userName')

    return (

        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <div>
                            <img src={Logo} alt="apparel city" />
                        </div>
                    </Link>
                </div>
                <span><Link onClick={manageProduct}>product</Link></span>
                <div className="search-input">
                    <span><AiOutlineSearch /></span>
                    <input type="text" placeholder="Search..."></input>
                </div>
                {showLogo ? <div className="user-logo">
                    <AiOutlineUser />
                    <span className="user-logout-options">

                        <div className="display-name">Hello, {displayName}</div>

                        <hr></hr>
                        <div className="order-history">
                            

                            <div className="order-history-content"><Link>Orders</Link></div>
                            <div className="order-history-content"> <Link>Wish list</Link></div>
                            <div className="order-history-content"> <Link>Contact us</Link></div>
                            <div className="order-history-content"> <Link>Insider</Link></div>
                            
                            
                           
                        </div>
                        <hr></hr>

                        <div className="log-out-button" > <button onClick={handleSignOut}>Log Out</button></div>
                        

                    </span>
                </div> : <div className="user-signin"><Link to="" onClick={manageSigInModal}><span>Log In/Sign Up</span></Link></div>}
                <div className="cart-logo"><AiOutlineShoppingCart /></div>
                <div className="glob-logo"><AiOutlineGlobal /></div>
            </div>
        </header>
    )
}

export default Header
