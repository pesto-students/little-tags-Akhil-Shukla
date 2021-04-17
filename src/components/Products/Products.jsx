import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import productsArr from '../../localData/Products'; 
import ProductCard from './ProductCard';
import './styles.scss';

export default function Products(){
    const [filteredProducts, setFilteredProducts] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        if(category){
            setFilteredProducts(productsArr.filter((product) => {
                return (product.category.toLowerCase() === category.toLowerCase());
            }));
        }
        else{
            setFilteredProducts(productsArr);
        }
    },[category])
    return(
        <div className="container page-wrapper">
            <div className="product-page-header">
                <span><Link to="/">HOME</Link> / {category?category.toUpperCase():<span>Products</span>}</span>
                <br/>
                <span className="product-count">{filteredProducts.length} Products</span>
            </div>
            <div className="page-inner">
                {filteredProducts.map(({id,title, price,image}) => (
                    <div className="row" key={id}>
                       <ProductCard id={id} title={title} price={price} image={image} category={category} />
                    </div>
                ))}
            </div>
        </div>
    )
}