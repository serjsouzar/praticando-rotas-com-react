import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" exact={true} element={<App/>}/>
        <Route path="/sobre" exact={true} element={<Sobre/>}/>
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
