import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <h3>mvsrchr</h3>
      <div className="nav-links">
        <Link to="/favorites">
          <li>favorites</li>
        </Link>
        <li>another link</li>
      </div>
    </div>
  );
}
