import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import InputFile from "../elements/InputFile";

const WritePost = ({ showModalPost }) => {
  const [USER, setUSER] = useState({});
  const THEME = useSelector((state) => state.themeState);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUSER(data);
  }, []);

  return (
    <div
      className="w-full p-5 mt-5 mb-5 transition-all duration-300 ease-in-out rounded-lg input-post"
      style={{
        backgroundColor: THEME ? "white" : "#242526",
        boxShadow: THEME
          ? "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0, 0, 0 / 10%)"
          : "none",
      }}
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
          className="w-full px-4 py-2 ml-3 text-white transition-all duration-300 ease-in-out border-none rounded-full focus:outline-none"
          style={{ backgroundColor: THEME ? "#edf0f5" : "#4a4a4a" }}
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
