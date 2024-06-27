const ws = new WebSocket("ws://localhost:3000");

ws.onmessage = (event) => {
    const chatBox = document.getElementById("chat-box");
    const message = document.createElement("div");
    message.textContent = event.data;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
};

document.getElementById("send-button").onclick = () => {
    const input = document.getElementById("message-input");
    ws.send(input.value);
    input.value = "";
};
