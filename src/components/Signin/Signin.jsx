import React, { useState, useContext } from 'react';
import { AiOutlineCloseCircle, AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import FirebaseContext from '../../firebase/context'

import './styles.scss';

<<<<<<< HEAD
export default function SignIn(props) {
  const { manageSigInModal, manageLogo } = props
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
=======
export default function SignIn(props){
    const {manageSigInModal,manageLogo} = props
    const firebase = useContext(FirebaseContext);
  const [ setErrorMessage] = useState('');
>>>>>>> e69263bb4c4c92b9b34ac28352a020b2cbad4020
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
<<<<<<< HEAD
        // props.history.push('/');
        console.log(window.sessionStorage.getItem('userName'));
=======
>>>>>>> e69263bb4c4c92b9b34ac28352a020b2cbad4020
        manageLogo();
        manageSigInModal();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };


  return (
    <div className="signin-modal">
      <div className="modal-container">
        <div className="modal-header">
          <span className="close-modal" onClick={manageSigInModal}><AiOutlineCloseCircle /></span>
        </div>
        <div className="modal-body">
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
        </div>
      </div>
    </div>
  )
}