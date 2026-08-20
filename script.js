const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

function addMessage(text, sender) {
    const message = document.createElement("div");

    message.classList.add("message", sender);

    message.innerHTML = `<strong>${sender === "bot" ? "ZappyBot:" : "You:"}</strong> ${text}`;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    messageInput.value = "";

    // Temporary response
    setTimeout(() => {
        addMessage("I received your message! ⚡", "bot");
    }, 500);
}

sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
