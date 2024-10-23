import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import store from '../src/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
