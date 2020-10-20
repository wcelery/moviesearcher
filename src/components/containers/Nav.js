import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <h3>logo</h3>
      <div className="nav-links">
        <Link to="/search">
          <li>some link</li>
        </Link>
        <li>another link</li>
      </div>
    </div>
  );
}
