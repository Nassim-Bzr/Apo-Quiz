import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import { UserContextProvider } from 'context/userContext';
// import store from '../src/store';


ReactDOM.render(
  <UserContextProvider>
  <App />
  </UserContextProvider>,
  document.getElementById('root')
);