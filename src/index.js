import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import App from './App';
import Store from './store/store';

const store = new Store();

export const Context = React.createContext({ store })

ReactDOM.render(
  <Context.Provider value={store}>
    <App />
  </Context.Provider>, 
  document.getElementById('root')
);
