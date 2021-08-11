import React from "react";
import profile from "../assets/images/profile.jpg";
import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";

const ImageList = () => {
  return (
    <div
      className="mb-5 w-full rounded-lg"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-bold text-xl">Foto</h2>
          <MoreHorizTwoToneIcon
            style={{ color: "white" }}
            fontSize="large"
          ></MoreHorizTwoToneIcon>
        </div>
        <div className="flex flex-wrap justify-start mt-5">
          <div className="w-1/5 px-1">
            <img
              src={profile}
              className="w-full object-cover rounded-xl"
              alt="profile"
            />
          </div>
          <div className="w-1/5 px-1">
            <img
              src={profile}
              className="w-full object-cover rounded-xl"
              alt="profile"
            />
          </div>
          <div className="w-1/5 px-1">
            <img
              src={profile}
              className="w-full object-cover rounded-xl"
              alt="profile"
            />
          </div>
          <div className="w-1/5 px-1">
            <img
              src={profile}
              className="w-full object-cover rounded-xl"
              alt="profile"
            />
          </div>
          <div className="w-1/5 px-1">
            <img
              src={profile}
              className="w-full object-cover rounded-xl"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageList;
