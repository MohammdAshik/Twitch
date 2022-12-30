import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const NewsFeed = () => {
  return (
    <div>
      <CreatePost />
      <Posts />
    </div>
  );
};

export default NewsFeed;
