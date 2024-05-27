import React, { useState } from "react";
import { user } from "../Login Page/Login";
import "./Chat.css";
import Message from "../Messages/Message";
import ReactScrollToBottom from 'react-scroll-to-bottom'

const Chat = () => {
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();

  }

  return (
    <div className="chat-container">
      <div className="chat-panel">
        <div className="chat-navbar">
          <h1 className="chat-heading">CHAT APP</h1>
          <button className="logout-btn">Logout</button>
        </div>

        <ReactScrollToBottom className="chat-box">
          <Message user = {user}/>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </ReactScrollToBottom>

        <div className="chat-input">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-btn" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
