import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import ConversationList from "../parts/ConversationList";
import MessageContent from "../parts/MessageContent";
import Navbar from "../parts/Navbar";
import OnlineFriendList from "../parts/OnlineFriendList";

const Message = () => {
  const socket = useRef();

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

  const creaetConversation = (friendId) => {
    axios
      .post("http://localhost:3000/conversations", {
        senderId: ACTIVEUSER._id,
        receiverId: friendId,
      })
      .then((res) => {
        axios
          .get(`http://localhost:3000/conversations/${ACTIVEUSER._id}`)
          .then((res) => {
            setConversation(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
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

    axios
      .post("http://localhost:3000/messages", {
        conversationId: currentConversation._id,
        senderId: ACTIVEUSER._id,
        text: text,
      })
      .then((res) => {
        setMessages([...messages, res.data.message]);
        setText("");
      })
      .catch((err) => {
        console.log(err);
        setText("");
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
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div
        className="overflow-hidden"
        style={{
          backgroundColor: "#1c1e21",
          height: "100vh",
        }}
      >
        <div className="relative flex">
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
              <h2 className="mt-5 font-bold text-white text-md">
                Online Friends
              </h2>
              {onlineUser &&
                onlineUser.map((data, index) => {
                  return (
                    <OnlineFriendList
                      data={data}
                      key={index}
                      creaetConversation={creaetConversation}
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
