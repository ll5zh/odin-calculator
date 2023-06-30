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
    if (n2 == 0) {
        return "ERROR"
    }
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

const topBtns = document.querySelectorAll('.top');
topBtns.forEach(function(currentValue) {
    currentValue.addEventListener('mousedown', function(e) {
        currentValue.style.cssText = 'background-color: rgb(255, 194, 141)';
    });
});
topBtns.forEach(function(currentValue) {
    currentValue.addEventListener('mouseup', function(e) {
        currentValue.style.cssText = 'background-color: peachpuff';
    });
});

const numBtns = document.querySelectorAll('.num');
numBtns.forEach(function(currentValue) {
    currentValue.addEventListener('mousedown', function(e) {
        currentValue.style.cssText = 'background-color: rgb(110, 234, 110)';
    })
});
numBtns.forEach(function(currentValue) {
    currentValue.addEventListener('mouseup', function(e) {
        currentValue.style.cssText = 'background-color: rgb(162, 250, 162)';
    })
});

const opBtns = document.querySelectorAll('.op');
opBtns.forEach(function(currentValue) {
    currentValue.addEventListener('mousedown', function(e) {
        currentValue.style.cssText = 'background-color: rgb(255, 166, 181)';
    });
});
opBtns.forEach(function(currentValue) {
    currentValue.addEventListener('mouseup', function(e) {
        currentValue.style.cssText = 'background-color: rgb(251, 201, 209)';
    });
});