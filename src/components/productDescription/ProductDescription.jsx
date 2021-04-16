import React from 'react'

function ProductDescription({manageProduct}) {
    return (
        <div className="product-description-modal">
            <div className="modal-container">
                <h1>this must be visbible</h1>
                <div className="modal-header">
                    <span onClick={manageProduct}>close</span>
                </div>
            
            </div>
        
        </div>
    )
}

export default ProductDescription
