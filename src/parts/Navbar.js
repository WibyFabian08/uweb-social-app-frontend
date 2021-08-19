import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import NavBrand from "../elements/NavBrand";

import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SendIcon from "@material-ui/icons/Send";

import profile from "../assets/images/profile.jpg";

const Navbar = ({ match }) => {
  const [USER, setUSER] = useState({});

  const getNavLink = (path) => {
    return path === match.path ? "border-b-4 border-solid border-blue-200" : "";
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUSER(data);
  }, []);

  return (
    <div
      className="sticky top-0 z-10 flex items-center w-full px-5"
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
        <div className="flex items-center justify-between">
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
          <div
            className={[
              "w-1/6 flex justify-center py-3",
              getNavLink("/users"),
            ].join(" ")}
          >
            <Link to="/users">
              <PeopleAltIcon
                style={{ color: "white" }}
                fontSize="large"
              ></PeopleAltIcon>
            </Link>
          </div>
          <div
            className={[
              "w-1/6 flex justify-center py-3",
              getNavLink("/message"),
            ].join(" ")}
          >
            <Link to="/message">
              <SendIcon style={{ color: "white" }} fontSize="large"></SendIcon>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-3/12 px-3">
        <div className="flex items-center justify-start">
          <div className="flex items-center px-4">
            <Link to={`/profile/${USER && USER.username}`}>
              <div
                className="overflow-hidden rounded-full"
                style={{ width: 30, height: 30 }}
              >
                <img
                  src={
                    USER && USER.profilePicture
                      ? `http://localhost:3000/${USER.profilePicture}`
                      : profile
                  }
                  className="object-cover w-full h-full"
                  alt="profile"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </Link>
            <h2 className="text-white font-bold ml-2 truncate ...">
              {USER && USER.username}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
