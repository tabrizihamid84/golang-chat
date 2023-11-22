import Message from "../Message";
import "./ChatHistory.css";

import React from "react";

const ChatHistory = (props) => {
  return (
    <div className="chat_history">
      <h2>Chat History</h2>
      {props.chatHistory.map((msg) => (
        <Message key={msg.timeStamp} message={msg.data} />
      ))}
    </div>
  );
};

export default ChatHistory;
