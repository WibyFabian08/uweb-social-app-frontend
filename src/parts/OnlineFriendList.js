import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnlineFriends } from "../redux/action/messageAction";

const OnlineFriendList = ({ data, createConversation }) => {
  const THEME = useSelector((state) => state.themeState);
  const [onlineUser, setOnlineUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnlineFriends(data, setOnlineUser));
  }, [data, dispatch]);

  return (
    <div
      className="flex items-center px-4 py-2 mt-5 transition-all duration-300 rounded-lg hover:bg-gray-400"
      onClick={() => createConversation(onlineUser?._id)}
      style={{ cursor: "pointer" }}
    >
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
            src={
              onlineUser
                ? `http://localhost:3000/${onlineUser?.profilePicture}`
                : ""
            }
            className="object-cover w-full h-full"
            alt="profile"
          />
        </div>
      </div>
      <h2
        className="font-bold ml-2 truncate ..."
        style={{ color: THEME ? "black" : "white" }}
      >
        {onlineUser ? onlineUser?.username : "username"}
      </h2>
    </div>
  );
};

export default OnlineFriendList;
