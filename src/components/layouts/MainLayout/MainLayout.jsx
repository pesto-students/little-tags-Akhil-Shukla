import React, {useState,useContext} from 'react';
import Header from '../../header/Header';
import SignIn from '../../Signin/Signin';
import ProductDescription from '../../productDescription/ProductDescription'
import FirebaseContext from '../../../firebase/context';
import './styles.scss';

const MainLayout = ({children}) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showLogo, setShowLogo] =useState(false);
    const firebase= useContext(FirebaseContext);
    const [showProduct,setShowProduct] = useState(false);
    

    const manageSigInModal = () => {
        setShowSignIn(!showSignIn);
    }

    const manageLogo = () => {
        setShowLogo(!showLogo);
    }

    const manageProduct = () => {
        setShowProduct(!showProduct);
        console.log('manageproduct')
        console.log(showProduct);
    }

    const handleSignOut = () => {
        firebase.doSignOut();
        manageLogo();
      };

    return(
        <div className={`mainLayout-div layout-${showSignIn}`}>
            
            <Header manageSigInModal={manageSigInModal} showSignIn={showSignIn} showLogo={showLogo} handleSignOut={handleSignOut}  />
            
            <div className="main">
            
                {children}
                
            </div>
            
            {showSignIn?<SignIn manageSigInModal={manageSigInModal} showSignIn={showSignIn} manageLogo={manageLogo} />:null}
            
           {showProduct?<ProductDescription manageProduct={manageProduct} />:null}

        </div>
        
        
    );
}

export default MainLayout;