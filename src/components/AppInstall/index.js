import React, { Fragment } from "react";
import "./app-install.css";

export function AppInstall({ closeModal, appInstallEvent }) {
  const initiate = () => {
    closeModal()
    appInstallEvent.prompt();
    appInstallEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  return (
    <Fragment>
      <div className="appInstall close" onClick={closeModal}>&#x292B;</div>
      <div className="appInstall wrapper">
        <img
          src="/icons/icon-72x72.png"
          className="appInstall logo"
          alt="logo"
        />
        <div className="appInstall center">
          <div>
            <span className="appInstall heading">Introducing Lite version</span>
            <br />
            <br />
            <span>
              Add this app to your HomeScreen for quick access and share files
              more easily.
            </span>
          </div>
          <div className="appInstall button" onClick={initiate}>
            Add To HomeScreen
          </div>
        </div>
      </div>
    </Fragment>
  );
}
