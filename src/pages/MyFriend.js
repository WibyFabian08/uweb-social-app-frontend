import React from "react";
import FriendList from "../parts/FriendList";

const MyFriend = () => {
  return (
    <div
      style={{
        backgroundColor: "#1c1e21",
      }}
    >
      <div className="container mx-auto py-5 px-40">
        <div className="w-full">
          <FriendList></FriendList>
        </div>
      </div>
    </div>
  );
};

export default MyFriend;
