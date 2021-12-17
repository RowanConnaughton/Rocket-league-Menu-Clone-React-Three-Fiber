import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from '@react-three/drei'

import './index.scss';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader/>
  </BrowserRouter>,
  document.getElementById('root')
);

