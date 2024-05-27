const express = require('express');
const http = require('http');
const {Server} = require('socket.io');

const port = 4000 || process.env.PORT;
const app = express();

const server = http.createServer(app);

const io = new Server(server);
io.on("connecton", (socket)=> {
    console.log(`${socket.id} is connected`);
})









app.get("/", (req, res, next)=> {
    return res.send("<h1>Homepage from backend</h1>")
})

server.listen(port, ()=> {
    console.log(`Server is running.. http://localhost:${port}`);
})