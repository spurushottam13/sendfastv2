import React from "react";
import "./left-content.css";
export default function LeftContent() {
  return (
    <div className="left-content-section">
      <div>
        <div className="hello-wrapper">
          Hello{" "}
          <span className="hello-emoji" role="img" aria-label="hello">
            👋{" "}
          </span>
        </div>
        <h1 className="comment zero-margin">
          Now, share files online easily with just 6 digit code
        </h1>
        <div>
          <div>No SignUp &nbsp; No Email &nbsp; No Phone Number</div>
        </div>
        <div className="left-ad-container">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8133095106878922"
            data-ad-slot="6691780714"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
    </div>
  );
}
