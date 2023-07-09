import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div>
      <div className="bg-dark px-3 user_dashboard">
        <Link to="/dashboard">
          <button className="text-light btn btn-dark w-100 rounded-5 p-3 shadow">
            Dashboard
          </button>
        </Link>
        <Link to="/groups">
          <button className="text-light btn btn-dark w-100 rounded-5 mt-4 p-3 shadow">
            Groups
          </button>
        </Link>
        <Link to="/account">
          <button className="text-light btn btn-dark w-100 rounded-5 mt-4 p-3 shadow">
            Account
          </button>
        </Link>
        <Link to="/messages">
          <button className="text-light btn btn-dark w-100 rounded-5 mt-4 p-3 shadow">
            Messages
          </button>
        </Link>
        <button className="text-light btn btn-dark w-100 rounded-5 mt-4 p-3 shadow">
          Settings
        </button>
        <button className="text-light btn btn-dark w-100 rounded-5 mt-4 p-3 shadow">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
