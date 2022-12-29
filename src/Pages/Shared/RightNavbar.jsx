import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const RightNav = () => {
  const [currentUser, setCurrentUser] = useState("");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, [user?.email]);

  return (
    <div className="w-full">
      <div className="bg-white w-full h-[270px] mb-5 p-5 rounded-lg flex flex-col items-center shadow-sm">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={currentUser.profile_picture} alt="" />
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
