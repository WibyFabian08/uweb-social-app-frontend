import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";

import ConversationList from "../parts/ConversationList";
import MessageContent from "../parts/MessageContent";
import Navbar from "../parts/Navbar";
import OnlineFriendList from "../parts/OnlineFriendList";

import {
  getConversationList,
  getMessages,
  getOneConversation,
  newConversation,
  sendMessage,
} from "../redux/action/messageAction";

const Message = () => {
  const THEME = useSelector((state) => state.themeState);
  const socket = useRef();
  const dispatch = useDispatch();

  const [ACTIVEUSER, setACTIVEUSER] = useState({});
  const [text, setText] = useState("");
  const [conversation, setConversation] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [onlineUser, setOnlineUser] = useState([]);
  const [members, setMembers] = useState({
    sender: "",
    receiver: "",
  });
  const [newMessage, setNewMessage] = useState(null);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getNewMessage", (data) => {
      setNewMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    newMessage &&
      currentConversation?.members.includes(newMessage.senderId) &&
      setMessages((prev) => [...prev, newMessage]);
  }, [newMessage, currentConversation]);

  useEffect(() => {
    socket.current.emit("addUser", ACTIVEUSER._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUser(
        ACTIVEUSER?.followings?.filter((following) =>
          users.some((user) => user.userId === following)
        )
      );
    });
  }, [ACTIVEUSER._id, ACTIVEUSER?.followings]);

  const getCurrentConversation = (friendId) => {
    setMembers({
      sender: friendId,
      receiver: ACTIVEUSER._id,
    });

    dispatch(getOneConversation(ACTIVEUSER, friendId, setCurrentConversation));
  };

  const createConversation = (friendId) => {
    dispatch(newConversation(ACTIVEUSER, friendId, setConversation));
  };

  const kirim = () => {
    const friendId = currentConversation?.members.find(
      (member) => member !== ACTIVEUSER._id
    );

    socket.current.emit("sendMessage", {
      senderId: ACTIVEUSER._id,
      receiverId: friendId,
      text: text,
    });

    dispatch(
      sendMessage(
        currentConversation,
        ACTIVEUSER,
        text,
        messages,
        setMessages,
        setText
      )
    );
  };

  useEffect(() => {
    dispatch(getMessages(currentConversation, setMessages));
  }, [currentConversation, dispatch]);

  useEffect(() => {
    dispatch(getConversationList(ACTIVEUSER, setConversation));
  }, [ACTIVEUSER, dispatch]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setACTIVEUSER(data);
  }, []);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: THEME ? "#edf0f5" : "#1c1e21",
          height: "100vh",
        }}
      >
        <div className="relative flex">
          <div className="sticky top-0 w-3/12 px-5">
            <div className="flex flex-col h-screen overflow-y-auto sidebar-left">
              <h2
                className="mt-5 font-bold text-md"
                style={{ color: THEME ? "black" : "white" }}
              >
                List Chat
              </h2>
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
            value={text}
            newMessage={newMessage}
            onChange={(e) => setText(e.target.value)}
            onClick={() => kirim()}
            messages={messages}
            members={members}
            ACTIVEUSER={ACTIVEUSER}
          ></MessageContent>

          <div className="sticky top-0 w-3/12 px-5">
            <div className="flex flex-col h-screen overflow-y-auto sidebar-left">
              <h2
                className="mt-5 font-bold text-white text-md"
                style={{ color: THEME ? "black" : "white" }}
              >
                Online Friends
              </h2>
              {onlineUser &&
                onlineUser.map((data, index) => {
                  return (
                    <OnlineFriendList
                      data={data}
                      key={index}
                      createConversation={createConversation}
                    ></OnlineFriendList>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
