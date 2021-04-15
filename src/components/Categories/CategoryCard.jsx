import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default function CategoryCard({ id,title,catImg}){
    return(
        <div className="category-card-wrap">
            <div className="category-img" style={{backgroundImage:`url(${catImg})`}}></div>
            <div className="category-name">
                <h3>{title.toUpperCase()}</h3>
            </div>
        </div>
    )
}

CategoryCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    catImg: PropTypes.string.isRequired,
}