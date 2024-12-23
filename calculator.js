let expression = '';

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        clearDisplay();
    }
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = expression;
}
