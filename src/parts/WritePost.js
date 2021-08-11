import React, { useRef } from "react";
import profile from "../assets/images/profile.jpg";
import InputFile from "../elements/InputFile";

const WritePost = ({ showModalPost }) => {
  return (
    <div
      className="input-post w-full mt-5 rounded-lg p-5 mb-5"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="flex items-center">
        <img
          src={profile}
          width={40}
          className="rounded-full object-cover"
          alt="profile"
        />
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
