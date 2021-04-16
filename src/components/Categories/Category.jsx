import React from 'react';
import categories from '../../localData/Categories';
import {Link} from 'react-router-dom';
import Card from './CategoryCard';
import './styles.scss';

export default function Category(){
    return(
        <div className="category-wrapper">
            <div className="categories-header">
                <h1>CATEGORIES TO SHOP</h1>
            </div>
            <div className="categories-container">
                { categories.map(({id,title,catName,catImg}) => (
                    <div className="category-card" key={id}>
                        <Link to={`/products/${catName}`} >
                            <Card id={id} title={title} catImg={catImg} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}