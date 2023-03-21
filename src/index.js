
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import * as React from 'react'
import App from '../src/components/App';
import store from '../src/store';
import { BrowserRouter } from 'react-router-dom';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
    <App />
    
  </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);