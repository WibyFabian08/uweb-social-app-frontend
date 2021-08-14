import React from "react";
import { useSelector } from "react-redux";
import FriendList from "../parts/FriendList";

const MyFriend = () => {
  const USER = useSelector((state) => state.userState);
  return (
    <div
      style={{
        backgroundColor: "#1c1e21",
      }}
    >
      <div className="container mx-auto py-5 px-40">
        <div className="w-full">
          {USER &&
            USER?.followers.map((data, index) => {
              return <FriendList data={data} key={index}></FriendList>;
            })}
        </div>
      </div>
    </div>
  );
};

export default MyFriend;
