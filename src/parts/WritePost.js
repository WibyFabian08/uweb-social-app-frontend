import React, { useState, useEffect } from "react";

import InputFile from "../elements/InputFile";

const WritePost = ({ showModalPost }) => {
  const [USER, setUSER] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUSER(data);
  }, []);

  return (
    <div
      className="w-full p-5 mt-5 mb-5 rounded-lg input-post"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="flex items-center">
        <div
          className="overflow-hidden rounded-full"
          style={{ height: 40, width: 40 }}
        >
          <img
            src={
              USER && USER?.profilePicture
                ? `http://localhost:3000/${USER.profilePicture}`
                : ""
            }
            className="object-cover w-full h-full"
            alt="profile"
          />
        </div>
        <input
          type="text"
          readOnly
          onClick={() => showModalPost()}
          className="w-full px-4 py-2 ml-3 text-white border-none rounded-full focus:outline-none"
          style={{ backgroundColor: "#4a4a4a" }}
          placeholder="Apa yang Anda pikirkan?"
        />
      </div>
      <div
        style={{ border: "0.025px solid gray" }}
        className="w-full mt-3"
      ></div>
      <InputFile></InputFile>
    </div>
  );
};

export default WritePost;
