import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import LeftNavbar from "../Pages/Shared/LeftNavbar";
import RightNav from "../Pages/Shared/RightNavbar";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-3">
          <LeftNavbar />
        </div>
        <div className="col-span-6">
          <Outlet />
        </div>
        <div className="col-span-3">
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Root;
