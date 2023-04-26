import React, { useState } from "react"; //Source #4
import "./chatmessage.css";
const ChatMessage = ({ message, sender }) => {
  return (
    <div className="box">
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
