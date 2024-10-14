//typing text
const text = "Hello, welcome to dynamic typing!";
const typingTextElement = document.getElementById('typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    }
}

type();
