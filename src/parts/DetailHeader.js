import React, { useEffect, useState, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  follow,
  getUserByName,
  unFollow,
  updateCoverPicture,
  updateProfilePicture,
} from "../redux/action/userAction";

import CameraAltIcon from "@material-ui/icons/CameraAlt";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";

const DetailHeader = ({ match }) => {
  const [ACTIVEUSER, setACTIVEUSER] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  const coverRef = useRef(null);

  const dispatch = useDispatch();

  const handleFollow = (id) => {
    dispatch(follow(id, ACTIVEUSER, getHeaderProfile, setIsLoading));
  };

  const handleUnFollow = (id) => {
    dispatch(unFollow(id, ACTIVEUSER, getHeaderProfile, setIsLoading));
  };

  const updateProfileImage = (e) => {
    const data = new FormData();

    data.append("userId", user._id);
    data.append("image", e.target.files[0]);

    dispatch(updateProfilePicture(user, data, setUser));
    getHeaderProfile();
  };

  const updateCoverImage = (e) => {
    const data = new FormData();

    data.append("image", e.target.files[0]);

    dispatch(updateCoverPicture(user, data, setUser));
    getHeaderProfile();
  };

  const getNavLink = (path) => {
    return path === match.path ? "border-b-4 border-solid border-blue-400" : "";
  };

  const getNavTitle = (path) => {
    return path === match.path ? "text-blue-500" : "text-white";
  };

  const getHeaderProfile = () => {
    dispatch(getUserByName(match.params.username, setUser));
  };

  useEffect(() => {
    getHeaderProfile();
    const dataUser = JSON.parse(localStorage.getItem("user"));
    setACTIVEUSER(dataUser);
  }, [match.params.username, dispatch]);

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
            {ACTIVEUSER && ACTIVEUSER?._id === user._id && (
              <div
                className="absolute bg-white right-10 bottom-5 px-4 py-2 rounded-md flex items-center"
                style={{ cursor: "pointer" }}
                onClick={() => coverRef.current.click()}
              >
                <CameraAltIcon></CameraAltIcon>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => updateCoverImage(e)}
                  className="hidden"
                  ref={coverRef}
                />
                <p className="font-semibold ml-2">Edit Foto Sampul</p>
              </div>
            )}
          </div>
          <div className="profile-info container mx-auto px-10 -mt-5 relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between w-full">
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
                            : ""
                        }
                        className="object-cover w-full h-full"
                        alt="profile"
                      />
                    </div>
                    {ACTIVEUSER._id === user._id && (
                      <div
                        className="absolute bottom-0 right-0 bg-gray-700 rounded-full p-1"
                        style={{ cursor: "pointer" }}
                        onClick={() => inputRef.current.click()}
                      >
                        <CameraAltIcon
                          style={{ color: "white" }}
                        ></CameraAltIcon>
                        <input
                          type="file"
                          name="image"
                          onChange={(e) => updateProfileImage(e)}
                          className="hidden"
                          ref={inputRef}
                        />
                      </div>
                    )}
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
              </div>
              <div className="flex justify-end items-center h-full w-full">
                {user._id !== ACTIVEUSER._id &&
                  (user && !user?.followers?.includes(ACTIVEUSER._id) ? (
                    <button
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-bold ml-auto"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleFollow(user._id)}
                    >
                      {isLoading ? "Loading..." : "+ Follow"}
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-bold ml-auto"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleUnFollow(user._id)}
                    >
                      {isLoading ? "Loading..." : "- UnFollow"}
                    </button>
                  ))}
                {ACTIVEUSER._id === user._id && (
                  <>
                    {" "}
                    <div
                      className="bg-blue-500 hover:bg-blue-400 flex items-center px-4 py-2 rounded-md mx-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => alert("ok")}
                    >
                      <AddCircleIcon style={{ color: "white" }}></AddCircleIcon>
                      <p className="text-white ml-1">Tambah Cerita</p>
                    </div>
                    <div
                      className="bg-gray-600 hover:bg-gray-500 flex items-center px-6 py-2 rounded-md"
                      style={{ cursor: "pointer" }}
                      onClick={() => alert("ok")}
                    >
                      <CreateIcon style={{ color: "white" }}></CreateIcon>
                      <p className="text-white ml-1">Edit Profile</p>
                    </div>
                  </>
                )}
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
