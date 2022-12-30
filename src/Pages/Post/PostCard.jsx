import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const PostCard = ({ post, refetch }) => {
  const { photoURL, status, user, _id, like } = post;

  const handleLIke = (id) => {
    fetch(`http://localhost:5000/like/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };
  return (
    <div className="my-5 relative bg-white p-4 rounded-lg shadow-lg">
      <Link className="absolute top-2 btn btn-primary btn-outline btn-xs right-2">
        Details
      </Link>
      {/* user avater and name  */}
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={user?.profile_picture} alt="" />
          </div>
        </div>
        <div className="mx-3">
          <p className="primary-font font-semibold">{user?.name}</p>
          <p className="text-[12px]">{user?.name}</p>
        </div>
      </div>
      {/* post */}
      <div>
        {status && (
          <div>
            <p className="my-3 text-lg">{status}</p>
          </div>
        )}
        {photoURL && (
          <div className="my-2">
            <img className="w-full" src={photoURL} alt="" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between my-3">
        <button
          onClick={() => handleLIke(_id)}
          className="flex items-center bg-primary/10 p-1 px-2 rounded text-primary"
        >
          <span className="flex items-center mr-1">
            <FcLike className="mr-2" /> Like
          </span>{" "}
          {like ? like : 0}
        </button>
        <p className="text-primary">Comment 0</p>
      </div>

      {/* add comment */}
      <form>
        <input type="text" className="input bg-primary/20 h-[40px] w-[80%]" />
        <input
          type="submit"
          value="Comment"
          className="bg-primary text-white rounded-lg px-2 text-lg primary-font ml-[2%] h-[40px] "
        />
      </form>
    </div>
  );
};

export default PostCard;
