import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const login = () => {};
  return (
    <div>
      <div className="background">
        <div className="shadow"></div>
        <div className="d-flex align-items-center justify-content-between px-5 pt-3 nav">
          <div className="logo"></div>
          <div className="d-flex align-items-center">
            <Link to="/login">
              {" "}
              <button className="login bg-dark ">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-light rounded-5 mx-3">
                Create an account
              </button>
            </Link>
          </div>
        </div>

        <h1 className="w-50 text  m-5">
          Unlock The Power of Thrift and Achieve Your Financial Goals.
        </h1>
        <Link to="/signup"> <button className="btn btn-secondary border rounded-5 px-5 mx-5 py-2">
          Get Started{" "}
          <BsArrowRight style={{ fontWeight: "bolder", marginLeft: "10px" }} />
        </button></Link>
      </div>
    </div>
  );
};

export default LandingPage;
