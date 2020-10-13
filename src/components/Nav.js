import React from "react";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

export default function Nav({ setQuery }) {
  return (
    <div className="nav">
      <h3>logo</h3>
      <form className="search-wrapper">
        <div className="search-bar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="svg-filter-grey search-icon"
          >
            <path
              fillRule="evenodd"
              d="M16.3198574,14.9056439 L21.7071068,20.2928932 L20.2928932,21.7071068 L14.9056439,16.3198574 C13.5509601,17.3729184 11.8487115,18 10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 C14.418278,2 18,5.581722 18,10 C18,11.8487115 17.3729184,13.5509601 16.3198574,14.9056439 Z M10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 Z"
            />
          </svg>
          <DebounceInput
            minLength={3}
            debounceTimeout={400}
            onChange={(e) => setQuery(e.target.value)}
            className="search"
            placeholder="Search for ..."
          />
        </div>
        <button className="send-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="svg-filter-grey"
          >
            <path
              fillRule="evenodd"
              d="M4.10514201,11.8070619 L2.74013818,2.2520351 L22.236068,12 L2.74013818,21.7479649 L4.10514201,12.1929381 L4.87689437,12 L4.10514201,11.8070619 Z M5.25986182,5.7479649 L5.89485799,10.1929381 L13.1231056,12 L5.89485799,13.8070619 L5.25986182,18.2520351 L17.763932,12 L5.25986182,5.7479649 Z"
            />
          </svg>
        </button>
      </form>

      <div className="nav-links">
        <Link to="/search">
          <li>some link</li>
        </Link>
        <li>another link</li>
      </div>
    </div>
  );
}
