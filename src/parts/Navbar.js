import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SendIcon from "@material-ui/icons/Send";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import profile from "../assets/images/profile.jpg";
import NavBrand from "../elements/NavBrand";

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
        <NavBrand></NavBrand>
      </div>
      <div className="w-1/2 px-20">
        <div className="flex justify-between items-center">
          <div
            className={["w-1/6 flex justify-center py-3", getNavLink("/")].join(" ")}
          >
            <Link to="/">
              <HomeIcon
                style={{ color: match.path === "/" ? "skyblue" : "white" }}
                fontSize="large"
              ></HomeIcon>
            </Link>
          </div>
          <div className={["w-1/6 flex justify-center py-3", getNavLink("/friends")].join(" ")}>
            <Link to="/">
              <PeopleAltIcon
                style={{ color: "white" }}
                fontSize="large"
              ></PeopleAltIcon>
            </Link>
          </div>
          <div className={["w-1/6 flex justify-center py-3", getNavLink("/videos")].join(" ")}>
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
