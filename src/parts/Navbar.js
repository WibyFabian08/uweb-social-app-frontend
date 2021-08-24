import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import NavBrand from "../elements/NavBrand";

import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SendIcon from "@material-ui/icons/Send";
import Switch from "@material-ui/core/Switch";

import profile from "../assets/images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ match }) => {
  const [USER, setUSER] = useState({});
  const THEME = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  const getNavLink = (path) => {
    return path === match.path ? "border-b-4 border-solid border-blue-500" : "";
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUSER(data);
  }, []);

  return (
    <div
      className="sticky top-0 z-10 flex items-center w-full px-5 transition-all duration-300 ease-in-out"
      style={{
        height: 60,
        backgroundColor: THEME ? "#edf0f5" : "#242526",
        borderBottom: THEME ? "0.5px solid lightgray" : "0.5px solid gray",
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
                style={{
                  color: THEME
                    ? "#4267b2"
                    : match.path === "/"
                    ? "white"
                    : "white",
                }}
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
                style={{
                  color: THEME
                    ? "#4267b2"
                    : match.path === "/"
                    ? "white"
                    : "white",
                }}
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
              <SendIcon
                style={{
                  color: THEME
                    ? "#4267b2"
                    : match.path === "/"
                    ? "white"
                    : "white",
                }}
                fontSize="large"
              ></SendIcon>
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
            <h2
              className="font-bold transition-all duration-300 ease-in-out ml-2 mr-12 truncate ..."
              style={{ color: THEME ? "black" : "white" }}
            >
              {USER && USER.username}
            </h2>
            <Switch
              onChange={() => dispatch({ type: "SET_THEME", value: !THEME })}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
