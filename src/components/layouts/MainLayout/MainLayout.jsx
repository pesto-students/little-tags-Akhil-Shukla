import React, {useState,useContext,useEffect} from 'react';
import store from '../../../store';
import Header from '../../Header/Header';
import Modal from '../../Modal/Modal';
import SignIn from '../../Signin/Signin';
import ProductDescription from '../../ProductDescription/ProductDescription'
import FirebaseContext from '../../../firebase/context';
import './styles.scss';


const MainLayout = ({children}) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showLogo, setShowLogo] =useState(false);
    const firebase= useContext(FirebaseContext);
    // const [showProduct,setShowProduct] = useState(false);
    let [cartItemLength,setCartItemLenght]=useState(0);
    let len=store.getState().cartState.items.length;
    

    const setItemLenght = (val) => {
        setCartItemLenght(val);
    }
    

    const manageModal = () => {
        setShowSignIn(!showSignIn);
    }

    const manageLogo = () => {
        setShowLogo(!showLogo);
    }

    // const manageProduct = () => {
    //     setShowProduct(!showProduct);
    //     console.log('manageproduct')
    //     console.log(showProduct);
    // }

    const handleSignOut = () => {
        firebase.doSignOut();
        manageLogo();
      };

    return(
        <div className={`mainLayout-div layout-${showSignIn}`}>
            
            <Header manageSigInModal={manageModal} showSignIn={showSignIn} showLogo={showLogo} handleSignOut={handleSignOut} cartItemLength={cartItemLength} />
            
            <div className="main">
            
                {children}
                
            </div>
            
            {showSignIn?<Modal manageModal={manageModal}><SignIn manageModal={manageModal} showSignIn={showSignIn} manageLogo={manageLogo} /></Modal>:null}
            
           {/* {showProduct?<Modal manageModal={manageProduct}><ProductDescription manageProduct={manageProduct} /></Modal>:null} */}

        </div>
        
        
    );
}

export default MainLayout;