const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");


// ================================
// ADD A MESSAGE TO THE CHAT
// ================================

function addMessage(text, sender) {
    const message = document.createElement("div");

    message.classList.add("message", sender);

    message.innerHTML =
        `<strong>${sender === "bot" ? "ZappyBot:" : "You:"}</strong> ${text}`;

    chatBox.appendChild(message);

    // Automatically scroll to the newest message
    chatBox.scrollTop = chatBox.scrollHeight;
}


// ================================
// SEND MESSAGE
// ================================

function sendMessage() {
    const message = messageInput.value.trim();

    // Don't send empty messages
    if (message === "") {
        return;
    }

    // Show user's message
    addMessage(message, "user");

    // Clear the input
    messageInput.value = "";

    // Make ZappyBot think for a moment
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, "bot");
    }, 500);
}


// ================================
// ZAPPYBOT'S BRAIN
// ================================

function getBotResponse(message) {

    const text = message.toLowerCase();


    // ================================
    // GAME IDEAS
    // ================================

    if (
        text.includes("game") ||
        text.includes("video game")
    ) {

        const ideas = [

            "🌊 FLOODLINE — You're trapped on an island that slowly floods. Build upward, gather resources, and survive as long as possible.",

            "👻 THE EMPTY SCHOOL — Explore a school where the rooms randomly change every time you leave them.",

            "🤖 ROBOT SCRAPYARD — Build a robot from random junk and use it to explore a dangerous scrapyard.",

            "🏝️ ONE TREE ISLAND — You're stranded on an island with exactly ONE tree. What you do with that tree determines whether you survive.",

            "🕳️ THE HOLE — A strange hole appears in your backyard. Every day, something new comes out of it.",

            "🏭 TINY FACTORY — Start with one machine and slowly build a giant automated factory.",

            "🐛 BUG EMPIRE — Start as one tiny bug and build an entire insect civilization.",

            "⏰ TEN MINUTES — You have exactly ten minutes to prepare before the entire world resets.",

            "🚂 LAST TRAIN — You wake up on a train that never stops. Every station has something different waiting for you.",

            "🏚️ THE HOUSE THAT MOVES — Every time you leave a room, the house rearranges itself."
        ];

        return randomIdea(ideas);
    }


    // ================================
    // HORROR IDEAS
    // ================================

    if (
        text.includes("horror") ||
        text.includes("scary") ||
        text.includes("creepy")
    ) {

        const ideas = [

            "📹 CAMERA 13 — You're monitoring security cameras at night. One camera shows a room that doesn't exist.",

            "🚪 DOOR 0 — Every door in the building has a number except one. Nobody knows where Door 0 leads.",

            "📞 UNKNOWN CALLER — Your computer receives mysterious calls from someone who seems to know what you're doing.",

            "🏫 AFTER SCHOOL — You stayed at school too late. The building looks normal... except there are no exits.",

            "🌲 THE FOREST SIGNAL — Your radio keeps receiving a strange signal from somewhere deep in the forest.",

            "💡 THE LAST LIGHT — Every light in the building turns off one by one. You need to figure out why.",

            "🖥️ THE COMPUTER — An old computer starts displaying messages that seem to know things about the player.",

            "⏰ 3:17 AM — Every night at exactly 3:17, something in the house changes."
        ];

        return randomIdea(ideas);
    }


    // ================================
    // WEBSITE IDEAS
    // ================================

    if (
        text.includes("website") ||
        text.includes("web site")
    ) {

        const ideas = [

            "🌎 BUGWORLD — Create an interactive website showing a strange civilization of insects.",

            "🎮 GAME VAULT — Make a website where you collect and organize all your game ideas.",

            "🧪 CRAZY LAB — Visitors can combine random objects and discover what happens.",

            "🏛️ MINI CIVILIZATION — Build a tiny civilization and make decisions that affect its population.",

            "📖 MYSTERY ARCHIVE — Create a website full of strange documents that slowly reveal a story.",

            "💻 FAKE COMPUTER — Build a fake operating system with apps, files, settings, and hidden secrets.",

            "🗺️ WORLD BUILDER — Let visitors create their own tiny world using buttons and tiles."
        ];

        return randomIdea(ideas);
    }


    // ================================
    // RANDOM IDEAS
    // ================================

    if (
        text.includes("random") ||
        text.includes("anything") ||
        text.includes("surprise") ||
        text.includes("whatever")
    ) {

        const ideas = [

            "🎲 Make a game where EVERYTHING is controlled by one button.",

            "🦆 Create a website documenting the world's most suspicious duck.",

            "🌋 Build a civilization simulator where the ground randomly disappears.",

            "📦 Make a mystery game where the player receives a strange package every day.",

            "🧠 Create a fake operating system with secret programs hidden inside it.",

            "🐛 Make a game where you start as a tiny bug and build an entire bug civilization.",

            "⏰ Create a game where the world only exists for ten minutes before resetting.",

            "🏝️ Make an island survival game where the island changes every morning.",

            "🤖 Build a robot that learns new abilities whenever you give it random parts.",

            "🚪 Create a game where every door leads to a completely different world."
        ];

        return randomIdea(ideas);
    }


    // ================================
    // YOUTUBE IDEAS
    // ================================

    if (
        text.includes("youtube") ||
        text.includes("video idea") ||
        text.includes("youtube idea")
    ) {

        const ideas = [

            "🎮 Make a video where you build a tiny game in exactly one hour.",

            "💻 Build a weird website from scratch and see how far you can get.",

            "😱 Make the simplest horror game possible in 30 minutes.",

            "🧪 Create a completely useless invention and turn it into a game.",

            "⚡ Try making a game using only one button.",

            "🌎 Build a tiny civilization simulator and see what happens after 100 days."
        ];

        return randomIdea(ideas);
    }


    // ================================
    // CODING IDEAS
    // ================================

    if (
        text.includes("coding") ||
        text.includes("programming") ||
        text.includes("code")
    ) {

        const ideas = [

            "💻 Make your own mini programming language.",

            "🤖 Build a chatbot from scratch using JavaScript.",

            "🎮 Create a game engine with HTML Canvas.",

            "🖥️ Make your own fake computer operating system.",

            "🌎 Build a civilization simulator using JavaScript.",

            "🎲 Create a random idea generator like ZappyBot!"
        ];

        return randomIdea(ideas);
    }


    // ================================
    // GREETINGS
    // ================================

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "⚡ Hey! I'm ZappyBot, your idea generator! Ask me for a game, horror, website, coding, YouTube, or random idea!";
    }


    // ================================
    // HELP
    // ================================

    if (text.includes("help")) {

        return "⚡ I can generate GAME ideas, HORROR ideas, WEBSITE ideas, CODING ideas, YOUTUBE ideas, or completely RANDOM ideas!";
    }


    // ================================
    // NAME
    // ================================

    if (
        text.includes("your name") ||
        text.includes("who are you")
    ) {

        return "I'm ZappyBot! ⚡ I'm a project idea generator built with JavaScript.";
    }


    // ================================
    // GOODBYE
    // ================================

    if (
        text.includes("bye") ||
        text.includes("goodbye")
    ) {

        return "See ya! ⚡ Come back whenever you need an idea!";
    }


    // ================================
    // DEFAULT RESPONSE
    // ================================

    return "🤔 I'm not sure what kind of idea you're looking for. Try asking for a GAME, HORROR, WEBSITE, CODING, YOUTUBE, or RANDOM idea! ⚡";
}


// ================================
// PICK A RANDOM IDEA
// ================================

function randomIdea(ideas) {

    const randomIndex = Math.floor(Math.random() * ideas.length);

    return ideas[randomIndex];
}


// ================================
// BUTTON
// ================================

sendButton.addEventListener("click", sendMessage);


// ================================
// ENTER KEY
// ================================

messageInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});
