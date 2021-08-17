import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../redux/action/userAction";

import SearchIcon from "@material-ui/icons/Search";
import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import VideoCallIcon from "@material-ui/icons/VideoCall";


const RightSidebar = () => {
  const dispatch = useDispatch();
  const USERS = useSelector((state) => state.usersState);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="w-3/12 mt-5">
      <div className="flex items-center justify-between px-5 mb-5">
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
      {USERS &&
        USERS.map((data, index) => {
          return (
            <div className="flex flex-col px-5" key={index}>
              <Link to={`/profile/${data ? data.username : ''}`}>
                <div className="flex items-center mb-5">
                  <div className="relative">
                    <div
                      style={{ height: 10, width: 10 }}
                      className="bg-green-500 rounded-full absolute z-10 bottom-0 right-0"
                    ></div>
                    <div
                      className="overflow-hidden rounded-full"
                      style={{ height: 30, width: 30 }}
                    >
                      <img
                        src={
                          data.profilePicture
                            ? `http://localhost:3000/${data.profilePicture}`
                            : ''
                        }
                        className="w-full h-full object-cover"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <h2 className="text-white text-sm font-bold ml-2 truncate ...">
                    {data.username}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default RightSidebar;
