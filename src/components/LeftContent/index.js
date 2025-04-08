import React from "react";
import "./left-content.css";
import LaunchingSoon from "./LaunchingSoon";

const Legacy = () => (
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
  </div>
);

export default function LeftContent() {
  return (
    <div className="left-content-section">
      <Legacy />
    </div>
  );
}
