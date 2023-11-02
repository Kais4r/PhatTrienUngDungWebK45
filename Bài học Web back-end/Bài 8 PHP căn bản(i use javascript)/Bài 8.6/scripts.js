// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to read a text file asynchronously
    function readTextFile(file, callback) {
        fetch(file)
            .then((response) => response.text())
            .then((data) => callback(data))
            .catch((error) => console.error("Error reading file: " + error));
    }

    // Initialize arrays for questions, options, and results
    let arrQuestions = {};
    let arrOptions = {};
    let arrResults = [];

    // Read questions.txt
    readTextFile("questions.txt", function (data) {
        const lines = data.split("\n");
        for (const line of lines) {
            const [id, question] = line.split("|");
            arrQuestions[id] = { question };
        }
        loadOptions();
    });

    // Read options.txt
    function loadOptions() {
        readTextFile("options.txt", function (data) {
            const lines = data.split("\n");
            for (const line of lines) {
                const [questionID, optionID, option, point] = line.split("|");
                if (!arrOptions[questionID]) {
                    arrOptions[questionID] = {};
                }
                arrOptions[questionID][optionID] = { option, point: parseInt(point) };
            }
            loadResults();
        });
    }

    // Read result.txt
    function loadResults() {
        readTextFile("result.txt", function (data) {
            const lines = data.split("\n");
            for (const line of lines) {
                const [min, max, result] = line.split("|");
                arrResults.push({ min: parseInt(min), max: parseInt(max), result });
            }
            // Proceed to create the HTML elements using the loaded data
            createQuestionForm();
        });
    }

    // Create the question form
    function createQuestionForm() {
        const questionsContainer = document.getElementById("questions-container");
        let i = 1;

        for (const key in arrQuestions) {
            const questionDiv = document.createElement("div");
            questionDiv.className = "question";

            const questionText = document.createElement("p");
            questionText.innerHTML = `<span>Câu hỏi ${i}:</span> ${arrQuestions[key].question}`;
            questionDiv.appendChild(questionText);

            const optionsList = document.createElement("ul");
            for (const keyC in arrOptions[key]) {
                const option = arrOptions[key][keyC];
                const listItem = document.createElement("li");
                listItem.innerHTML = `<label><input type="radio" name="${key}" value="${option.point}"> ${option.option}</label>`;
                optionsList.appendChild(listItem);
            }
            questionDiv.appendChild(optionsList);

            questionsContainer.appendChild(questionDiv);
            i++;
        }
    }
});
