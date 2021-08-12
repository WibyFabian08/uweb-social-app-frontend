import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import CameraAltIcon from "@material-ui/icons/CameraAlt";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";

import profile from "../assets/images/profile.jpg";

const DetailHeader = ({ match }) => {
  const [user, setUser] = useState({});
  const getNavLink = (path) => {
    return path === match.path ? "border-b-4 border-solid border-blue-400" : "";
  };

  const getNavTitle = (path) => {
    return path === match.path ? "text-blue-500" : "text-white";
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/name/${match.params.username}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  }, [match.params.username]);

  if (!user) {
    return <div>loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "#4a4a4a" }}>
      <div className="container mx-auto px-40">
        <div className="profile-header relative">
          <div
            className="cover-image relative rounded-b-lg bg-white w-full"
            style={{
              height: 370,
              backgroundImage: `url(http://localhost:3000/${
                user ? user.coverPicture : ""
              })`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="absolute bg-white right-10 bottom-5 px-4 py-2 rounded-md flex items-center"
              style={{ cursor: "pointer" }}
              onClick={() => alert("ok")}
            >
              <CameraAltIcon></CameraAltIcon>
              <p className="font-semibold ml-2">Edit Foto Sampul</p>
            </div>
          </div>
          <div className="profile-info container mx-auto px-10 -mt-5 relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="relative">
                  <div
                    className="overflow-hidden rounded-full bg-white"
                    style={{ width: 120, height: 120 }}
                  >
                    <img
                      src={
                        user
                          ? `http://localhost:3000/${user.profilePicture}`
                          : profile
                      }
                      className="object-cover w-full h-full"
                      alt="profile"
                    />
                  </div>
                  <div
                    className="absolute bottom-0 right-0 bg-gray-700 rounded-full p-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => alert("ok")}
                  >
                    <CameraAltIcon style={{ color: "white" }}></CameraAltIcon>
                  </div>
                </div>
                <div className="ml-3 flex flex-col justify-end h-full">
                  <h2 className="text-white text-2xl font-bold">
                    {user && user.username}
                  </h2>
                  <p className="text-white font-bold">
                    {user && user.followers && user.followers.length} Pengikut
                  </p>
                </div>
              </div>
              <div className="flex items-center h-full">
                <div
                  className="bg-blue-500 flex items-center px-4 py-2 rounded-md mx-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("ok")}
                >
                  <AddCircleIcon style={{ color: "white" }}></AddCircleIcon>
                  <p className="text-white ml-1">Tambah Cerita</p>
                </div>
                <div
                  className="bg-gray-600 flex items-center px-4 py-2 rounded-md"
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("ok")}
                >
                  <CreateIcon style={{ color: "white" }}></CreateIcon>
                  <p className="text-white ml-1">Edit Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ border: "0.025px solid gray" }}
          className="w-full mt-5 px-10"
        ></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={["mx-3 py-5", getNavLink(`/profile/:username`)].join(
                " "
              )}
            >
              <Link to={`/profile/${user && user.username}`}>
                <p
                  className={[
                    "font-bold",
                    getNavTitle(`/profile/:username`),
                  ].join(" ")}
                >
                  Postingan
                </p>
              </Link>
            </div>
            <div
              className={[
                "mx-3 py-5",
                getNavLink(`/profile/:username/friends`),
              ].join(" ")}
            >
              <Link to={`/profile/${user && user.username}/friends`}>
                <p
                  className={[
                    "font-bold",
                    getNavTitle(`/profile/:username/friends`),
                  ].join(" ")}
                >
                  Teman
                </p>
              </Link>
            </div>
            <div
              className={[
                "mx-3 py-5",
                getNavLink(`/profile/:username/images`),
              ].join(" ")}
            >
              <Link to={`/profile/${user && user.username}/images`}>
                <p
                  className={[
                    "font-bold",
                    getNavTitle(`/profile/:username/images`),
                  ].join(" ")}
                >
                  Foto
                </p>
              </Link>
            </div>
          </div>
          <div>
            <MoreHorizTwoToneIcon
              style={{ color: "white" }}
              fontSize="large"
            ></MoreHorizTwoToneIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DetailHeader);
