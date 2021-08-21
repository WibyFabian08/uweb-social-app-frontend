import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useDispatch } from "react-redux";

import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import { getUser } from "../redux/action/userAction";

const PostCard = ({
  data,
  handleLike,
  handleDelete,
  showDelete,
  setShowDelete,
  deleteRef,
}) => {
  const [user, setUser] = useState(null);
  const [ACTIVEUSER, setACTIVEUSER] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(data.userId, setUser));

    const dataUser = JSON.parse(localStorage.getItem("user"));
    setACTIVEUSER(dataUser);
  }, [dispatch, setUser, data.userId]);

  if (!data) {
    return (
      <div
        className="w-full mb-5 rounded-lg"
        style={{ backgroundColor: "#242526" }}
      >
        <div className="flex items-center justify-between p-5">
          <h2 className="text-white">Belum Ada Postingan</h2>
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-full mt-5 mb-5 rounded-lg"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="relative flex items-center justify-between p-5">
        <Link to={`profile/${user && user?.username}`}>
          <div className="flex items-center">
            <div
              className="overflow-hidden rounded-full"
              style={{ width: 50, height: 50 }}
            >
              <img
                src={
                  user
                    ? `http://localhost:3000/${user && user.profilePicture}`
                    : ""
                }
                className="object-cover w-full h-full"
                alt="profile"
              />
            </div>
            <div className="ml-3">
              <h2 className="text-white">
                {user ? user.username : "username"}
              </h2>
              <p className="text-sm text-gray-400">
                {data ? format(data.createdAt) : ""}
              </p>
            </div>
          </div>
        </Link>
        <MoreHorizTwoToneIcon
          style={{ color: "white", cursor: "pointer" }}
          fontSize="large"
          onClick={() => setShowDelete(!showDelete)}
        ></MoreHorizTwoToneIcon>
        {ACTIVEUSER && ACTIVEUSER._id === data.userId && (
          <div
            ref={deleteRef}
            className="absolute z-30 px-4 py-2 transition-all duration-300 ease-in-out right-14 -top-2"
            onClick={() => handleDelete(data)}
            style={{
              backgroundColor: "#4a4a4a",
              display:
                showDelete && user && user._id === data.userId
                  ? "block"
                  : "none",
              cursor: "pointer",
            }}
          >
            <h2 className="text-white">Hapus Postingan</h2>
          </div>
        )}
      </div>
      <div className="w-full">
        <div className="px-5">
          <p className="mb-2 text-white">{data ? data.body : "post body"}</p>
        </div>
        <img
          src={data ? `http://localhost:3000/${data.image}` : ""}
          alt="post"
          className="object-cover w-full"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <div>
            <ThumbUpAltIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ThumbUpAltIcon>
            <span className="mt-1 ml-2 text-gray-400">
              {data ? data.likes.length : ""}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              {data ? data.likes.length : ""} Orang menyukai postingang
            </p>
          </div>
        </div>
        <div style={{ border: "0.025px solid gray" }} className="w-full"></div>
        <div className="flex items-center justify-between mt-3">
          <div
            className="flex justify-center w-1/3"
            style={{ cursor: "pointer" }}
            onClick={() => handleLike(data)}
          >
            <ThumbUpAltIcon
              style={{
                color: data?.likes.includes(ACTIVEUSER._id)
                  ? "skyblue"
                  : "white",
              }}
              fontSize="small"
            ></ThumbUpAltIcon>
            <span className="ml-2 text-white">Suka</span>
          </div>
          <div className="flex justify-center w-1/3">
            <ChatBubbleOutlineOutlinedIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ChatBubbleOutlineOutlinedIcon>
            <span className="ml-2 text-white">Komentar</span>
          </div>
          <div className="flex justify-center w-1/3">
            <ReplyOutlinedIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ReplyOutlinedIcon>
            <span className="ml-2 text-white">Bagikan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
