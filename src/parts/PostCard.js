import React from "react";
import { Link } from "react-router-dom";

import profile from "../assets/images/profile.jpg";
import post from "../assets/images/post.jpg";

import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";

const PostCard = () => {
  return (
    <div
      className="mb-5 w-full rounded-lg"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <img
            src={profile}
            width={50}
            height={30}
            className="object-cover rounded-lg"
            alt="profile"
          />
          <div className="ml-3">
            <h2 className="text-white">Wiby Fabian Rianto</h2>
            <p className="text-gray-400 text-sm">1 Jam</p>
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
          <p className="text-white mb-2">
            Hari ini hari pertama saya pergi magang, saya pergiu mengendarai si
            roda dua
          </p>
        </div>
        <img src={post} alt="post" className="w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <div>
            <ThumbUpAltOutlinedIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ThumbUpAltOutlinedIcon>
            <span className="text-gray-400 ml-2 mt-1">20</span>
          </div>
          <div>
            <p className="text-gray-400 text-sm">20 Orang menyukai postingan</p>
          </div>
        </div>
        <div style={{ border: "0.025px solid gray" }} className="w-full"></div>
        <div className="flex items-center justify-between mt-3">
          <div className="w-1/3 flex justify-center">
            <ThumbUpAltOutlinedIcon
              style={{ color: "white" }}
              fontSize="small"
            ></ThumbUpAltOutlinedIcon>
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
