import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/newsFeedPost")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // }, []);

  const { data: posts, refetch } = useQuery({
    queryKey: ["like"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/newsFeedPost`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="my-5">
      {posts?.map((post) => (
        <PostCard post={post} key={post._id} refetch={refetch} />
      ))}
    </div>
  );
};

export default Posts;
