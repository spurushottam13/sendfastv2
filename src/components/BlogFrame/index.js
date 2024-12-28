import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
export function BlogFrame() {
  return (
    <React.Fragment>
      <Header />
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link to="/blogs">Back to Blogs</Link>
      </div>
    </React.Fragment>
  );
}
