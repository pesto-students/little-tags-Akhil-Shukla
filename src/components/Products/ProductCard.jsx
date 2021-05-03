import React from 'react';
import {Link} from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import PropTypes from 'prop-types';
import './styles.scss';
import store from '../../store/index';
import {addToCart} from '../../Actions/CartActions';


export default function ProductCard({id, title, price, image,description, category,isWishList,handleRemoveFromWishist}){

  const handleAddToCart = () => {
    const data  = {
        id, title, price,image,description, category,size : 'L',quantity : '1'
    };
    store.dispatch(addToCart(data,id));
  }

    return(
        <div className="el-wrapper">
          {
            isWishList
            ? <div className="prod-card-header">
              <span className="close-modal" onClick={()=> handleRemoveFromWishist(id)}><AiOutlineCloseCircle /></span>
            </div>
            : null
          }
        <Link to={`/productsdiscription/${category}/${id}`}>
          <div className="box-up">
            <div className="img" style={{backgroundImage:`url(${image})`}}></div>
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">{title}</span>
              </div>
            </div>
          </div>
          </Link>
          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>
            <div className="cart">
              <span className="price"> ${price} </span>
              <span className="add-to-cart">
                <span className="txt" onClick={handleAddToCart}><FaCartPlus />{isWishList? `  Move To Cart`:`  Add To Cart`}</span>
              </span>
            </div>
          </div>
        </div>     
    )
}

ProductCard.prototype = {
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  price:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired
}
