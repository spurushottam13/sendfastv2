import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { EventEmitter } from "../../EventEmitter";
import "./app-install.css";

export function AppInstall() {
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const initiate = () => {
    const appInstallEvent = EventEmitter.get('installEvent')
    setShouldDisplay(false)
    appInstallEvent.prompt();
    appInstallEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        localStorage.setItem('appInstall:status', true)
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  useEffect(() => {
    EventEmitter.on('showAppIntall', () => {
      if(EventEmitter.get('installEvent')){
        setShouldDisplay(true)
      }
    })
  },[])

  return shouldDisplay ? (
    <div className="appInstall wrapper">
      <div>
        Add this app to your HomeScreen for quick access and share files more
        easily.
      </div>
      <div className="appInstall button" onClick={initiate}>Add To HomeScreen</div>
    </div>
  ) : null
}
