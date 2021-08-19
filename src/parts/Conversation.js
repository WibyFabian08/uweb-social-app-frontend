import React from "react";

import profile from "../assets/images/profile.jpg";

const Conversation = ({ mine, data }) => {
  if (mine) {
    return (
      <div className="flex">
        <div className="w-full mb-5">
          <div className="flex">
            <p
              className="px-4 py-2 ml-auto text-left bg-gray-500 rounded-lg"
              style={{ maxWidth: "75%" }}
            >
              {data.text}
            </p>
            <div
              className="mt-2 ml-2 overflow-hidden bg-white rounded-full"
              style={{ width: 30, height: 30 }}
            >
              <img src={profile} alt="profile" className="w-full h-full" />
            </div>
          </div>
          <div className="flex">
            <div className="mt-2 ml-auto mr-10 text-xs text-gray-400">
              1 jam yang lalu
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col mb-5">
      <div className="flex">
        <div
          className="mt-2 mr-2 overflow-hidden bg-white rounded-full"
          style={{ width: 30, height: 30 }}
        >
          <img src={profile} alt="profile" className="w-full h-full" />
        </div>
        <p
          className="px-4 py-2 text-left bg-blue-400 rounded-lg"
          style={{ maxWidth: "75%" }}
        >
         {data.text}
        </p>
      </div>
      <div className="flex">
        <div className="mt-2 ml-10 text-xs text-gray-400">1 jam yang lalu</div>
      </div>
    </div>
  );
};

export default Conversation;
