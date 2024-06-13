let display = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let operation = '';

function appendNumber(number) {
    if (operation === '') {
        firstNumber += number;
        display.value = firstNumber;
    } else {
        secondNumber += number;
        display.value = secondNumber;
    }
}

function setOperation(op) {
    if (firstNumber === '') return;
    operation = op;
    display.value = '';
}

function calculate() {
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        default:
            return;
    }
    display.value = result;
    firstNumber = result;
    secondNumber = '';
    operation = '';
}

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
    display.value = '';
}