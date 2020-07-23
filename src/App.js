import React from 'react';
import './App.css';
import LeftContent from './components/LeftContent';
import Main from './components/Main';
import Header from './components/Header';
import Wave from './components/wave';




function App() {
  return (
    <div className="App">
      <Wave/>
      <Header/>
      <div className="app-wrapper">
      <LeftContent/>
      <Main/>
      </div>
    </div>
  );
}

export default App;
