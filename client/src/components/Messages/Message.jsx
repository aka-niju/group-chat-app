import React from "react";
import "./Message.css";

const Message = ({ user, message, msgClass }) => {
  return (
    <>
      {user ? (
        <div className={`message ${msgClass}`}> {`${user}: ${message}`} </div>
      ) : (
        <div className={`message ${msgClass}`}>You: {message}</div>
      )}
    </>
  );
};

export default Message;
