import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './scene/home';


ReactDOM.render(
  <Home />,
  document.getElementById('app'),
);

module.hot.accept();
