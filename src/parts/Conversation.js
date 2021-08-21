import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";

const Conversation = ({ mine, data, members }) => {
  const [activeUser, setActiveUser] = useState({});
  const [friend, setFriend] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${members.sender}`)
      .then((res) => {
        setFriend(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [members.sender]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${members.receiver}`)
      .then((res) => {
        setActiveUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [members.receiver]);

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
              <img
                src={
                  activeUser
                    ? `http://localhost:3000/${activeUser.profilePicture}`
                    : ""
                }
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-2 ml-auto mr-10 text-xs text-gray-400">
              {format(data.createdAt)}
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
          <img
            src={friend ? `http://localhost:3000/${friend.profilePicture}` : ""}
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
        <p
          className="px-4 py-2 text-left bg-blue-400 rounded-lg"
          style={{ maxWidth: "75%" }}
        >
          {data.text}
        </p>
      </div>
      <div className="flex">
        <div className="mt-2 ml-10 text-xs text-gray-400">
          {format(data.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
