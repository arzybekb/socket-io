const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

const chatRoutes = require("./routes/chat");

const PORT = 4000;

app.use(cors());
app.use(chatRoutes);

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3001",
  },
});

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
