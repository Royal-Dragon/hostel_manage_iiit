import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-k81iu1d6jrcfm8wr.us.auth0.com"
  clientId="60e1Do6IvSPrMe0osOMMG3FRuggIYID5"
  redirectUri={window.location.origin}
>
    <App />
  </Auth0Provider>,
  document.getElementById("root")

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
