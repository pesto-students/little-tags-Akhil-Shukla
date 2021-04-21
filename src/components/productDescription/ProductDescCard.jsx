import React, { useState } from 'react';
import { BiDollar, BiShoppingBag } from "react-icons/bi";
import { AiFillStar } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs'
import { IoIosStarOutline } from "react-icons/io";
import {Link} from 'react-router-dom'
import store from '../../store/index';
import './styles.scss'
import { addToWishList } from '../../Actions/WishlistActions';

function ProductDescCard(props) {
    const { id, title, price, image, description, category, showSize } = props;
    
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const options = ['SM', 'M', 'L', 'XL']
    

    const onInputChange = event => setQuantity(event.target.value)
    
    const handleAddToWishList = () => {
        const data  = {
            id, title, price,image,description, category
        };
        store.dispatch(addToWishList(data,id));

    }

    return (
        <>
        <div className="product-page-header">
            <span><Link to="/">HOME</Link>  / <Link to={`/products/${category}`}>{category.toUpperCase()} </Link> / <span style={{fontWeight:500}}>{title}</span></span>
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
                    {showSize &&
                        <div className="size">
                            <p>Size</p>
                            <select name='selectedOption' onChange={setSize} defaultValue='S' >
                                {options.map(i => i === size ? (
                                    <option key={i} value={i} >
                                        {i}
                                    </option>
                                ) : (<option key={i} value={i}>{i}</option>))}
                            </select>
                        </div> 
                    }
                    <div className="quantity">
                        <p>Quantity</p>
                        <input type="number" value={quantity} onChange={onInputChange}></input>
                    </div>
                </div>

                <div className="buttons">
                    <hr></hr>
                    <button className="cart-button"><BiShoppingBag /> &nbsp;Add to Cart</button>
                    <button className="wish-button" onClick={handleAddToWishList}> <BsHeartFill /> &nbsp;WishList</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDescCard