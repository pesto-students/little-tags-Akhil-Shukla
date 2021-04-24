import React from 'react';
import PropTypes from 'prop-types';
import { BiDollar } from "react-icons/bi";
import './styles.scss';

function CartItem(props) {
    const { id, title, price, image, handleRemoveFromCart } = props;
    return (
        <div className="cart-item-child">
            <div className="cart-item-data">
                <img src={image} alt='product'></img>
            </div>
            <div className="cart-item-data">
                <b>{title}</b>

                <div className='md'>
                    Price : 
                    <div className='pwd'>
                        <BiDollar /> {price}
                    </div>

                    <div className='price'>
                        <BiDollar /> {(price * 1.2).toFixed(2)}
                    </div>
                    <span className='discount'>(20% off)</span>
                </div>

            </div>
            {/* <div className="cart-item-data">
                
                
            </div> */}
            <div className="cart-item-data"><button onClick={() => handleRemoveFromCart(id)}>Remove</button></div>
        </div>
    )
}

export default CartItem




CartItem.prototype = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired
  }