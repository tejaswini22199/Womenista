import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


// import postStore from './Store/postStore'
// import Workstore from './Store/Workstore'
import { Postreducer} from './Reducers';

// const store = createStore(Workreducer, compose(applyMiddleware(thunk)));
// console.log("ye hei store")
const store=createStore(Postreducer,compose(applyMiddleware(thunk)));
console.log("ye hei store2")
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}  >
    <App />
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
