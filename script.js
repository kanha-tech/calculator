let display = document.getElementById('display');
let currentInput = "";

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === "") return;
  currentInput += " " + op + " ";
  display.value = currentInput;
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}