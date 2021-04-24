import React, { useState } from 'react';
import { BiDollar, BiShoppingBag } from "react-icons/bi";
import { AiFillStar } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { IoIosStarOutline } from "react-icons/io";
import './styles.scss';
import store from '../../store/index';
import { addToWishList } from '../../Actions/WishlistActions';
import {addToCart} from '../../Actions/CartActions';

function ProductDescCard(props) {
    const { id, title, price, image, description, category } = props;
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(0);
    const options = ['SM', 'M', 'L', 'XL']


    const onInputChange = event => setQuantity(event.target.value)


    const handleAddToWishList = () => {
        const data  = {
            id, title, price,image,description, category
        };
        store.dispatch(addToWishList(data,id));

    }

    const handleAddToCart = () => {
        const data  = {
            id, title, price,image,description, category
        };
        store.dispatch(addToCart(data,id));

    }
    
    return (
        <>
        <div className="product-page-header">
            <span><Link to="/" style={{fontSize:'20px'}}>HOME</Link>  / <Link to={`/products/${category}`} style={{fontSize:'20px'}}>{category.toUpperCase()} </Link> / <span style={{fontWeight:500,fontSize:'20px'}}>{title}</span></span>
        </div>
        <div className="product-desc-container">
            <div className="product-desc-items">
                <img src={image} style={{ height: "400px", width: "400px auto" }} alt='product-img'></img>
            </div>
            <div className="product-desc-items">
                <div className="title">{title}</div>
                <div className="price">
                <div className="discounted-price">
                        <BiDollar  />{price}
                    </div>
                    <div className="real-price">
                        <BiDollar />{(price * 1.2).toFixed(2)} 
                    </div>
                    <span className="discount">20% Off</span>
                </div>
                <div className="stars">
                    <AiFillStar color='red' /><AiFillStar color='red' /><AiFillStar color='red' /><AiFillStar color='red' /><IoIosStarOutline /> 4 Reviews</div>

                <div className="description">{description}</div>
                <div className="size-quantity">
                    <div className="size">
                        <p>Size</p>
                        <select name='selectedOption' onChange={setSize} >
                            {options.map(i => i === size ? (
                                <option value={i} selected>
                                    {i}
                                </option>
                            ) : (<option value={i}>{i}</option>))}
                        </select>
                    </div>
                    <div className="quantity">
                        <p>Quantity</p>
                        <input type="number" value={quantity} onChange={onInputChange}></input>
                    </div>
                </div>
                <div className="hr-line"></div>
                <div className="buttons">
                    
                    <button className="cart-button" onClick={handleAddToCart}><BiShoppingBag /> &nbsp;Add to Cart</button>
                    <button className="wish-button" onClick={handleAddToWishList}> <BsHeartFill /> &nbsp;WishList</button>
                </div>


            </div>
        </div>
        </>
    )
}

export default ProductDescCard