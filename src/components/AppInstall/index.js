import React from "react";
import { EventEmitter } from "../../EventEmitter";
import "./app-install.css";

export function AppInstall() {
  const initiate = () => {
    console.log("Initiate");
    const appInstallEvent = EventEmitter.get('installEvent')
    appInstallEvent.prompt();
    appInstallEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        localStorage.setItem('appInstall:status', true)
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };
  console.log(EventEmitter.get('installEvent'), EventEmitter.get('shouldDisplay'))
  return EventEmitter.get('installEvent') && EventEmitter.get('shouldDisplay') ? (
    <div className="appInstall wrapper">
      <div>
        Add this app to your HomeScreen for quick access and share files more
        easily.
      </div>
      <div className="appInstall button" onClick={initiate}>Add To HomeScreen</div>
    </div>
  ) : null
}
