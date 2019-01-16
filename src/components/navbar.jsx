import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = function() {
  return (
    <ul>
      <li>
        <Link exact to="/place">
          Main Square
        </Link>
      </li>
      <li>
        <Link exact to="/place/potions">
          PotionShop
        </Link>
      </li>
      <li>
        <Link exact to="/place/smith">
          Smith
        </Link>
      </li>
      <li>
        <Link exact to="/place/people">
          notable~npc's
        </Link>
      </li>
      <li>
        <Link exact to="/map">
          MAP
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
