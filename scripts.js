let operand1 = 0;
let operand2 = 0;
let operator = "";

console.log(operate(2,3,"+"));
console.log(operate(2,3,"-"));
console.log(operate(2,3,"*"));
console.log(operate(2,3,"/"));

function add(op1, op2){
    return op1 + op2;
}

function subtract(op1, op2){
    return op1 - op2;
}

function multiply(op1,op2){
    return op1 * op2;
}

function divide(op1,op2) {
    return op1 / op2;
}

function operate(op1, op2, op){
    if(op === "+")
        return add(op1, op2);
    else if(op === "-")
        return subtract(op1, op2);
    else if(op === "*")
        return multiply(op1, op2);
    else
        return divide(op1, op2);
}