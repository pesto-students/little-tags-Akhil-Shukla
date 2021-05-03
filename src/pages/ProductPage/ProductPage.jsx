import React from 'react';
import Footer from '../../components/Footer/Footer';
import Products from '../../components/Products/Products';
import './styles.scss'

export default function ProductPage() {

    return (
        <>
            <div className="product-container">
                <div className="product">  <Products /></div>
                <div className="footer"><Footer /></div>
            </div>


        </>
    )
}