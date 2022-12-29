import React from "react";
import { TbSchool } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";

const About = ({ currentUser }) => {
  return (
    <div className="bg-white my-4 p-3 rounded-lg">
      <h3 className="text-lg font-semibold primary-font">About</h3>
      {currentUser?.education && (
        <div className="flex items-center my-2">
          <TbSchool className="text-3xl mr-2 p-1 rounded-md bg-primary/20 text-primary" />{" "}
          <p className="font-semibold">{currentUser?.education}</p>
        </div>
      )}
      {currentUser?.address && (
        <div className="flex items-center my-2">
          <HiLocationMarker className="text-3xl mr-2 p-1 rounded-md bg-primary/20 text-primary" />{" "}
          <p className="font-semibold">{currentUser?.address}</p>
        </div>
      )}
    </div>
  );
};

export default About;
