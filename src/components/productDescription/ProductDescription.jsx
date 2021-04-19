import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import productsArr from '../../localData/Products'; 
import ProductDescCard from './ProductDescCard'

function ProductDescription({manageProduct}) {
    const {productId} = useParams();
    const [filteredProduct,setFilteredProduct] = useState([]);
    console.log(productId)
    

    useEffect(() => {
        setFilteredProduct(productsArr.filter((product) => {
            return (product.id === Number(productId));
        }));   
    },[productId])

    // const {id,title,price,image,category,description} = filteredProduct
    console.log(filteredProduct)
    return (
        <div className="product-discription">
            <div className="pd-container">
                <div>{filteredProduct.map(({id,title,price,image,category,description})=>(
                    <ProductDescCard id={id} title={title} price={price} image={image} category={category} description={description}/> 

                ))}</div>
                </div>
                </div>
    )
}

export default ProductDescription
