import React from "react";
import { Link } from "react-router-dom";
import { BiNetworkChart } from "react-icons/bi";
import "../../GlobalStyle/CommonCss.css";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="navbar primary-font  w-[98%] mx-auto">
        <div className="navbar-start">
          <Link className="flex items-center">
            <p className="mr-2  bg-primary/20 p-2 rounded-lg   normal-case">
              <BiNetworkChart className="text-2xl text-primary" />
            </p>
            <p className="primary-font text-xl font-semibold">Twitch</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="input w-[400px] h-[40px] bg-primary/20"
          />
        </div>
        <div className="navbar-end">
          <div className="hidden md:block">
            <Link className="mx-2 btn text-primary btn-ghost">Media</Link>
            <Link className="mx-2 btn text-primary btn-ghost">Message</Link>
            <Link className="mx-2 btn text-primary btn-ghost">About</Link>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0}>
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            ></ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            ></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
