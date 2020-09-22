import React from 'react';
import './App.css';
import LeftContent from './components/LeftContent';
import Main from './components/Main';
import Header from './components/Header';
import Wave from './components/wave';
import { User } from './User';
import useModal from './Modal';
import { EventEmitter } from './EventEmitter';
import { AppInstall } from './components/AppInstall';

User.login()



function App() {
  const wrapperHeight = window.innerHeight - 80
  const { showModal, ModalProvider } = useModal()

  const showAppInstallBanner = (appInstallEvent) => {
    showModal({ 
      component: ({closeModal}) => <AppInstall closeModal={closeModal} appInstallEvent={appInstallEvent} />, 
      autoDisappear: false 
    })
  }

  EventEmitter.on('appInstall', showAppInstallBanner)

  return (
    <React.Fragment>
      <ModalProvider/>
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
