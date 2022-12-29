import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineInfoCircle, AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "../../Context/AuthProvider";

const LeftNavbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="w-full">
      <div className=" bg-white rounded-lg shadow-sm mb-6 p-3 px-10">
        <Link to={"/"}>
          <p className="flex items-center pb-1 border-b  font-semibold my-5">
            <HiOutlineHome className="text-gray-400 mx-2" />
            <span className="text-black/70">Home</span>
          </p>
        </Link>
        <Link to={"/profile"}>
          <p className="flex items-center pb-1 border-b  font-semibold my-5">
            <FaRegUserCircle className="text-gray-400 mx-2" />
            <span className="text-black/70">Profile</span>
          </p>
        </Link>
        <Link to={"/"}>
          <p className="flex items-center pb-1 border-b  font-semibold my-5">
            <BiNews className="text-gray-400 mx-2" />
            <span className="text-black/70">News Feed</span>
          </p>
        </Link>
        <Link to={"/profile"}>
          <p className="flex items-center pb-1 border-b  font-semibold my-5">
            <AiOutlineInfoCircle className="text-gray-400 mx-2" />
            <span className="text-black/70">About</span>
          </p>
        </Link>
        <div onClick={() => logout()}>
          <p className="flex items-center pb-1 border-b  font-semibold my-5">
            <AiOutlineLogout className="text-gray-400 mx-2" />
            <span className="text-black/70">Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
