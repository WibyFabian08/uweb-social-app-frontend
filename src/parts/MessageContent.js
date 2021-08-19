import React, { useState } from "react";
import Conversation from "../parts/Conversation";

const MessageContent = () => {
  const [body, setBody] = useState("");
  return (
    <div className="w-1/2 mb-5 text-white">
      <div className="container flex flex-col">
        <div
          style={{ height: "calc(100vh - 150px)" }}
          className="w-4/5 p-5 mx-auto overflow-y-auto rounded-lg"
        >
          <Conversation></Conversation>
          <Conversation mine></Conversation>
          <Conversation></Conversation>
          <Conversation mine></Conversation>
        </div>
        <div className="flex items-center w-full px-16 mt-5">
          <div className="w-full px-1">
            <textarea
              onChange={(e) => setBody(e.target.value)}
              name="message"
              className="w-full px-4 py-2 text-gray-600 placeholder-gray-600 rounded-lg focus:outline-none"
              placeholder="Type here..."
              rows="2"
            ></textarea>
          </div>
          {body.length > 0 && (
            <div className="w-1/5 px-2">
              <button className="px-6 py-2 bg-green-500 rounded-lg">
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
