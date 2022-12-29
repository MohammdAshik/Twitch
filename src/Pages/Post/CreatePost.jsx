import React, { useState } from "react";
import "../../GlobalStyle/CommonCss.css";
import { BsEmojiSmile } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { BsImages } from "react-icons/bs";

const CreatePost = () => {
  const [photo, setPhoto] = useState("");
  const { register, handleSubmit } = useForm();

  const handleAddPhoto = () => {
    setPhoto("added");
  };

  const onSubmit = (data) => {
    const image = data.image;

    const status = data.status;
    if (image.length === 0 && status.length === 0) {
      return console.log("working");
    }
  };
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center">
        <h4 className="font-semibold primary-font">Create Post</h4>
        <select className="ml-3 text-gray-400 text-[12px]">
          <option>Public</option>
          <option>Friends</option>
          <option>Only Me</option>
        </select>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <div className=" flex items-center">
            <input
              type="file"
              onClick={handleAddPhoto}
              className="custom-file-input w-[60px] mr-1 border rounded-md"
              {...register("image")}
            />
            <p className="text-gray-400 border p-1 rounded-md flex items-center">
              <BsEmojiSmile className="mr-1" />
              Feelings & Activity
            </p>
          </div>
        </div>
        {photo && (
          <p className="text-lg my-1 flex items-center">
            <BsImages className="text-2xl mr-1" /> Photo added Successfull
          </p>
        )}
        <input
          type="text"
          {...register("status")}
          placeholder="Write something here..."
          className="input input-bordered mr-2 w-[100%] md:w-[80%] my-2 border-0 bg-primary/10 inline"
        />

        <input
          type="submit"
          value="Post"
          className="btn btn-primary w-full md:w-auto lg:w-auto text-white"
        />
      </form>
    </div>
  );
};

export default CreatePost;
