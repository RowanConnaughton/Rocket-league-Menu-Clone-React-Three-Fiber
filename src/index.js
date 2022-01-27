import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Loader } from '@react-three/drei'

import { store, persistor} from './redux/store';

import './index.scss';
import App from './App';


const ReduxProvider = ({ children}) => (
  <Provider store={store}>{children}</Provider>
)


ReactDOM.render(
  <ReduxProvider>
    <PersistGate persistor={persistor}>
  <BrowserRouter>
  <Suspense fallback={null}>
    <App />
  </Suspense>
    <Loader/>
  </BrowserRouter>
  </PersistGate>
  </ReduxProvider>
  ,
  document.getElementById('root')
);

