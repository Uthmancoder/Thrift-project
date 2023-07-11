import React, { useEffect } from "react";
import AppNav from "./AppNav";
import Sidenav from "./Sidenav";
import AllUsers from "../Redux/AllUsers";
import { useSelector } from "react-redux";

const Messages = () => {

  const {fetchedUser} = useSelector((state)=> state.AllUsers);
  const userName = fetchedUser.user.username
  const Welcomemessage = fetchedUser?.message
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
          <div className="card border p-2 bg-light">
            <h1 className=" fs-1 border w-fit text-center inset max-w-fit"> Welcome Mesage</h1>
            <h1 className="text-secondary fs-5"> {message} {Welcomemessage}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
