
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import productsArr from '../../localData/Products'; 
import ProductDescCard from './ProductDescCard'

function ProductDescription({manageProduct}) {
    const {id} = useParams();
    const [filteredProduct,setFilteredProduct] = useState([]);
    const [imgUrl,setImgUrl] = useState('');

    useEffect(() => {
        setFilteredProduct(productsArr.filter((product) => {
            return (product.id === Number(id));
        }));   
    },[id])

    console.log(filteredProduct)

    return (
        <div className="product-discription">
            <div className="pd-container">
                <div>{filteredProduct.map(({id,title,price,image,category,description})=>(
                    <ProductDescCard id={id} title={title} price={price} image={image} category={category} description={description}/> 
                    
                ))}</div>
                <div className="modal-header">
                    <span onClick={manageProduct}>close</span>
                </div>
            
            </div>
        
        </div>
    )
}

export default ProductDescription
