import React, { useState , useEffect , useRef } from 'react';
import './styles.scss';


function AddressDetails({ manageAddress }) {
    const inputref = useRef();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [defaultAddress, setDefaultAddress] = useState(false);
    const [daddress, setDadress] = useState([]);

    const onNameChange = event => setName(event.target.value);
    const onPhoneChange = event => setPhoneNumber(event.target.value);
    const onAddressChange = event => setAddress(event.target.value);
    const onDefaultChange = event => setDefaultAddress(event.target.value);

    const aid = Math.random().toString(16).replace("0", "addressID")

    const addNewAddress = e => {
        if (name.length === 0 || phoneNumber.length === 0 || address.length === 0) {
            return
        } else {
            e.preventDefault();
            const data = {
                id: aid,
                name,
                phoneNumber,
                address,
                defaultAddress
            }
            setDadress(daddress.push(data));
            let temp = JSON.parse(localStorage.getItem('address'));
            temp.push(data);
            localStorage.setItem('address', JSON.stringify(temp));
            manageAddress();
        }



    }

    useEffect(() => {
            inputref.current.focus();
    }, [])
    



    

    return (
        <div className="address-detail-container">
            <h1>Add new address</h1>
            <hr></hr>

            <form>

                <div className="inp-fields" required>
                    <p>
                        <input type='text' placeholder=" " value={name} onChange={onNameChange} ref={inputref} required />
                        <label>Name</label></p>

                </div>


                <div className="inp-fields">
                    <p>
                        <input type='text' placeholder=" " value={phoneNumber} onChange={onPhoneChange} required />
                        <label>Mobile No</label>
                    </p>
                </div>


                <div className="inp-fields">
                    <p>
                        <input type='text' placeholder=" " value={address} onChange={onAddressChange} required />
                        <label> Address</label>
                    </p>
                </div>

                <div className="inp-fields">
                    <input id="default" type="checkbox" value={defaultAddress} onChange={onDefaultChange}></input>
                    <legend>Make this default</legend>
                </div>


                <div className="inp-fields">
                    <button type="submit" onClick={addNewAddress}>Add Address</button>
                </div>

            </form>


        </div>
    )
}

export default AddressDetails
