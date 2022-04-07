import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducer from './reducers/combinedReducer';

// export const store = createStore(
//   combinedReducer
//   // composeWithDevTools(applyMiddleware(ServerMiddleware)) // middleware
// );

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Home />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();