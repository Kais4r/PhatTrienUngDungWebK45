let expression = "";
let result = "";

function appendToExpression(value) {
    expression += value;
    document.getElementById("expression").textContent = expression;
}

function clearOutput() {
    expression = "";
    result = "";
    document.getElementById("expression").textContent = "";
    document.getElementById("result").textContent = "0";
}

function calculateResult() {
    try {
        result = eval(expression);
        document.getElementById("result").textContent = result;
    } catch (error) {
        document.getElementById("result").textContent = "Error";
    }
}

clearOutput();