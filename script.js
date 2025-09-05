function greetUser() {
    const name = document.getElementById('nameInput').value.trim();
    const greetingElement = document.getElementById('greeting');
    if (name) {
        greetingElement.textContent = `Hello, ${name}! Nice to meet you.`;
    } else {
        greetingElement.textContent = 'Please enter your name!';
    }
}