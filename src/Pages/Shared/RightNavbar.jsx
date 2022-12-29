import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const RightNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full">
      <div className="bg-white w-full h-[270px] mb-5 p-5 rounded-lg flex flex-col items-center shadow-sm">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <p className="mt-3 text-xl primary-font font-semibold">
          {user.displayName}
        </p>
        <p className="text-[11px] text-center primary-font">/{user.email}/</p>
        <Link
          to={"/profile"}
          className="my-4 btn btn-sm btn-primary text-white"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default RightNav;
