import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './index.css';
// import {App} from './App';
import '../src/scss/app.scss';
import { App } from './App';
import { MACBetsBody } from './components/MACBetsBody';
import { Accordion } from './components/makeAccordion/Accordion';
import { Navbar } from './components/Navbar';
import { NavbarNavigation } from './components/NavbarNavigation';
import { UnApuesta } from './components/UnApuesta';
import { store } from './store/store';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
