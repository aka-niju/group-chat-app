const express = require('express');
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io');

const port = 4000;
const app = express();
const users = [{}];
// const corsOptions = {
//     origin: "http://localhost:5173",
//     httpOnly: true,
//     methods: ['GET', 'POST'],
//     credentials: true,
// };

// middleware and routes
// app.use(cors(corsOptions));
app.get("/", (req, res, next) => {
    return res.send("<h1>Homepage from backend</h1>")
});


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        httpOnly: true,
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log(`New user from frontend is connected`);

    socket.on("joined", ({ user }) => {
        users[socket.id] = user;

        socket.broadcast.emit("userJoined", { user: "Admin", message: `${users[socket.id]} has joined the chat` });

        socket.emit("welcome", {
            user: "Admin",
            message: `Welcome to the chat ${users[socket.id]}`
        });
    });

    socket.on("message", ({ message, id }) => {
        io.emit("sendMessage", { user: users[id], message, id });
    });

    socket.on("disconnect", () => {
        socket.broadcast.emit("leave", { user: "Admin", message: `${users[socket.id]} has left the chat` });
    });
})

// listening to the server
server.listen(port, () => {
    console.log(`Server is running.. http://localhost:${port}`);
})