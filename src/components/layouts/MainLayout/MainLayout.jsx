import React, {useState,useContext} from 'react';
import Header from '../../header/Header';
import SignIn from '../../Signin/Signin';
import FirebaseContext from '../../../firebase/context';
import './styles.scss';

const MainLayout = ({children}) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showLogo, setShowLogo] =useState(false);
    const firebase= useContext(FirebaseContext);

    const manageSigInModal = () => {
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
            <Header manageSigInModal={manageSigInModal} showSignIn={showSignIn} showLogo={showLogo} handleSignOut={handleSignOut} />
            <div className="main">
                {children}
            </div>
            {showSignIn?<SignIn manageSigInModal={manageSigInModal} showSignIn={showSignIn} manageLogo={manageLogo} />:null}
        </div>
        
    );
}

export default MainLayout;