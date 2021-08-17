import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../redux/action/authAction";

import leftSidebar from "../json/leftSidebar";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const LeftSidebar = () => {
  const USER = useSelector((state) => state.userState);

  const history = useHistory();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout(history));
  };
  
  return (
    <div className="w-3/12 sticky top-0 px-5">
      <div className="sidebar-left flex flex-col h-screen overflow-y-auto">
        <div className="flex items-center mt-5">
          <div
            className="overflow-hidden rounded-full"
            style={{ width: 40, height: 40 }}
          >
            <img
              src={
                USER && USER.profilePicture
                  ? `http://localhost:3000/${USER.profilePicture}`
                  : ''
              }
              className="w-full h-full object-cover"
              alt="profile"
            />
          </div>
          <h2 className="text-white font-bold ml-2 truncate ...">
            {USER && USER.username}
          </h2>
        </div>
        {leftSidebar.map((data, index) => {
          return (
            <Link to={data.href} key={index}>
              <div className="flex items-center mt-5" key={index}>
                {data.icon}
                <h2 className="text-white font-bold ml-2 truncate ...">
                  {data.desc}
                </h2>
              </div>
            </Link>
          );
        })}
        <div
          className="flex items-center mt-5"
          style={{ cursor: "pointer" }}
          onClick={() => signOut()}
        >
          <ExitToAppIcon
            style={{ color: "white" }}
            fontSize="large"
          ></ExitToAppIcon>
          <h2 className="text-white font-bold ml-2 truncate ...">Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
