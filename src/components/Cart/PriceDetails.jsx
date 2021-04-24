import React from 'react'

const calculateTotalPrice = itemList => {
    let totalPrice = 0;
    const temp = itemList.map(item => totalPrice + item.price * item.quantity);
    totalPrice = temp.reduce((a, b) => a + b, 0);
    return totalPrice;
  };



function PriceDetails({itemList}) {
    const totalPrice = calculateTotalPrice(itemList);
    return (
        <div>
            <div style={{ fontSize: '20px', paddingTop: '10px' }}>Price Details</div>
                        <div className="p-inner">

                            <div className="p-1">

                                <div>
                                    Total MRP
                                </div>
                                <div>${(totalPrice + (totalPrice * 35) / 100).toFixed(2)}</div>

                            </div>

                            <div className="p-1">

                                <div>
                                    Discount on MRP
                                </div>
                                <div> -${((totalPrice * 35) / 100 - totalPrice).toFixed(2)}</div>

                            </div>

                            <div className="p-1">

                                <div>
                                    Coupon Discount
                                </div>
                                <div>No</div>

                            </div>

                            <div className="hrline"></div>
                            
                            <div className="p-1">

                                <div>
                                    Total
                                </div>
                                <div>${totalPrice.toFixed(2)}</div>

                            </div>
                        </div>
        </div>
    )
}

export default PriceDetails



  
  
  