import React, { useState, useEffect } from "react";
import AllUsers from "../Redux/AllUsers";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidenav from "./Sidenav";
import AppNav from "./AppNav";
import {
  fetchingUser,
  fetchingSuccessful,
  fetchingFailed,
} from "../Redux/AllUsers";
import FetchUserByToken from "./FetchUserByToken";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetching, fetchedUser, fetchingError } = useSelector(
    (state) => state.AllUsers
  );
  const Usertoken = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    if (!Usertoken) {
      navigate("/signup");
      alert("User not found, try signing up for a new account");
    } else {
      dispatch(fetchingUser());
      FetchUserByToken(Usertoken)
        .then((response) => {
          dispatch(fetchingSuccessful(response.data));
          setUserData(response.data); // Update the userData state with the fetched data
          console.log(response.data);
        })
        .catch((error) => {
          dispatch(fetchingFailed(error.message));
        });
    }
  }, [Usertoken, navigate, dispatch]);

  return (
    <div>
      <AppNav />
      <div className="w-100  row bg-light">
        <div className="col-12 col-sm-3 co-md-3 ">
          <Sidenav />
        </div>
        <div className="col-12 col-sm-9 col-md-9 d-none d-sm-none d-md-block d-lg-block">
          <h1 className="fw-bolder my-2 mx-3">
            Dashboard <span className="text-secondary fs-3">Control Panel</span>
          </h1>

          <div className="row container ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2 ">
              <div className="card p-3 bbb text-light ">
                <h4>0</h4>
                <h4>Helpdesk Messages</h4>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2">
              <div className="card p-3 bbb text-light">
                <h4>0.00</h4>
                <h4>Total Withdrawal</h4>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2">
              <div className="card p-3 bg-primary text-light">
                <h4>0</h4>
                <h4>Connections</h4>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2">
              <div className="card p-3 bg-primary text-light">
                <h4>0</h4>
                <h4>Total Transactions</h4>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2">
              <div className="card p-3 bbb text-light">
                <h4>0</h4>
                <h4>Total Deposits</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
