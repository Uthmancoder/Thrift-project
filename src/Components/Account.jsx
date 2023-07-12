import React from "react";
import AppNav from "./AppNav";
import Sidenav from "./Sidenav";
import {FaAngleRight} from 'react-icons/fa'
import AllUsers from "../Redux/AllUsers";
import { useSelector } from "react-redux";

const Account = () => {
  const {fetchedUser} = useSelector((state)=> state.AllUsers)
  const username = fetchedUser?.user.username
  const name = username.toUpperCase()
  return (
    <div>
      <AppNav/>
      <div className="row w-100 h-100">
        <div className="col-12 col-sm-3 co-md-3 ">
          <Sidenav />
        </div>
        <div className="col-9">
          <h1 className="fs-2 m-3">My <span className="fs-3 text-secondary">Account</span></h1>
          <div className="card w-100 shadow  p-2 ">
            <div>
              <h5 className="fw-bolder">{name}</h5>
              <div className=" justify-content-between rounded-2 p-2  bg-primary my-2  d-flex align-items-center w-100">
                <div className="d-grid shadow py-2 px-4 text-center text-light rounded-3 " style={{height :"70px"}} >
                  <h5 className="fw-bolder text-light"> Wallet Balance </h5>
                  <p>₦0.00</p>
                </div>
                <div className="d-grid shadow py-2 text-center text-light rounded-3 px-5" style={{height :"70px"}} >
                  <h5 className="fw-bolder text-light">Group Members </h5>
                  <p>0</p>
                </div>
                <div className="d-grid shadow p-2 text-center text-light rounded-3 " style={{height :"70px"}} >
                  <h5 className="fw-bolder text-light">Successful Payments </h5>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card  shadow mt-4  ">
             <div className="trackPayment m-2 d-flex align-items-center justify-content-around" style={{backgroundColor : "white"}}>
               <p className="fw-bolder text-primary fw-bolder fs-5">Pending payment</p>
               <p className="fw-bolder text-primary fw-bolder fs-5">Defaulted payments</p>
               <p className="fw-bolder text-primary fw-bolder fs-5">Fund Wallet</p>
             </div>
             
             <div className="bg-light d-flex align-items-center justify-content-between py-3 px-5">
               <div className="text-start">
                    <h5>₦0.00</h5>
                    <p>Next transfer</p>
                    <p className="mt-3">Next transfer <FaAngleRight/></p>
                    
               </div>
               <hr className="p-2 line"/>
               <div className="text-start">
                    <h5>₦0.00</h5>
                    <p>Defaulted Payment</p>
                    <p className="mt-3">Defaulted Payment<FaAngleRight/></p>
                    
               </div>
               <hr className="p-2 line2"/>
               <div className="text-start" style={{marginLeft : "-10%"}}>
                    <button className="btn btn-primary">Fund Wallet</button>
                    
               </div>
             </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
