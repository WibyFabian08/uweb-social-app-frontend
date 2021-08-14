import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import profile from "../assets/images/profile.jpg";

import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";

const PostCard = ({ data, handleLike }) => {
  const [user, setUser] = useState(null);
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
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <div
            className="overflow-hidden rounded-full"
            style={{ width: 50, height: 50 }}
          >
            <img
              src={
                user ? `http://localhost:3000/${user.profilePicture}` : profile
              }
              className="object-cover w-full h-full"
              alt="profile"
            />
          </div>
          <div className="ml-3">
            <h2 className="text-white">{user ? user.username : "username"}</h2>
            <p className="text-gray-400 text-sm">{data ? formatedDate : ""}</p>
          </div>
        </div>
        <Link to="/">
          <MoreHorizTwoToneIcon
            style={{ color: "white" }}
            fontSize="large"
          ></MoreHorizTwoToneIcon>
        </Link>
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
