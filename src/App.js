import React from "react";
import "./App.css";
import LeftContent from "./components/LeftContent";
import Main from "./components/Main";
import Header from "./components/Header";
import Wave from "./components/wave";
import { User } from "./User";
import Icon from "./Icons";

User.login();

function App() {
  const wrapperHeight = window.innerHeight - 150;
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <a href="http://jsongist.io/" target="_blank" rel="noopener noreferrer">
          <div className="news-container">
            <div className="news-title">
              &nbsp;
              <span role="img" aria-label="hello">
                ✨
              </span>
              JSONGist.io &nbsp;
            </div>
            <div className="news-message">
              &nbsp; &nbsp;JSON storage service hosted on your Github Gist
              &nbsp;
              <Icon.open />
            </div>
            <div className="small-message">
              &nbsp; &nbsp; Free JSON storage &nbsp;
              <Icon.open />
            </div>
          </div>
        </a>
        <div className="app-wrapper" style={{ height: wrapperHeight }}>
          <LeftContent />
          <Main />
        </div>
        <div style={{ height: 30 }}>
          <Wave />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
