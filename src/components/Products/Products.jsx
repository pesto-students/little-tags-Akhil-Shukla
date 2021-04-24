import React,{ useState, useEffect } from 'react';
import {  useParams } from 'react-router';
import { Link } from 'react-router-dom';
import productsArr from '../../localData/Products'; 
import ProductCard from './ProductCard';
import './styles.scss';

export default function Products(){
    const [filteredProducts, setFilteredProducts] = useState([]);
    const {category} = useParams();
    const [categoryShown, setCategoryShown] = useState(category)
    const filterOptions = [`Filter`,'All', 'Men', 'Women', 'Jwellery', 'Electronics'];
    const sortingOptions = [`Sort`,'By Price', 'By Name'];

    const sortProducts = (e) => {
        const sortValue = e.target.value;
        switch(sortValue){
            case 'By Price':{const temp = filteredProducts.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
            setFilteredProducts(temp);
            break;}
            case 'By Name': {const temp = filteredProducts.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
            setFilteredProducts(temp);
            break;}
            default:
                console.log('dafault sorting');
        }
    }
    
    const filterProducts = (e) => {
        const filterVal = e.target.value;
        switch(filterVal){
            case`Men` : setFilteredProducts(productsArr.filter((product) => {
                return (product.category.toLowerCase() === 'menclothing');
            }));
            // <Redirect to="/" />
            setCategoryShown('MenClothing');
            break;
            case`Women` : setFilteredProducts(productsArr.filter((product) => {
                return (product.category.toLowerCase() === 'womenclothing');
            }));
            setCategoryShown('WoMenClothing');
            break;
            case`Jwellery` : setFilteredProducts(productsArr.filter((product) => {
                return (product.category.toLowerCase() === 'jewellery');
            }));
            setCategoryShown('Jwellery');
            break;
            case`Electronics` : setFilteredProducts(productsArr.filter((product) => {
                return (product.category.toLowerCase() === 'electronics');
            }));
            setCategoryShown('Electronics');
            break;
            default: setCategoryShown(null);setFilteredProducts(productsArr);
        }
    }


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
                <div className="nav-links">
                    <span><Link to="/">HOME</Link> / {categoryShown?categoryShown.toUpperCase():<span>Products</span>}</span>
                    <br/>
                    <span className="product-count">{filteredProducts.length} PRODUCTS</span>
                </div>
                <div className="filters">
                    <div className="filter">
                        <select className="dropdown" onChange={filterProducts} >
                            {filterOptions.map((value,index) => (
                                <option  value={value} key={index}>{value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="sort">
                        <select className="dropdown" onChange={sortProducts} >
                            {sortingOptions.map((value, index) => (
                                <option  value={value} key={index}>{value}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="page-inner">
                {filteredProducts.map(({id,title, price,image}) => (
                    <div className="row" key={id}>
                        <ProductCard id={id} title={title} price={price} image={image} category={category} isWishList={false} />
                    </div>
                ))}
            </div>
        </div>
    )
}