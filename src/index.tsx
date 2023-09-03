import React from 'react';
import ReactDOM from 'react-dom/client';
import {Elements} from "@stripe/react-stripe-js"
import './index.scss';
import App from './App';
import { UserProvider } from './context/user.context';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CategoriesProvider } from './context/categories.context';
import { CartContextProvider } from './context/cart-context';
import {stripePromise} from "./utils/stripe/stripe"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartContextProvider>
          <Elements stripe={stripePromise}>
          <App />
          </Elements>
        </CartContextProvider>
      </CategoriesProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
