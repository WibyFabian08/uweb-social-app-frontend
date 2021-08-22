import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OnlineFriendList = ({ data }) => {
  const [onlineUser, setOnlineUser] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${data}`)
      .then((res) => {
        setOnlineUser(res.data.user)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
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
              src={onlineUser ? `http://localhost:3000/${onlineUser?.profilePicture}` : ''}
              className="object-cover w-full h-full"
              alt="profile"
            />
          </div>
        </div>
        <h2 className="text-white font-bold ml-2 truncate ...">
          {onlineUser ? onlineUser?.username : 'username'}
        </h2>
      </div>
    </Link>
  );
};

export default OnlineFriendList;
