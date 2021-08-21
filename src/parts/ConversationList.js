import axios from "axios";
import React, { useState, useEffect } from "react";

const ConversationList = ({ data, ACTIVEUSER }) => {
  const [conversationList, setConversationList] = useState(null);
  const friendId = data.members.find((member) => member !== ACTIVEUSER._id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${friendId}`)
      .then((res) => {
        setConversationList(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [friendId]);

  return (
    <div
      className="flex items-center px-5 py-2 mt-5 transition-all duration-300 rounded-lg hover:bg-gray-700"
      style={{ cursor: "pointer" }}
    >
      <div
        className="overflow-hidden bg-white rounded-full"
        style={{ width: 40, height: 40 }}
      >
        <img src={conversationList ? `http://localhost:3000/${conversationList?.profilePicture}` : ''} className="object-cover w-full h-full" alt="profile" />
      </div>
      <h2 className="text-white font-bold ml-2 truncate ...">
        {conversationList ? conversationList?.username : "username"}
      </h2>
    </div>
  );
};

export default ConversationList;
