import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import App from './router/App'; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
