const socket = io("http://localhost:3000");

socket.on("message", (msg) => {
  const div = document.createElement("div");
  div.innerText = msg;
  document.getElementById("messages").appendChild(div);
});

function sendMessage() {
  const msg = document.getElementById("msgInput").value;
  if (!msg) return;

  socket.emit("message", msg);
  document.getElementById("msgInput").value = "";
}
