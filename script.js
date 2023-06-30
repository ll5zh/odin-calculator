function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

let num1;
let oper;
let num2;

function operate(n1, op, n2) {
    if (op == '+') {
        add(n1, n2);
    } else if (op == '-') {
        subtract(n1, n2);
    } else if (op == '*') {
        multiply(n1, n2);
    } else if (op == '/') {
        divide(n1, n2);
    }
}
