import React, { useEffect } from "react";
import AppNav from "./AppNav";
import Sidenav from "./Sidenav";
import AllUsers from "../Redux/AllUsers";
import { useSelector } from "react-redux";

const Messages = () => {

  const {fetchedUser} = useSelector((state)=> state.AllUsers);
  const userName = fetchedUser?.user.username
  const Welcomemessage = fetchedUser?.message
  const date = fetchedUser?.user.date
  const Time = fetchedUser?.user.time
  const message = `Hi, ${userName}! Welcome to Ultimate microfinance bank We're glad to have you on board.`;


  useEffect(() => {
    if (userName) {
      // Perform any necessary actions for the current user
    }
  }, [message]);

  return (
    <div>
      <AppNav />
      <div className="row w-100 h-100">
        <div className="col-12 col-sm-3 co-md-3 ">
          <Sidenav />
        </div>
        <div className="col-9">
          <h1>Messages</h1>
          <div className="p-2 bg-light rounded-2" style={{position : "relative"}}>
            <h6 className=""> Welcome Mesage</h6>
            <p className="text-secondary "> {message} {Welcomemessage}</p>
            <p>{Time}</p>
            <p style={{position : "absolute", right: "4%", bottom :"-10px"}}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
