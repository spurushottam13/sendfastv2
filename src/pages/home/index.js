import React from "react";
import LeftContent from "../../components/LeftContent";
import Main from "../../components/Main";
import Header from "../../components/Header";
import Wave from "../../components/wave";
import Icon from "../../Icons";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <a
        href="https://www.errorpulse.io"
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
            &nbsp; &nbsp;Privacy friendly error tracking. &nbsp;
            <Icon.open />
          </div>
          <div className="small-message">
            &nbsp; &nbsp; Privacy friendly error tracking &nbsp;
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
  );
}
