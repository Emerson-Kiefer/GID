import React from "react"; //Source #4
import "./chatmessage.css";
const ChatMessage = ({ message, sender, id, percent }) => {
  return (
    <div className={"box _"+id} >
      <p>{message}</p>
      <div>{sender+" | " + percent + "%"}</div>
    </div>
  );
};

export default ChatMessage;
