import React, { useState, useEffect } from 'react';
import { useHistory} from "react-router-dom";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { MdPayment } from 'react-icons/md';
// import { RiCouponLine } from 'react-icons/ri';
// import { AiFillGift } from 'react-icons/ai';
import Modal from '../Modal/Modal';
import AddressDetails from './AddressDetails';
import './styles.scss';
import store from '../../store/index';
import AddressCard from './AddressCard';
import PriceDetails from '../Cart/PriceDetails'
// import {removeAddress} from "../../Actions/UserActions";

function OrderView() {
    const history = useHistory();
    const [showAddress, setShowAddress] = useState(true);
    const [address, setAdress] = useState([]);
    const cartStore = store.getState().cartState.items;



    const manageAddress = () => {
        setShowAddress(!showAddress)
    }
    // console.log(userStore);
    useEffect(() => {
        if (localStorage.getItem('address')) {
            setAdress(JSON.parse(localStorage.getItem('address')))
        }

    }, [showAddress])

    useEffect(() => {

    }, [address])

    const goToThanks = () => {
        history.push(`/thankyou`);
        // context.manageAddress();
        

    }

    const handleRemoveAddress = () => {
        // store.dispatch(removeAddress(id));
        localStorage.setItem("address", JSON.stringify([]))

    }
    console.log('bel')
    console.log(address)

    return (
        <>
            <div className="cart-container">
                <div className="cart">

                    <div className="bag-add-pay">

                        <div className="all-icon ">
                            <HiOutlineShoppingBag />
                        </div>



                        <div className="all-icon active">
                            <GoLocation />
                        </div>


                        <div className="all-icon">
                            <MdPayment />
                        </div>
                    </div>

                </div>
                <div className="cart-items-container">
                    <div className="cart-item">
                        {/* {userStore.address} */}
                        {typeof address !== 'undefined' ? address.map(({ id, address, defaultAddress, name, phoneNumber }) => (
                            <div key={id}>
                                <AddressCard id={id} address={address} defaultAddress={defaultAddress} name={name} phoneNumber={phoneNumber} handleRemoveAddress={handleRemoveAddress} />

                            </div>
                        )) : null}

                        <div className="add-addr" onClick={manageAddress}>
                            <span style={{ color: 'red' }}> + ADD NEW ADDRESS</span>
                        </div>
                    </div>

                    <div className="coupon-price">
                        <div className="price-detail">
                            <PriceDetails itemList={cartStore} />
                        </div>
                        <div className="pay-button">
                            <button id="btn1" onClick={goToThanks}>CONTINUE</button>
                        </div>


                    </div>
                </div>

            </div>
            {showAddress ? <Modal manageModal={manageAddress}><AddressDetails manageAddress={manageAddress} /></Modal> : null}
        </>

    )
}

export default OrderView
