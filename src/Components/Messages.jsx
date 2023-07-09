import React from "react";
import AppNav from "./AppNav";
import Sidenav from "./Sidenav";

const Messages = () => {
  return (
    <div>
      <AppNav />
      <div className="row w-100 h-100">
        <div className="col-12 col-sm-3 co-md-3 ">
          <Sidenav />
        </div>
        <div className="col-9">
            <h1>Messages</h1>
        </div>
      </div>
    </div>
  );
};

export default Messages;
