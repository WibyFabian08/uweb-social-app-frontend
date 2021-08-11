import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import VideoCallIcon from "@material-ui/icons/VideoCall";

import profile from "../assets/images/profile.jpg";

const RightSidebar = () => {
  return (
    <div className="w-3/12 mt-5">
      <div className="flex items-center justify-between px-5">
        <div>
          <h2 className="text-white font-bold text-1xl">Kontak</h2>
        </div>
        <div className="flex items-center justify-end mr-4">
          <div className="px-2">
            <VideoCallIcon style={{ color: "white" }}></VideoCallIcon>
          </div>
          <div className="px-2">
            <SearchIcon style={{ color: "white" }}></SearchIcon>
          </div>
          <div className="px-2">
            <MoreHorizTwoToneIcon
              style={{ color: "white" }}
            ></MoreHorizTwoToneIcon>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <div className="flex items-center mb-5">
          <div className="relative">
            <div
              style={{ height: 10, width: 10 }}
              className="bg-green-500 rounded-full absolute z-10 bottom-0 right-0"
            ></div>
            <img
              src={profile}
              width={30}
              className="rounded-full object-cover"
              alt="profile"
            />
          </div>
          <h2 className="text-white text-sm font-bold ml-2 truncate ...">
            Wiby Fabian Rianto
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
