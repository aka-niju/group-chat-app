import React, { useEffect, useState, useMemo } from "react";
import { user } from "../Login Page/Login";
import "./Chat.css";
import Message from "../Messages/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { io } from "socket.io-client";

let socket;
const Chat = () => {
  const [id, setId] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [message, setMessage] = useState("");

  const send = (e) => {
    socket.emit("message", { message, id });
    setMessage("");
  };

  socket = useMemo(() => io("http://localhost:4000"), []);

  useEffect(() => {
    socket.on("connect", () => {
      setId(socket.id);
    });

    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setAllMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("leave", (data) => {
      setAllMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("userJoined", (data) => {
      setAllMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("sendMessage", (data) => {
      setAllMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off();
    };
  }, [allMessages]);

  return (
    <div className="chat-container">
      <div className="chat-panel">
        <div className="chat-navbar">
          <h1 className="chat-heading">CHAT APP</h1>

          <a href="/">
            <button className="logout-btn">Logout</button>
          </a>
        </div>

        <ReactScrollToBottom className="chat-box">
          {allMessages.map((item, index) => (
            <Message
              key={index}
              user={item?.id === id ? "" : item?.user}
              message={item.message}
              msgClass={item?.id === id ? "right" : "left"}
            />
          ))}
        </ReactScrollToBottom>

        <div className="chat-input">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="enter message"
            value={message}
            onKeyDown={(e) => {
              e.key === "Enter" ? send() : null;
            }}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="send-btn" onClick={send}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
