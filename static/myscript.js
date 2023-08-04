
/**
 * This method will consume the backend API & sets the generated result
 */
function getGeneratedResponse(input, selectedModel) {
    const apiUrl = `/generate_text?input=${input}&model=${selectedModel}`;
    const generatedTextDiv = document.getElementById('generated-text');
    generatedTextDiv.innerHTML = "Generating, Please wait...";
    fetch(apiUrl, {
        method: 'GET'
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Preparing the generated result by removing the input text
            apiResponse = data[0].generated_text.slice(input.length).trim();
            // This is just to ensure that always the first char should be uppercase
            apiResponse = apiResponse.charAt(0).toUpperCase() + apiResponse.slice(1)
            generatedTextDiv.innerHTML = apiResponse;
        })
        .catch((error) => {
            generatedTextDiv.innerHTML = "There's some issue, Please retry!";
            console.error('Error:', error);
        });
}

/**
 * This method will change the placeholder of input box based on the selected task
 */
function onTaskChange() {
    const selectedTask = document.getElementById('task').value;
    const promtTextArea = document.getElementById('seed-text');
    const placeholderForTestCase = 'Describe about your feature to generate the test cases...';
    const placeholderForUS = 'Say something about your requirement to write the User story...';
    promtTextArea.placeholder = selectedTask === 'userStory' ? placeholderForUS : placeholderForTestCase;
}

/**
 * This method will pre-process the given input
 */
function generateText() {
    const seedText = document.getElementById('seed-text').value;
    const selectedTask = document.getElementById('task').value;
    const selectedModel = document.getElementById('ai-model').value;
    const promptForTestCase = "Write a step by step manual software test case for the following requirement,";
    const promptForAutomationCode = "Write a software test case code for the following requirement,";
    const promptForUserStory = "Write an user story for the following feature,";
    let processedInputTest;
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
    getGeneratedResponse(processedInputTest, selectedModel);
}

/**
 * Copies the generated result into the clipboard
 */
function onCopyToClipbord() {
    const result = document.getElementById('generated-text');
    navigator.clipboard.writeText(result.innerHTML);
}