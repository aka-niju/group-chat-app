import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

let user;
const Login = () => {
  const [name, setName] = useState("");
  function sendUser(e) {
    user = name;
    setName("");
  }
  return (
    <div className="login-container">
      <main className="login-box">
        <div>
          <h1 className="login-heading">Chat App</h1>
        </div>
        <div className="form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Link onClick={(e) => !name?e.preventDefault():null} to="/chat">
            <button className="login-btn" onClick={sendUser}>
              Login
            </button>
          </Link>
        </div>
        
      </main>
    </div>
  );
};

export default Login;
export { user };
