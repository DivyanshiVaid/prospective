import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {prospectsReducer} from './Redux/Reducer/prospectsReducer'

const commonReducer = combineReducers({
  prospectsReducer: prospectsReducer,
});

const store = createStore(commonReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


