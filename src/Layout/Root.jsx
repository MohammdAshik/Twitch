import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import LeftNavbar from "../Pages/Shared/LeftNavbar";
import RightNav from "../Pages/Shared/RightNavbar";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 my-5 gap-4 w-[95%] mx-auto">
        <div className="col-span-2 hidden lg:flex">
          <LeftNavbar />
        </div>
        <div className="col-span-12 md:col-span-7 ">
          <Outlet />
        </div>
        <div className="col-span-3 hidden lg:flex">
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Root;
