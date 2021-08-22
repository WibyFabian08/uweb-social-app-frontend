import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../redux/action/authAction";

import leftSidebar from "../json/leftSidebar";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const LeftSidebar = () => {
  const [USER, setUSER] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  const signOut = () => {
    const data = JSON.parse(localStorage.getItem('user'));
    setUSER(data)
    dispatch(logout(history));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    setUSER(data)
  }, []);

  return (
    <div className="sticky top-0 w-3/12 px-5">
      <div className="flex flex-col h-screen overflow-y-auto sidebar-left">
        <Link to={`/profile/${USER && USER?.username}`}>
          <div className="flex items-center mt-5">
            <div
              className="overflow-hidden bg-white rounded-full"
              style={{ width: 40, height: 40 }}
            >
              <img
                src={
                  USER && USER?.profilePicture
                    ? `http://localhost:3000/${USER && USER?.profilePicture}`
                    : ""
                }
                className="object-cover w-full h-full"
                alt="profile"
              />
            </div>
            <h2 className="text-white font-bold ml-2 truncate ...">
              {USER && USER?.username}
            </h2>
          </div>
        </Link>
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
