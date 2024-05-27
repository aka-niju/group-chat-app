import React from "react";
import "./Message.css";

const Message = ({user, message = "hello", msgClass="right"}) => {
  return (
    <>
      {user?<div className={`message ${msgClass}`}>{message}</div>:
      <div className={`message ${msgClass}`}>You: {message}</div>}

      <div className="message left">These are the chat messages</div>
    </>
  );
};

export default Message;
