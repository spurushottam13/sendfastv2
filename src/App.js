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
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <a
          href="https://www.producthunt.com/products/errrorpulse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="news-container">
            <div className="news-title">
              &nbsp;
              <span role="img" aria-label="hello">
                ✨
              </span>
              ErrorPulse.io &nbsp;
            </div>
            <div className="news-message">
              &nbsp; &nbsp;FrontEnd error tracking, at a fraction of cost &nbsp;
              <Icon.open />
            </div>
            <div className="small-message">
              &nbsp; &nbsp; FrontEnd Error tracking &nbsp;
              <Icon.open />
            </div>
          </div>
        </a>
        <div className="app-wrapper">
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
