import React, { useState, useEffect } from "react";
import axios from "axios";

import ConversationList from "../parts/ConversationList";
import MessageContent from "../parts/MessageContent";
import Navbar from "../parts/Navbar";
import OnlineFriendList from "../parts/OnlineFriendList";

const Message = () => {
  const [ACTIVEUSER, setACTIVEUSER] = useState({});
  const [conversation, setConversation] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState({
    sender: '',
    receiver: ''
  })

  const getCurrentConversation = (friendId) => {
    setMembers({
      sender: friendId,
      receiver: ACTIVEUSER._id
    })
    axios
      .get(
        `http://localhost:3000/conversations/find/${ACTIVEUSER._id}/${friendId}`
      )
      .then((res) => {
        setCurrentConversation(res.data.conversation);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/messages/${
          currentConversation && currentConversation?._id
        }`
      )
      .then((res) => {
        setMessages(res.data.messages);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  }, [currentConversation]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/conversations/${ACTIVEUSER._id}`)
      .then((res) => {
        setConversation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ACTIVEUSER._id]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setACTIVEUSER(data);
  }, []);

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
        <div className="sticky top-0 w-3/12 px-5">
          <div className="flex flex-col h-screen overflow-y-auto sidebar-left">
            <h2 className="mt-5 font-bold text-white text-md">List Chat</h2>
            {conversation?.conversation &&
              conversation.conversation.map((data, index) => {
                const friendId = data.members.find(
                  (member) => member !== ACTIVEUSER._id
                );
                return (
                  <div
                    onClick={() => getCurrentConversation(friendId)}
                    key={index}
                  >
                    <ConversationList
                      ACTIVEUSER={ACTIVEUSER}
                      data={data}
                    ></ConversationList>
                  </div>
                );
              })}
          </div>
        </div>
        <MessageContent
          messages={messages}
          members={members}
          ACTIVEUSER={ACTIVEUSER}
        ></MessageContent>
        <OnlineFriendList></OnlineFriendList>
      </div>
    </div>
  );
};

export default Message;
