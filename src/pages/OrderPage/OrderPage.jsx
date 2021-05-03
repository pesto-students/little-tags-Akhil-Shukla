import React from 'react'
import OrderView from '../../components/Order/OrderView'
import Footer from '../../components/Footer/Footer';
import withAuthorization from "../../Session/withAuthorization";

function OrderPage() {
    
    return (
        <>
        <OrderView/>
        <Footer/>

        </>
    )
}

export default withAuthorization(OrderPage)
