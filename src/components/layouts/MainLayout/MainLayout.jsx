import React, {useState} from 'react';
import Header from '../../header/Header';
import SignIn from '../../Signin/Signin';
import './styles.scss';

const MainLayout = ({children}) => {
    const [showSignIn, setShowSignIn] = useState(false);

    const manageSigInModal = () => {
        setShowSignIn(!showSignIn);
    }

    return(
        <div className={`mainLayout-div layout-${showSignIn}`}>
            <Header manageSigInModal={manageSigInModal} showSignIn={showSignIn} />
            <div className="main">
                {children}
            </div>
            {showSignIn?<SignIn manageSigInModal={manageSigInModal} showSignIn={showSignIn} />:null}
        </div>
        
    );
}

export default MainLayout;