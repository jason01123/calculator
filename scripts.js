let operand1 = "";
let operand2 = "";
let currentOperator = "";
let clearOnNext = false;

const display = document.querySelector(".display-content");

function allClear() {
    operand1 = "";
    operand2 = "";
    currentOperator = "";
    clearOnNext = false;
    display.innerText = "";
}

function appendDigit(digit) {
    if(clearOnNext) {
        display.innerText = "";
        clearOnNext = false;
    }
    current = display.innerText;
    display.innerText = current + digit;
}

function executeOperation(operator) {
    console.log("operation: " + operator)
    if(display.innerText !== "") {
        if(operand1 === "" && operator !=="=") {
            operand1 = display.innerText;
            display.innerText = "";
            currentOperator = operator;
        }
        else if(operand2 === "" && operand1 != "") { 
            operand2 = display.innerText;
            if(currentOperator !== "=")
                display.innerText = operate(operand1, operand2, currentOperator);
            currentOperator = operator;
            operand1 = display.innerText;
            operand2 = "";
            clearOnNext = true;
        }
    }
}

const btns = document.querySelector(".buttons");
btns.addEventListener("click", (e) => {
    if(e.target.classList.contains("one-btn"))
        appendDigit("1");
    else if(e.target.classList.contains("two-btn"))
        appendDigit("2");  
    else if(e.target.classList.contains("three-btn"))
        appendDigit("3");  
    else if(e.target.classList.contains("four-btn"))
        appendDigit("4");  
    else if(e.target.classList.contains("five-btn"))
        appendDigit("5");  
    else if(e.target.classList.contains("six-btn"))
        appendDigit("6");  
    else if(e.target.classList.contains("seven-btn"))
        appendDigit("7");  
    else if(e.target.classList.contains("eight-btn"))
        appendDigit("8");  
    else if(e.target.classList.contains("nine-btn"))
        appendDigit("9");
    else if(e.target.classList.contains("zero-btn"))
        appendDigit("0");
    else if(e.target.classList.contains("divide-btn"))
        executeOperation("/");
    else if(e.target.classList.contains("multiply-btn"))
        executeOperation("*");
    else if(e.target.classList.contains("subtract-btn"))
        executeOperation("-");
    else if(e.target.classList.contains("add-btn"))
        executeOperation("+");
    else if(e.target.classList.contains("equals-btn"))
        executeOperation("=");      
    else if(e.target.classList.contains("ac-btn"))
        allClear();
});

function add(op1, op2){
    return parseInt(op1) + parseInt(op2);
}

function subtract(op1, op2){
    return parseInt(op1) - parseInt(op2);
}

function multiply(op1,op2){
    return parseInt(op1) * parseInt(op2);
}

function divide(op1,op2) {
    if(parseInt(op2) == 0)
        return "divide by 0 error";
    return parseInt(op1) / parseInt(op2);
}

function operate(op1, op2, op){
    console.log(op);
    if(op === "+")
        return add(op1, op2);
    else if(op === "-")
        return subtract(op1, op2);
    else if(op === "*")
        return multiply(op1, op2);
    else if(op === "/")
        return divide(op1, op2);

}

