import React from 'react';
import './App.css';
import LeftContent from './components/LeftContent';
import Main from './components/Main';
import Header from './components/Header';
import Wave from './components/wave';
import { User } from './User';

User.login()

function App() {
  const wrapperHeight = window.innerHeight - 80
  return (
    <React.Fragment>
      <div className="App">
      <Header/>
      <div className="app-wrapper" style={{height: wrapperHeight}}>
        <LeftContent/>
        <Main/>
      </div>
      <div style={{height: 30}}>
        <Wave/>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
