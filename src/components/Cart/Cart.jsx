import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import { removeFromCart } from '../../Actions/CartActions';
import CartItem from './CartItem';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { MdPayment } from 'react-icons/md';
import { RiCouponLine } from 'react-icons/ri';
import { AiFillGift } from 'react-icons/ai';
import './styles.scss';




function Cart() {
    const cartStore = store.getState().cartState.items;
    // store.getState().cartState.items=[]
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (cartStore) {
            setCartItems(cartStore);
        }

    }, [cartStore])

    const handleRemoveFromCart = (id) => {
        store.dispatch(removeFromCart(id));
        setCartItems(store.getState().cartState.items);
    }

    if (cartItems.length === 0) {
        return (<div>cart empty</div>)
    }

    return (
        <div className="cart-container">
            <div className="cart">

                <div className="bag-add-pay">

                    <div className="bag-icon">
                        <HiOutlineShoppingBag />
                    </div>
                    <div className="hrline"></div>

                    <div className="lo-icon">
                        <GoLocation />
                    </div>


                    <div className="pay-icon">
                        <MdPayment />
                    </div>
                </div>

            </div>
            <div className="cart-items-container">
                <div className="cart-item">
                    {cartItems.map(({ id, title, price, image }) => (

                        <div key={id}>
                            <CartItem id={id} title={title} price={price} image={image} handleRemoveFromCart={handleRemoveFromCart} />
                        </div>


                    ))}
                </div>
                <div className="coupon-price">
                    <div className="coupons">
                        <div className="coupon-text">
                            Coupons
                        </div>
                        <div className="coupon-logo">
                            <div className="c-l">
                                <RiCouponLine style={{ fontSize: "30px" }} />
                            </div>

                            <div className="c-t">
                                <input type='text' placeholder="Apply coupon"></input>
                            </div>

                            <div className="c-b">
                                <button>Apply</button>
                            </div>
                        </div>


                    </div>


                    <div className="gift">
                        <div className="gift-head">
                            GIFTING AND PERSONALIZATION
                        </div>
                        <div className="g-p">

                            <div className="g-logo"><AiFillGift /></div>

                            <div><p style={{ fontSize: '10px', lineHeight: '1.2' }}>Buying For Loved Ones ?
                            Gift Wrapped And Personalized
                            Message On Card ,
                                Only For $ 25</p>
                                <text style={{ fontSize: '15px', color: '#61a0f2' }}>Add gift wrap</text></div>
                        </div>
                    </div>
                    <div className="price">
                        <div style={{ fontSize: '20px', paddingTop: '10px' }}>Price Details</div>
                        <div className="p-inner">

                            <div className="p-1">

                                <div>
                                    Total MRP
                                </div>
                                <div>$75.59</div>

                            </div>

                            <div className="p-1">

                                <div>
                                    Discount on MRP
                                </div>
                                <div>-$-36.39</div>

                            </div>

                            <div className="p-1">

                                <div>
                                    Coupon Discount
                                </div>
                                <div>No</div>

                            </div>

                            <div className="hrline"></div>

                            <div className="p-1">

                                <div>
                                    Total
                                </div>
                                <div>$55.99</div>

                            </div>
                        </div>


                    </div>
                    <div className="placeorder">
                        <button>Place order</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart
