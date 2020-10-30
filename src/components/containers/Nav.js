import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <h3>logo</h3>
      <div className="nav-links">
        <Link to="/favorites">
          <li>some link</li>
        </Link>
        <Link to="/favorites">
          <li>another link</li>
        </Link>
      </div>
    </div>
  );
}
