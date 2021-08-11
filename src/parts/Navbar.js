import React from "react";
import { Link, withRouter } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import profile from "../assets/images/profile.jpg";

const Navbar = ({ match }) => {
  const getNavLink = (path) => {
    return path === match.path ? "border-b-4 border-solid border-blue-200" : "";
  };

  return (
    <div
      className="flex items-center px-5 w-full sticky top-0 z-10"
      style={{
        height: 60,
        backgroundColor: "#242526",
        borderBottom: "0.5px solid gray",
      }}
    >
      <div className="w-3/12">
        <div className="flex items-center">
          <FacebookIcon
            style={{ color: "white" }}
            fontSize="large"
          ></FacebookIcon>
          <div
            className="w-3/4 ml-2 rounded-full"
            style={{ backgroundColor: "#4a4a4a" }}
          >
            <div className="flex justify-center items-center py-1">
              <SearchIcon style={{ color: "white" }}></SearchIcon>
              <input
                className="rounded-full px-4 bg-transparent text-white w-5/6 border-none focus:outline-none"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 px-20">
        <div className="flex justify-between items-center">
          <div
            className={["w-1/6 flex justify-center py-3", getNavLink("/")].join(
              " "
            )}
          >
            <Link to="/">
              <HomeIcon
                style={{ color: match.path === "/" ? "skyblue" : "white" }}
                fontSize="large"
              ></HomeIcon>
            </Link>
          </div>
          <div className="w-1/6 flex justify-center py-3">
            <Link to="/">
              <PeopleAltIcon
                style={{ color: "white" }}
                fontSize="large"
              ></PeopleAltIcon>
            </Link>
          </div>
          <div className="w-1/6 flex justify-center py-3">
            <Link to="/">
              <VideoLibraryIcon
                style={{ color: "white" }}
                fontSize="large"
              ></VideoLibraryIcon>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-3/12">
        <div className="flex justify-start items-center">
          <div className="px-4 flex items-center">
            <Link to="/profile/will">
              <img
                src={profile}
                width={30}
                className="rounded-full object-cover"
                alt="profile"
                style={{ cursor: "pointer" }}
              />
            </Link>
            <h2 className="text-white font-bold ml-2 truncate ...">
              Wiby Fabian Rianto
            </h2>
          </div>
          <div className="px-4">
            <Link to="/">
              <SendIcon style={{ color: "white" }}></SendIcon>
            </Link>
          </div>
          <div className="px-4">
            <Link to="/">
              <NotificationsIcon style={{ color: "white" }}></NotificationsIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
