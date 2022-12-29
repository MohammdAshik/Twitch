import React from "react";
import "../../GlobalStyle/CommonCss.css";
import { BsEmojiSmile } from "react-icons/bs";

const CreatePost = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center">
        <h4 className="font-semibold primary-font">Create Post</h4>
        <select className="ml-3 text-gray-400 text-[12px]">
          <option disabled selected>
            Public
          </option>
          <option>Friends</option>
          <option>Only Me</option>
        </select>
      </div>
      <form>
        <div className="my-2 flex items-center">
          <input
            type="file"
            class="custom-file-input w-[60px] mr-1 border rounded-md"
          />
          <p className="text-gray-400 border p-1 rounded-md flex items-center">
            <BsEmojiSmile className="mr-1" />
            Feelings & Activity
          </p>
        </div>
        <input
          type="text"
          placeholder="Write something here..."
          className="input input-bordered mr-2 w-[100%] md:w-[80%] my-2 border-0 bg-primary/10 inline"
        />
        <button className="btn btn-primary w-full md:w-auto lg:w-auto text-white">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
