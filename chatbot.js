// Toggle chatbot visibility (show/hide chat window)
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

// Handle sending messages
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Display user message
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message user-message';
        userMessageElement.textContent = userMessage;
        chatMessages.appendChild(userMessageElement);

        // Display bot response
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'chat-message bot-message';
        botMessageElement.textContent = getBotReply(userMessage);
        chatMessages.appendChild(botMessageElement);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input
        userInput.value = '';
    }
}

// Function to get bot reply based on keywords in the sentence
function getBotReply(message) {
    const keywords = {
        hello: "Hello! How can I assist you today?",
        hi: "Hi there! What can I do for you?",
        help: "Sure! Please let me know what you need help with.",
        // Nutrients
        nutrients: "Nutrients are essential for plant growth. Do you want to know about primary macronutrients, secondary macronutrients, or micronutrients?",
        "primary macronutrients": "Primary macronutrients include nitrogen (N), phosphorus (P), and potassium (K), which are crucial for plant growth and development.",
        "secondary macronutrients": "Secondary macronutrients include calcium (Ca), magnesium (Mg), and sulfur (S), which support soil health and plant structure.",
        micronutrients: "Micronutrients include elements like iron (Fe), zinc (Zn), and manganese (Mn), which are required in small amounts but are vital for plant metabolism.",

        // Pesticides
        pesticides: "Pesticides are used to protect plants from pests and diseases. Do you want to know about insecticides, fungicides, or herbicides?",
        insecticides: "Insecticides are chemicals used to kill or manage harmful insects that damage crops.",
        fungicides: "Fungicides are substances used to prevent or eliminate fungal infections in plants.",
        herbicides: "Herbicides are chemicals designed to control or destroy unwanted plants (weeds).",

        // Biostimulants
        biostimulants: "Biostimulants enhance plant growth and resilience. Would you like to know about organic or generic biostimulants?",
        organic: "Organic biostimulants are derived from natural materials such as seaweed extracts and humic substances. They improve stress tolerance and nutrient uptake.",
        generic: "Generic biostimulants include synthetic or broad-use formulations that boost root development and overall plant vigor.",

        // Default response
        default: "Sorry, I didn't understand that. Can you try rephrasing your question?",
    };

    // Convert the message to lowercase for case-insensitive matching
    const lowerMessage = message.toLowerCase();

    // Iterate over the keywords to find a match
    for (const key in keywords) {
        if (lowerMessage.includes(key)) {
            return keywords[key]; // Return the response for the matched keyword
        }
    }

    // Return the default response if no keyword matches
    return keywords.default;
}

// Function to clear chat messages
function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = ''; // Clears all the messages
}
