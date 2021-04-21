import React from 'react';
import Footer from '../../components/Footer/Footer';
import WishList from '../../components/WishList/WishList';

export default function WishListpage(){
    return(
        <div className="wishList">
            <WishList />
            <Footer />
        </div>
    )
}