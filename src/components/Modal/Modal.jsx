import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './styles.scss';

export default function SignIn({ children, manageModal, signin, address, error }) {

  return (
    <div className={`modal `}>
      <div className={`modal-container signin-${signin } address-${address} error-${error}`}>
        <div className="modal-header">
          <span className="close-modal" onClick={manageModal}><AiOutlineCloseCircle /></span>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}