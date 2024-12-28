import React from "react";
import "./App.css";
import { User } from "./User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import { BlogList } from "./pages/blogList";
import Blog1 from "./pages/blogList/blog-1";
import Blog2 from "./pages/blogList/blog-2";
import Blog3 from "./pages/blogList/blog-3";
import Blog4 from "./pages/blogList/blog-4";

User.login();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={BlogList} />
        <Route path="/blogs/content1" component={Blog1} />
        <Route path="/blogs/content2" component={Blog2} />
        <Route path="/blogs/content3" component={Blog3} />
        <Route path="/blogs/content4" component={Blog4} />
        <Route path="*" render={Home} />
      </Switch>
    </Router>
  );
}

export default App;
