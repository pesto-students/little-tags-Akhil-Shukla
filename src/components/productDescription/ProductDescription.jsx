import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import productsArr from '../../localData/Products'; 
import ProductDescCard from './ProductDescCard'

function ProductDescription({manageProduct}) {
    const {productId,category} = useParams();
    const [filteredProduct,setFilteredProduct] = useState([]);
    const [showSize, setShowSize] = useState(false);
    

    useEffect(() => {
        setFilteredProduct(productsArr.filter((product) => {
            return (product.id === Number(productId));
        }));   
        if(category === 'womenClothing' || category === 'menClothing'){
            setShowSize(true)
        } 
    },[productId,category])

    // const {id,title,price,image,category,description} = filteredProduct
    console.log(filteredProduct)
    return (
        <div className="product-discription">
            <div className="pd-container">
                <div>{filteredProduct.map(({id,title,price,image,category,description})=>(
                    <ProductDescCard id={id} title={title} price={price} image={image} category={category} description={description} showSize={showSize}/> 

                ))}</div>
                </div>
                </div>
    )
}

export default ProductDescription
