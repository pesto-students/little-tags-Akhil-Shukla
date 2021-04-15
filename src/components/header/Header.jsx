import React from 'react'
import "./Header.scss"
import Logo from "../../assets/logo.png";
import {AiOutlineShoppingCart,AiOutlineUser,AiOutlineGlobal,AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'


function Header(props) {
    const {manageSigInModal,showLogo,handleSignOut} = props;

    // useEffect(() => {
    //    console.log(showUserLogo)
    // }, [showUserLogo])

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
                    <div className="search-input">
                    <span><AiOutlineSearch/></span>
                    <input type="text" placeholder="Search..."></input>
                    </div>
                    {/* <div className="user-logo"><AiOutlineUser/></div> */}
                    {showLogo?<div className="user-logo">
                    <AiOutlineUser/>
                    <span className="user-logout-options">
                    <button className="log-out-button" onClick={handleSignOut}>Log Out</button>
                    <hr></hr>
                    <div className="order-history">
                        <div className="order-history-content">history</div>
                        <div className="order-history-content">contact</div>

                    </div>

                    </span>
                    </div> :<div className="user-signin"><Link onClick={manageSigInModal}><span>Log In/Sign Up</span></Link></div>}

                    {/* <div className="user-signin"><Link onClick={manageSigInModal}><span>Log In/Sign Up</span></Link></div> */}
                    <div className="cart-logo"><AiOutlineShoppingCart/></div>
                    <div className="glob-logo"><AiOutlineGlobal/></div> 
                </div>
            </header>
    )
}

export default Header
