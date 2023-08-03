function onLoad() {
    debugger
    fetch('/generate_text')
        .then((response) => response.json())
        .then((data) => {
            const promtTextArea = document.getElementById('seed-text');
            promtTextArea.innerText = data.message;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function onTaskChange() {
    const selectedTask = document.getElementById('task').value;
    const promtTextArea = document.getElementById('seed-text');
    promtTextArea.placeholder = selectedTask === 'testCase' ? 'Describe about your feature to generate the test cases...' : 'Say something about your requirement to write the User story...';
}

function generateText() {
    const inputText = document.getElementById('seed-text').value;
    const responseElement = document.getElementById('response-section');
    if (inputText && inputText.length > 0) {
        responseElement.style.display = 'inline';
        // Replace the following lines with our text generation logic (currntly we're returning the same as input).
        const generatedText = inputText;
        // Update the UI with the generated text.
        const generatedTextDiv = document.getElementById('generatedText');
        generatedTextDiv.innerText = generatedText;
    } else {
        responseElement.style.display = 'none';
    }
}

function onCopyToClipbord() {
    const result = document.getElementById('generatedText');
    navigator.clipboard.writeText(result.innerHTML);
}

// const axios = require('axios');
// async function getData() {
//     try {
//         const response = await axios.get('https://api.example.com/data');
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }