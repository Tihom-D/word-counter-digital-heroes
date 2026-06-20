const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
    const text = textInput.value;
    
    // Count characters
    charCount.textContent = text.length;
    
    // Count words (filters out empty spaces)
    const words = text.trim().split(/\s+/);
    wordCount.textContent = text.trim() === '' ? 0 : words.length;
});