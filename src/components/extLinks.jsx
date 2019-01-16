import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ExtLinks = function() {
  <ul>
    <li>
      <Link exact to="/">
        Home
      </Link>
    </li>
    <li>
      <a href="https://duckduckgo.com/">DuckDuckgo</a>
    </li>
    <li>
      <a href="https://github.com/1A1eks/rpg-game">Github</a>
    </li>
    <li>
      <a href="https://www.google.com/">google</a>
    </li>
    <li>
      <Link exact to="/profile">
        Profile
      </Link>
    </li>
    <li>
      <Link exact to="/settings">
        Settings
      </Link>
    </li>
  </ul>;
};

export default ExtLinks;
