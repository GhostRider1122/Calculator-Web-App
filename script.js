let displayValue = '';
let operationPerformed = false;
let prevResult = 0;
let prevOperator = null;

function appendToDisplay(value) {
    if (operationPerformed && '+-*/'.includes(value)) {
        // Continue with the previous result and apply the new operator
        prevOperator = value;
        displayValue = prevResult + value;
        operationPerformed = false;
    } else if (operationPerformed || value === prevResult) {
        // Clear the display if a non-operator input follows an operation
        displayValue = value;
        operationPerformed = false;
    } 
    else {
        displayValue += value;
    }
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
    operationPerformed = false;
    // prevResult = null;
    prevOperator = null;
}

function clearLastCharacter() {
    if (!operationPerformed && displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        document.getElementById('display').value = displayValue;
    }
}

function calculatePercentage() {
    try {
        let currentValue = eval(displayValue);
        currentValue /= 100;
        document.getElementById('display').value = currentValue;
        operationPerformed = true;
        prevResult = currentValue;
        prevOperator = displayValue.slice(-1);
    } catch (error) {
        document.getElementById('display').value = 'Error';
        clearDisplay();
    }
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        operationPerformed = true;

        // Store the previous result and operator
        prevResult = result;
        prevOperator = displayValue.slice(-1);
    } catch (error) {
        document.getElementById('display').value = 'Error';
        clearDisplay(); // Reset the calculator state on error
    }
}

