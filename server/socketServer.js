import express from "express";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

const expressServer = app.listen(port, () => {
  console.log("Server is running on port 3000...");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let userSockets = {};

const io = new Server(expressServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("register", (userId) => {
    userSockets[userId] = socket.id;
  });

  socket.on("sendMsg", (data) => {
    io.to(userSockets[data.username]).emit("receiveMsg", data.spc);
  });
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
