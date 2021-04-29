import React, {useState,useContext} from 'react';
import Header from '../../Header/Header';
import Modal from '../../Modal/Modal';
import SignIn from '../../Signin/Signin';

import FirebaseContext from '../../../firebase/context';
import './styles.scss';


const MainLayout = ({children}) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showLogo, setShowLogo] =useState(false);
    const firebase= useContext(FirebaseContext);
    
    
    

    
    const manageModal = () => {
        setShowSignIn(!showSignIn);
    }

    const manageLogo = () => {
        setShowLogo(!showLogo);
    }

    

    

    const handleSignOut = () => {
        firebase.doSignOut();
        manageLogo();
      };

    return(
        <div className={`mainLayout-div layout-${showSignIn}`}>
            
            <Header manageSigInModal={manageModal} showSignIn={showSignIn} showLogo={showLogo} handleSignOut={handleSignOut}  />
            
            <div className="main"  >
            
            {children}
            
                
                
            </div>
            
            {showSignIn?<Modal manageModal={manageModal} signin={true}><SignIn manageModal={manageModal} showSignIn={showSignIn} manageLogo={manageLogo} /></Modal>:null}
            
           

        </div>
        
        
    );
}

export default MainLayout;