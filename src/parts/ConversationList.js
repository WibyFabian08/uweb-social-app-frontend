import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.jpg";

const ConversationList = () => {
  return (
    <div className="w-3/12 sticky top-0 px-5">
      <div className="sidebar-left flex flex-col h-screen overflow-y-auto">
        <h2 className="text-white text-md font-bold mt-5">List Chat</h2>
        <Link to="/">
          <div className="flex items-center mt-5">
            <div
              className="overflow-hidden rounded-full bg-white"
              style={{ width: 40, height: 40 }}
            >
              <img
                src={profile}
                className="w-full h-full object-cover"
                alt="profile"
              />
            </div>
            <h2 className="text-white font-bold ml-2 truncate ...">
              Wiby Fabian Rianto
            </h2>
          </div>
        </Link>
        <Link to="/">
          <div className="flex items-center mt-5">
            <div
              className="overflow-hidden rounded-full bg-white"
              style={{ width: 40, height: 40 }}
            >
              <img
                src={profile}
                className="w-full h-full object-cover"
                alt="profile"
              />
            </div>
            <h2 className="text-white font-bold ml-2 truncate ...">
              Wiby Fabian Rianto
            </h2>
          </div>
        </Link>
        <Link to="/">
          <div className="flex items-center mt-5">
            <div
              className="overflow-hidden rounded-full bg-white"
              style={{ width: 40, height: 40 }}
            >
              <img
                src={profile}
                className="w-full h-full object-cover"
                alt="profile"
              />
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

export default ConversationList;
