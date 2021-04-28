import React from 'react';
import {FaRegSmile} from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { MdPayment } from 'react-icons/md';
import './styles.scss';
import { useHistory } from "react-router-dom";

function Checkout() {
    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }
    return (
        <>
            <div className="cart-container">
                <div className="cart">

                    <div className="bag-add-pay">

                        <div className="all-icon ">
                            <HiOutlineShoppingBag />
                        </div>



                        <div className="all-icon ">
                            <GoLocation />
                        </div>


                        <div className="all-icon active">
                            <MdPayment />
                        </div>
                    </div>

                </div>
                <div className="cart-items-container">
                    <div className="smily">
                       <span style={{fontSize:"400px"}}><FaRegSmile/></span> 
                       <div>

                       <h1>Thankyou for shopping !!!</h1>
                       <button id="btn2" onClick={goToHome}>SHOP MORE</button>
                       </div>
                       
                    </div>
                    
                
                </div>

            </div>
            
        </>

    )
}

export default Checkout
