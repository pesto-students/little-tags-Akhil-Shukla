import React from 'react';
import {AiOutlineCloseCircle, AiFillFacebook} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import './styles.scss';

export default function SignIn({manageSigInModal}){
    return(
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
                        <span className="google-button"><FcGoogle /> Google</span>
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