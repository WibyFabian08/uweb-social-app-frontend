import React from "react";
import { Link, useHistory } from "react-router-dom";
import profile from "../assets/images/profile.jpg";
import leftSidebar from "../json/leftSidebar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/authAction";

const LeftSidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout(history));
  };
  return (
    <div className="w-3/12 sticky top-0 px-5">
      <div className="sidebar-left flex flex-col h-screen overflow-y-auto">
        <div className="flex items-center mt-5">
          <img
            src={profile}
            width={40}
            className="rounded-full object-cover"
            alt="profile"
          />
          <h2 className="text-white font-bold ml-2 truncate ...">
            Wiby Fabian Rianto
          </h2>
        </div>
        {leftSidebar.map((data, index) => {
          return (
            <Link to="/" key={index}>
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
