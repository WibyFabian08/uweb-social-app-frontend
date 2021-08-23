import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Conversation from "../parts/Conversation";

const MessageContent = ({
  messages,
  ACTIVEUSER,
  members,
  value,
  onChange,
  onClick,
}) => {
  const scrollRef = useRef();
  const THEME = useSelector((state) => state.themeState);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-1/2 mb-5 text-white">
      <div className="container flex flex-col">
        <div
          style={{ height: "calc(100vh - 150px)" }}
          className="w-4/5 p-5 mx-auto overflow-y-auto rounded-lg"
        >
          {messages.length > 0 ? (
            messages.map((data, index) => {
              return (
                <Conversation
                  scrollRef={scrollRef}
                  key={index}
                  data={data}
                  members={members}
                  mine={data.senderId === ACTIVEUSER?._id && true}
                ></Conversation>
              );
            })
          ) : (
            <div className="flex flex-col justify-center h-full text-3xl font-bold text-center" style={{color: THEME ? 'gray' : 'lightgray'}}>
              Type to start conversation
            </div>
          )}
        </div>
        <div className="flex items-center w-full px-16 mt-5">
          <div className="w-full px-1">
            <textarea
              onChange={onChange}
              value={value}
              name="message"
              className="w-full px-4 py-2 text-gray-600 placeholder-gray-600 rounded-lg focus:outline-none"
              placeholder="Type here..."
              rows="2"
            ></textarea>
          </div>
          {value.length > 0 && (
            <div className="w-1/5 px-2">
              <button
                className="px-6 py-2 bg-green-500 rounded-lg"
                onClick={onClick}
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageContent;
