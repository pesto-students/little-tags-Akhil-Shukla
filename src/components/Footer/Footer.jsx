import React from 'react';
import './styles.scss';
import { FaCcVisa, FaGooglePlay, FaFacebookSquare, FaGithub, FaTwitter, FaYoutube, FaInstagram, FaTruckMoving, FaCcMastercard, FaCreditCard } from 'react-icons/fa';
import { RiRepeatFill } from 'react-icons/ri';
import { MdCropOriginal } from 'react-icons/md';
import { SiAmericanexpress, SiGooglepay } from 'react-icons/si';





export default function Footer() {
    return (
        <div className="footer-wrapper">


            <div className="useful-links">
                <div className="online-shoping">

                    <ul>
                        <p>online shopping</p>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Home & Living</li>
                        <li>gift cards</li>
                        <li>insiders</li>
                    </ul>
                </div>

                <div className="use-links">

                    <ul>
                        <p>Useful Links</p>
                        <li>Contack us</li>
                        <li>FAQ</li>
                        <li>T&C</li>
                        <li>Track Orders</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Cancellation</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>


                <div className="mobile-app-gp">
                    <p>Eprience app on mobile</p>

                    <div className="gp-as">


                    </div>
                    <legend>KEEP IN TOUCH</legend>
                    <div className="fb-insta-twit">

                        <FaFacebookSquare />
                        <FaTwitter />
                        <FaYoutube />
                        <FaInstagram />
                    </div>
                </div>

                <div className="orignal-returns">
                    <div className="og">
                        <div className="og-logo"><MdCropOriginal /></div>
                        <div className="og-log-con">
                            <ul>
                                <li><b>100% ORIGINAL</b> guarantee </li>
                                <li>for all products at Shop Till Drop</li>
                            </ul>
                        </div>
                    </div>

                    <div className="returns">

                        <div className="repeat-logo"><RiRepeatFill /></div>
                        <div className="repeat-con">
                            <ul>
                                <li><b>Return within 30days </b> of </li>
                                <li>receiving your order</li>
                            </ul>
                        </div>

                    </div>
                    <div className="truck">
                        <div className="truck-logo"><FaTruckMoving /></div>
                        <div className="truck-logo-con">
                            <ul>
                                <li><b>Get free delivery</b> for every </li>
                                <li>order above Rs. 799</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hrline"></div>

            <div className="payment-methods">
                <div className="pay-logo">
                    <div className="pay-logo-c"><FaCcVisa /></div>
                    <div className="pay-logo-c"><FaCcMastercard /></div>
                    <div className="pay-logo-c"><FaCreditCard /></div>
                    <div className="pay-logo-c"><SiAmericanexpress /></div>
                    <div className="pay-logo-c"><SiGooglepay /></div>
                
                </div>




                <div className="git-logo"><FaGithub /></div>
            </div>

        </div>
    )
}