import React from "react";
import profile from "../assets/images/profile.jpg";

import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";

const FriendList = () => {
  return (
    <div
      className="mb-5 w-full rounded-lg"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-bold text-xl">Teman</h2>
          <MoreHorizTwoToneIcon
            style={{ color: "white" }}
            fontSize="large"
          ></MoreHorizTwoToneIcon>
        </div>
        <div className="flex flex-wrap items-center justify-start mt-5">
          <div
            className="w-1/2 p-5 border-2 rounded-lg mb-2"
            style={{ border: "0.005px solid gray" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={profile}
                  width={100}
                  className="object-cover rounded-lg"
                  alt="profile"
                />
                <h2 className="text-white font-bold ml-2">
                  Wiby Fabian Rianto
                </h2>
              </div>
              <MoreHorizTwoToneIcon
                style={{ color: "white" }}
                fontSize="large"
              ></MoreHorizTwoToneIcon>
            </div>
          </div>
          <div
            className="w-1/2 p-5 border-2 rounded-lg mb-2"
            style={{ border: "0.005px solid gray" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={profile}
                  width={100}
                  className="object-cover rounded-lg"
                  alt="profile"
                />
                <h2 className="text-white font-bold ml-2">
                  Wiby Fabian Rianto
                </h2>
              </div>
              <MoreHorizTwoToneIcon
                style={{ color: "white" }}
                fontSize="large"
              ></MoreHorizTwoToneIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
