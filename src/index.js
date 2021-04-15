import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import FirebaseContext from './firebase/context';
import Firebase from './firebase/firebase';
import store from './store';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

