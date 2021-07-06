import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './context';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Schoolbell-Regular.ttf';
import ReactFavicon from 'react-favicon';
import FavIcon from './assets/media/favicon.ico';

ReactDOM.render(
  <React.StrictMode>
    <ReactFavicon url={ FavIcon } />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
