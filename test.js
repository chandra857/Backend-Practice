const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const server = app.listen(3000, () => {
    console.log("Server started");
});

server.on("listening", () => {
    console.log("Server listening:", server.listening);
    console.log("Address:", server.address());
});

server.on("error", (err) => {
    console.log("SERVER ERROR:", err);
});

setInterval(() => {
    console.log("Express process is still alive");
}, 2000);