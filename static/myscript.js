function getGeneratedResponse(input) {
    const apiUrl = `/generate_text?input=${input}`;
    const generatedTextDiv = document.getElementById('generatedText');
    generatedTextDiv.innerHTML = "Generating, Please wait..."
    fetch(apiUrl, {
        method: 'GET'
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            apiResponse = data[0].generated_text;
            // const escapedSentence = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // // Create a regular expression to match the sentence to remove (case-insensitive)
            // const regex = new RegExp('\\b' + escapedSentence + '\\b', 'gi');
            // // Replace the sentence with an empty string
            // const modifiedString = apiResponse.replace(regex, '');
            // generatedTextDiv.innerHTML = modifiedString;
            generatedTextDiv.innerHTML = apiResponse;
        })
        .catch((error) => {
            generatedTextDiv.innerHTML = "There's some issue, Please retry!"
            console.error('Error:', error);
        });
}

function onTaskChange() {
    const selectedTask = document.getElementById('task').value;
    const promtTextArea = document.getElementById('seed-text');
    const placeholderForTestCase = 'Describe about your feature to generate the test cases...';
    const placeholderForUS = 'Say something about your requirement to write the User story...';
    promtTextArea.placeholder = selectedTask === 'testCase' ? placeholderForTestCase : placeholderForUS;
}

function generateText() {
    const seedText = document.getElementById('seed-text').value;
    const selectedTask = document.getElementById('task').value;
    promptForTestCase = "Write a test for the following requirement,"
    promptForUserStory = "Write an user story for following feature,"
    processedInputTest = `${selectedTask === 'testCase' ? promptForTestCase : promptForUserStory} "${seedText}"`
    getGeneratedResponse(processedInputTest)
}

function onCopyToClipbord() {
    const result = document.getElementById('generatedText');
    navigator.clipboard.writeText(result.innerHTML);
}