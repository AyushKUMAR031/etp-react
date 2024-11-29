import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoApp from './todo';
const root = ReactDOM.createRoot(document.getElementById('root'));
import './index.css';
root.render(
  <Provider store={store}>
    <TodoApp></TodoApp>
  </Provider>
);
