import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.jpg";

const OnlineFriendList = () => {
  return (
    <div className="sticky top-0 w-3/12 px-5">
      <div className="flex flex-col h-screen overflow-y-auto sidebar-left">
        <h2 className="mt-5 font-bold text-white text-md">Online Friends</h2>
        <Link to="/">
          <div className="flex items-center mt-5">
            <div className="relative">
              <div
                style={{ height: 10, width: 10 }}
                className="absolute bottom-0 right-0 z-10 bg-green-500 rounded-full"
              ></div>
              <div
                className="overflow-hidden bg-white rounded-full"
                style={{ width: 40, height: 40 }}
              >
                <img
                  src={profile}
                  className="object-cover w-full h-full"
                  alt="profile"
                />
              </div>
            </div>
            <h2 className="text-white font-bold ml-2 truncate ...">
              Wiby Fabian Rianto
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OnlineFriendList;
