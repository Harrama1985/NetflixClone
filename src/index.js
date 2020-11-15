import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './GlobalStyles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/Firebase';
ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
