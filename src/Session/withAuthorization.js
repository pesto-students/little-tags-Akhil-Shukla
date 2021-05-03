import React, { useEffect, useContext,useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../firebase/context';
// import * as ROUTES from '../../constants/routes';
import Modal from '../components/Modal/Modal'
import SignIn from '../components/Signin/Signin';

const withAuthorization = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);
    const [showSignIn, setShowSignIn] = useState(true);
    const [showLogo, setShowLogo] =useState(false);

    const manageModal = () => {
      setShowSignIn(!showSignIn);
  }
  const manageLogo = () => {
    setShowLogo(!showLogo);
}

    const next = (authUser) => {
      if (!authUser) {
        props.history.push('/');
      }
    };
    const fallback = () => props.history.push('/');
    useEffect(() => {
      firebase.onAuthChangeListener(next, fallback);
    }, []);


  

    return props.authUser  ? (
      <Component  {...props}/>
    ) : (
      <Component  {...props}/>
    );
  };

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  const component1 = connect(mapStateToProps)(NewComponent);
  return withRouter(component1);
  // return withRouter(connect(mapStateToProps)(NewComponent))
};

export default withAuthorization;
