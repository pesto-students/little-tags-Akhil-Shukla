import React from 'react';
import {BiCurrentLocation} from 'react-icons/bi';
import {FcHome} from 'react-icons/fc';


function AddressCard({id,name,address,defaultAddress,phoneNumber,handleRemoveAddress}) {
    return (
        <div className="addr-detail">
                
            
            <div className="addr-detail-bi">
            <BiCurrentLocation />
            </div>
            <div className="addr-detail-row">
            <div className='addr-detail-data'>
                {name} <FcHome/>
            </div>
            <div className='addr-detail-data-ad'>
                {address}
            </div>
            
            <div className='addr-detail-data-mb'>
                <span>Mobile <b>{phoneNumber}</b> </span>
                <ul>
                    <li>Pay on delivery available</li>
                    <li>{id}</li>
                </ul>
            </div>
            <div className='addr-detail-data-bt'>
                <button  onClick={()=>handleRemoveAddress(id)} >Remove</button>
            </div>
            </div>
            
        </div>
    )
}

export default AddressCard
