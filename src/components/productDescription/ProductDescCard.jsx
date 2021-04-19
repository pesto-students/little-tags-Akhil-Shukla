import React, { useState } from 'react';
import { BiDollar, BiShoppingBag } from "react-icons/bi";
import { AiFillStar } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs'
import { IoIosStarOutline } from "react-icons/io";
import './styles.scss'

function ProductDescCard(props) {
    const { title, price, image, category, description } = props;
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(0);
    const options = ['SM', 'M', 'L', 'XL']
    const onInputChange = event => setQuantity(event.target.value)
    console.log(size)
    console.log(quantity)
    return (
        <div className="product-desc-container">
            <div className="product-desc-items">
                <img src={image} style={{ height: "400px", width: "400px auto" }} alt='product-img'></img>
            </div>
            <div className="product-desc-items">
                <div className="title">{title}</div>
                <div className="price">
                    <div>
                        <BiDollar color='blue' size='20px' />{price}
                    </div>
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

                <div className="buttons">
                    <hr></hr>
                    <button className="cart-button"><BiShoppingBag /> &nbsp;Add to Cart</button>
                    <button className="wish-button"> <BsHeartFill /> &nbsp;WishList</button>
                </div>


            </div>




        </div>
    )
}

export default ProductDescCard