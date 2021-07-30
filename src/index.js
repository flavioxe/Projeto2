import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './components/UserList'
// import Teste from './components/Teste'

const rootDiv = document.getElementById('root');

ReactDOM.render(
  <div>
    {/* <Teste /> */}
    <UserList />
  </div>,
  rootDiv);

