import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import profile from "../assets/images/profile.jpg";

import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import { useSelector } from "react-redux";

const PostCard = ({
  data,
  handleLike,
  handleDelete,
  showDelete,
  setShowDelete,
}) => {
  const [user, setUser] = useState(null);
  const ACTIVEUSER = useSelector((state) => state.userState);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${data ? data.userId : ""}`)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  }, [data]);

  const formatedDate = new Date(data ? data.createdAt : "").toDateString();

  if (data.l) {
    return (
      <div
        className="mb-5 w-full rounded-lg"
        style={{ backgroundColor: "#242526" }}
      >
        <div className="flex justify-between items-center p-5">
          <h2 className="text-white">Belum Ada Postingan</h2>
        </div>
      </div>
    );
  }
  return (
    <div
      className="mb-5 w-full rounded-lg"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="flex justify-between items-center p-5 relative">
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
                    : profile
                }
                className="object-cover w-full h-full"
                alt="profile"
              />
            </div>
            <div className="ml-3">
              <h2 className="text-white">
                {user ? user.username : "username"}
              </h2>
              <p className="text-gray-400 text-sm">
                {data ? formatedDate : ""}
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
            className="absolute z-30 right-14 -top-2 px-4 py-2 transition-all duration-300 ease-in-out"
            onClick={() => handleDelete(data)}
            style={{
              backgroundColor: "#4a4a4a",
              display: (showDelete) && (user && user._id === data.userId) ? "block" : "none",
              cursor: "pointer",
            }}
          >
            <h2 className="text-white">Hapus Postingan</h2>
          </div>
        )}
      </div>
      <div className="w-full">
        <div className="px-5">
          <p className="text-white mb-2">{data ? data.body : "post body"}</p>
        </div>
        <img
          src={data ? `http://localhost:3000/${data.image}` : ""}
          alt="post"
          className="w-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <div>
            <ThumbUpAltIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ThumbUpAltIcon>
            <span className="text-gray-400 ml-2 mt-1">
              {data ? data.likes.length : ""}
            </span>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              {data ? data.likes.length : ""} Orang menyukai postingan
            </p>
          </div>
        </div>
        <div style={{ border: "0.025px solid gray" }} className="w-full"></div>
        <div className="flex items-center justify-between mt-3">
          <div
            className="w-1/3 flex justify-center"
            style={{ cursor: "pointer" }}
            onClick={() => handleLike(data)}
          >
            <ThumbUpAltIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ThumbUpAltIcon>
            <span className="text-white ml-2">Suka</span>
          </div>
          <div className="w-1/3 flex justify-center">
            <ChatBubbleOutlineOutlinedIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ChatBubbleOutlineOutlinedIcon>
            <span className="text-white ml-2">Komentar</span>
          </div>
          <div className="w-1/3 flex justify-center">
            <ReplyOutlinedIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ReplyOutlinedIcon>
            <span className="text-white ml-2">Bagikan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
