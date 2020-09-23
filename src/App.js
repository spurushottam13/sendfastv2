import React, { useEffect } from 'react';
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
    
    console.log("ShowAPPInstallBanner")
    console.log(EventEmitter)
    showModal({ 
      component: ({closeModal}) => <AppInstall closeModal={closeModal} appInstallEvent={appInstallEvent} />, 
      autoDisappear: false 
    })
  }

  useEffect(() => {
    EventEmitter.on('appInstall', showAppInstallBanner)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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
