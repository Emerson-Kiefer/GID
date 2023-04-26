import React, { useState } from "react"; //Source #4
import ChatMessage from "./chatmessage";
import "./chatdisplay.css";

const ChatDisplay = () => {
  return (
    <div className="chatwindow">
      <ul className="styled-list">
        <li>
          <ChatMessage message={"Hello Bob"} />
        </li>
        <li>
          <ChatMessage message={"Hi Joe"} />
        </li>
        <li>
          <ChatMessage message={"Goodbye Bob"} />
        </li>
        <li>
          <ChatMessage message={"See you later Joe"} />
        </li>
      </ul>
    </div>
  );
};

export default ChatDisplay;
