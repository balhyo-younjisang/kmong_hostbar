import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(element, rootElement);
} else {
  ReactDOM.render(element, rootElement);
}