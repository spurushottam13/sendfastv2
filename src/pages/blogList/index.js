import React from "react";
import "./style.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
export function BlogList() {
  return (
    <React.Fragment>
      <Header />
      <div className="BlogList">
        <div>List of Blogs</div>
        <article>
          Welcome to my curated blog list, where I share exciting updates and
          insights about my upcoming SaaS tools. Whether you're a developer,
          entrepreneur, or tech enthusiast, you’ll find valuable content about
          innovative solutions designed to simplify workflows, boost
          productivity, and drive success. Stay tuned for exclusive previews,
          deep dives into features, and behind-the-scenes stories of building
          these tools.
        </article>
        <nav>
          <ol>
            <li>
              <Link to="/blogs/content1">What is Pixels</Link>
            </li>
            <li>
              <Link to="/blogs/content2">Pixel vs. Google Analytic</Link>
            </li>
            <li>
              <Link to="/blogs/content3">Don’t Use Google Analytics</Link>
            </li>
            <li>
              <Link to="/blogs/content4">How to use Pixel</Link>
            </li>
          </ol>
        </nav>
      </div>
    </React.Fragment>
  );
}
