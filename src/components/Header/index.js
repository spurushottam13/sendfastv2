import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header-section">
      <div className="logo-title">
        <span>
          <img className="logo-img" src="/icons/icon-72x72.png" alt="logo" />{" "}
          SendFileOnline.com
        </span>
      </div>
      <div>
        <div>
          {window.location.href.includes("blogs") ? (
            <Link to="/">Home</Link>
          ) : (
            <Link to="/blogs">Blogs</Link>
          )}
        </div>
      </div>
    </div>
  );
}
