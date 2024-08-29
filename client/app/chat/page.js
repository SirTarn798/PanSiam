import { getSession } from "@/lib/auth";

export default async function Chat() {
    const session = getSession()
  const socket = io("ws://localhost:3000");
  socket.emit("register", currentUsername);
}
