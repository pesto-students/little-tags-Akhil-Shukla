import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import './styles.scss'

function ProductDescCard(props) {
    const {id,title,price,image,category,description} = props;
    return (
        <div className="product-desc-container">
            <div className="product-desc-items">
                <img src={image} style={{height:"400px",width:"400px"}}></img>
            </div>
            <div className="product-desc-items">
                <div className="title">{title}</div>
                <div>price</div>
                <div ><IoIosStarOutline style={{color:'red'}}></IoIosStarOutline></div>
                <div className="description">{description}</div>
                <div className="size-quantity">
                    
                </div>
            </div>
            
        </div>
    )
}

export default ProductDescCard
