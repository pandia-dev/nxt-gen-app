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
    promtTextArea.placeholder = selectedTask === 'userStory' ? placeholderForUS : placeholderForTestCase;
}

function generateText() {
    const seedText = document.getElementById('seed-text').value;
    const selectedTask = document.getElementById('task').value;
    const promptForTestCase = "Write a step by step manual software test case for the following requirement,"
    const promptForAutomationCode = "Write a software test case code for the following requirement,"
    const promptForUserStory = "Write an user story for the following feature,"
    let processedInputTest
    switch (selectedTask) {
        case 'testCase':
            processedInputTest = `${promptForTestCase} "${seedText}"`;
            break;
        case 'automationCode':
            processedInputTest = `${promptForAutomationCode} "${seedText}"`;
            break;
        case 'userStory':
            processedInputTest = `${promptForUserStory} "${seedText}"`;
            break;
    }
    getGeneratedResponse(processedInputTest)
}

function onCopyToClipbord() {
    const result = document.getElementById('generatedText');
    navigator.clipboard.writeText(result.innerHTML);
}