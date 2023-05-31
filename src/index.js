import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import store from './mobxStore';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
