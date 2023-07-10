function addFunc(n1, n2) {
    return Number(n1) + Number(n2);
}

function subFunc(n1, n2) {
    return Number(n1) - Number(n2);
}

function multFunc(n1, n2) {
    return Number(n1) * Number(n2);
}

function divFunc(n1, n2) {
    if (n2 == 0) {
        return "ERROR"
    }
    return Number(n1) / Number(n2);
}

let num1 = 0;
let oper = null;
let num2 = null;
let current;
let ans;

function operate(n1, op, n2) {
    if (op == '+') {
        return addFunc(n1, n2);
    } else if (op == '-') {
        return subFunc(n1, n2);
    } else if (op == '*') {
        return multFunc(n1, n2);
    } else if (op == '/') {
        return divFunc(n1, n2);
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

const AC = document.querySelector('#ac');
const screen = document.querySelector('.screen');
AC.addEventListener('click', function(e) {
    screen.innerHTML = 0;
    num1 = 0;
    oper = null;
    num2 = null;
});

const posNeg = document.querySelector('#posneg');
posNeg.addEventListener('click', function(e) {
    if (current == 'num1' && num1 != 0) {
        num1 = -num1;
        screen.innerHTML = num1;
    } else if (current == 'num2' && num2 != 0) {
        num2 = -num2;
        screen.innerHTML = num2;
    }
});

function readNum(input) {
    if (oper == null) {
        if (num1 == 0) {
            num1 = input;
        } else {
            num1 = num1 + "" + input;
        }
        screen.innerHTML = num1;
        current = 'num1'; //
    } else {
        if (num2 == null || num2 == 0) {
            num2 = input;
        } else {
            num2 = num2 + "" + input;
        }
        screen.innerHTML = num2;
        current = 'num2'; //
    }
}

// numbers
const zero = document.querySelector('#zero');
zero.addEventListener('mouseup', function(e) {
    if (oper == null && num1 != 0) {
        num1 = num1 + "" + 0;
        screen.innerHTML = num1;
        current = 'num1';
    } else if (oper != null && num2 == null) {
        num2 = 0;
        screen.innerHTML = num2;
        current = 'num2';
    } else if (oper != null && num2 != 0) {
        num2 = num2 + "" + 0;
        screen.innerHTML = num2;
        current = 'num2';
    }
});

numBtns.forEach(function(currentValue, currentIndex) {
    if (currentIndex == 9) {
        return;
    }
    currentValue.addEventListener('mouseup', function(e) {
        readNum(Number(currentValue.textContent));
    });
});

// operations
const add = document.querySelector('#add');
add.addEventListener('mouseup', function(e) {
    if (oper == null) {
        oper = '+';
    } else {
        if (num2 == null) {
            oper = '+';
        } else {
            num1 = operate(num1, oper, num2);
            screen.innerHTML = num1;
            oper = '+';
            num2 = null;
        }
    }
    current = 'op';
});
const sub = document.querySelector('#sub');
sub.addEventListener('mouseup', function(e) {
    if (oper == null) {
        oper = '-';
    } else {
        if (num2 == null) {
            oper = '-';
        } else {
            num1 = operate(num1, oper, num2);
            screen.innerHTML = num1;
            oper = '-';
            num2 = null;
        }
    }
    current = 'op';
});
const mult = document.querySelector('#mult');
mult.addEventListener('mouseup', function(e) {
    if (oper == null) {
        oper = '*';
    } else {
        if (num2 == null) {
            oper = '*';
        } else {
            num1 = operate(num1, oper, num2);
            screen.innerHTML = num1;
            oper = '*';
            num2 = null;
        }
    }
    current = 'op';
});
const div = document.querySelector('#div');
div.addEventListener('mouseup', function(e) {
    if (oper == null) {
        oper = '/';
    } else {
        if (num2 == null) {
            oper = '/';
        } else {
            num1 = operate(num2, oper, num2);
            screen.innerHTML = num1;
            oper = '/';
            num2 = null;
        }
    }
    current = 'op';
});
const eq = document.querySelector('#eq');