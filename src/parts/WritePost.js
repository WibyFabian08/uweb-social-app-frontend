import React from "react";
import { useSelector } from "react-redux";

import InputFile from "../elements/InputFile";

const WritePost = ({ showModalPost }) => {
  const USER = useSelector((state) => state.userState);
  return (
    <div
      className="input-post w-full mt-5 rounded-lg p-5 mb-5"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="flex items-center">
        <div
          className="overflow-hidden rounded-full"
          style={{ height: 40, width: 40 }}
        >
          <img
            src={
              USER && USER.profilePicture
                ? `http://localhost:3000/${USER.profilePicture}`
                : ''
            }
            className="w-full h-full object-cover"
            alt="profile"
          />
        </div>
        <input
          type="text"
          readOnly
          onClick={() => showModalPost()}
          className="rounded-full text-white w-full ml-3 border-none focus:outline-none px-4 py-2"
          style={{ backgroundColor: "#4a4a4a" }}
          placeholder="Apa yang Anda pikirkan?"
        />
      </div>
      <div
        style={{ border: "0.025px solid gray" }}
        className="mt-3 w-full"
      ></div>
      <InputFile></InputFile>
    </div>
  );
};

export default WritePost;
