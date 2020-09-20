import React from 'react';
import './App.css';
import LeftContent from './components/LeftContent';
import Main from './components/Main';
import Header from './components/Header';
import Wave from './components/wave';
import { User } from './User';

User.login()



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-wrapper">
        <LeftContent/>
        <Main/>
      </div>
      <div style={{height: 30}}>
        <Wave/>
      </div>
    </div>
  );
}

export default App;
