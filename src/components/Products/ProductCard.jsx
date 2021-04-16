import React from 'react';
import {Link} from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';
import PropTypes from 'prop-types';
import './styles.scss';

export default function ProductCard({id, title, price, image, category}){
    return(
      <Link to="">
        <div className="el-wrapper">
          <div className="box-up">
            <div className="img" style={{backgroundImage:`url(${image})`}}></div>
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">{title}</span>
              </div>
            </div>
          </div>
          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>
            <div className="cart">
              <span className="price"> ${price} </span>
              <span className="add-to-cart">
                <span className="txt"><FaCartPlus /> Add To Cart</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
}

ProductCard.prototype = {
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  price:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired
}