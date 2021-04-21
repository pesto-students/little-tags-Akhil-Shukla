import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import ProductCard from '../Products/ProductCard';

import { removeFromWishList } from '../../Actions/WishlistActions';

import './styles.scss';

export default function WishList(){

    const wishListStore = store.getState().wishListState.items;
    const [wishlistItems, setWishListItems] = useState([]);

    useEffect(() => {
        if(wishListStore){
            setWishListItems(wishListStore);
        }
    },[wishListStore]);

    const handleRemoveFromWishist = (id) => {
        store.dispatch(removeFromWishList(id));
        setWishListItems(store.getState().wishListState.items);
      }

    if(wishlistItems.length === 0){
        return(
            <span> Your Wishlist is Empty <Link to="/"> click here</Link> to shop</span>
        )
    }

    return(
        <div className="wishlist-container">
            <div className="wishList-header">
                <span>My WishList</span>
                <br/>
                <span className="product-count">{wishlistItems.length} Product{wishlistItems.length>1?'s':null}</span>
            </div>
            <div className="wishList-body">
                {wishlistItems.map(({id,title, price,image, category}) => (
                    <div className="wishlist-row" key={id}>
                        <ProductCard id={id} title={title} price={price} image={image} category={category} isWishList={true} handleRemoveFromWishist={handleRemoveFromWishist} />
                    </div>
                ))}
            </div>
        </div>
    )
}