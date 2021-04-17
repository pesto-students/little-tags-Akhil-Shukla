import React, { useState, useContext } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import FirebaseContext from '../../firebase/context'
import './styles.scss';

export default function Signin({ manageModal, manageLogo }){
    const firebase = useContext(FirebaseContext);
    const [errorMessage, setErrorMessage] = useState('');
    const handleGoogleSignIn = () => {
      firebase
        .doGoogleSignIn()
        .then((authUser) => {
          console.log(authUser);
          window.sessionStorage.setItem('userName', authUser.user.displayName);
          return firebase.user(authUser.user.uid).set({
            email: authUser.user.email,
            username: authUser.user.displayName,
            roles: {},
          });
        })
        .then(() => {
          console.log(window.sessionStorage.getItem('userName'));
          manageLogo();
          manageModal();
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    };

    return(
        <div className="signin">
            <div className="modal-title">
                Log In / Sign Up
            </div>
            <div className="using">
                Using
            </div>
            <div className="google-sigin">
                <span className="google-button" onClick={handleGoogleSignIn}><FcGoogle /> Google</span>
            </div>
            <div className="or">
                Or
            </div>
            <div className="fb-sigin">
                <span className="fb-button"><AiFillFacebook /> Facebook</span>
            </div>
            {errorMessage?<span>{errorMessage}</span>:null}
        </div>
    )
}