import React from "react";

import ConversationList from "../parts/ConversationList";
import MessageContent from "../parts/MessageContent";
import Navbar from "../parts/Navbar";
import OnlineFriendList from "../parts/OnlineFriendList";

const Message = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: "#1c1e21",
        height: "100vh",
      }}
    >
      <Navbar></Navbar>
      <div className="flex">
        <ConversationList></ConversationList>
        <MessageContent></MessageContent>
        <OnlineFriendList></OnlineFriendList>
      </div>
    </div>
  );
};

export default Message;
