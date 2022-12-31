import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StrictMode } from 'react';

const element = (
  <StrictMode>
    <App />
  </StrictMode>
);
const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(element, rootElement);
} else {
  ReactDOM.render(element, rootElement);
}