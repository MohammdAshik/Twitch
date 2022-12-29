import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import CreatePost from "../Post/CreatePost";
import About from "./About";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [modalData, setModalData] = useState("");
  const { user } = useContext(AuthContext);

  const { data: currentUser, refetch } = useQuery({
    queryKey: ["updateUser"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user?email=${user.email}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[300px] object-cover rounded-lg"
          src="https://wallpapercave.com/wp/wp10076553.jpg"
          alt=""
        />
        <div className="w-[180px] h-[200px] bg-white absolute top-11 left-11 rounded-lg p-3 flex flex-col items-center">
          <div className="avatar my-3">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={currentUser?.profile_picture} alt="" />
            </div>
          </div>
          <h4 className="primary-font font-semibold">{currentUser?.name}</h4>
          <p className="text-[12px] text-gray-500">{currentUser?.email}</p>

          <label
            onClick={() => setModalData(currentUser)}
            htmlFor="edit-profile"
            className="btn btn-primary btn-xs text-white my-3"
          >
            Edit Profile
          </label>
        </div>
        <div>
          <button className="btn btn-primary btn-outline btn-xs absolute bottom-2 right-3">
            Edit Cover
          </button>
        </div>
      </div>

      {/* user data */}
      {currentUser?.address && <About currentUser={currentUser} />}

      {/* create Post */}
      <CreatePost />

      {/* modal */}
      {modalData && (
        <ProfileModal
          modalData={modalData}
          setModalData={setModalData}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Profile;
