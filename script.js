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
let current = 'num1';
let isDecimal = false;
let isFloating = false;
let display = 0;

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
AC.addEventListener('click', function(e) {
    screen.innerHTML = 0;
    num1 = 0;
    oper = null;
    num2 = null;
    isDecimal = false;
    isFloating = false;
});

const screen = document.querySelector('.screen');

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
            if (isFloating == true) {
                num1 = 0 + input / 10;
                isFloating = false;
            } else {
                num1 = input;
            }
        } else {
            if (isFloating == true) {
                num1 = num1 + input / 10;
                isFloating = false;
            } else {
                num1 = num1 + "" + input;
                num1 = squeezeNum(num1);
            }
        }
        screen.innerHTML = num1;
        current = 'num1'; //
        isDecimal = getDecimalStatus(num1);
    } else {
        if (num2 == null || num2 == 0) {
            if (isFloating == true) {
                num2 = 0 + input / 10;
                isFloating = false;
            } else {
                num2 = input;
            }
        } else {
            if (isFloating == true) {
                num2 = num2 + input / 10;
                isFloating = false;
            } else {
                num2 = num2 + "" + input;
                num2 = squeezeNum(num2);
            }
        }
        screen.innerHTML = num2;
        current = 'num2';
        isDecimal = getDecimalStatus(num2);
    }
}

// numbers
const zero = document.querySelector('#zero');
zero.addEventListener('mouseup', function(e) {
    if (oper == null && num1 != 0) {
        num1 = num1 + "" + 0;
        num1 = squeezeNum(num1);
        screen.innerHTML = num1;
        current = 'num1';
        isDecimal = getDecimalStatus(num1);
    } else if (oper != null && num2 == null) {
        num2 = 0;
        screen.innerHTML = num2;
        current = 'num2';
        isDecimal = getDecimalStatus(num2);
    } else if (oper != null && num2 != 0) {
        num2 = num2 + "" + 0;
        num2 = squeezeNum(num2);
        screen.innerHTML = num2;
        current = 'num2';
        isDecimal = getDecimalStatus(num2);
    }
});

numBtns.forEach(function(currentValue, currentIndex) {
    if (currentIndex == 9 || currentIndex == 10) {
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
            num1 = squeezeCalc(operate(num1, oper, num2));
            screen.innerHTML = num1;
            oper = '+';
            num2 = null;
            isDecimal = getDecimalStatus(num1);
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
            num1 = squeezeCalc(operate(num1, oper, num2));
            screen.innerHTML = num1;
            oper = '-';
            num2 = null;
            isDecimal = getDecimalStatus(num1);
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
            num1 = squeezeCalc(operate(num1, oper, num2));
            screen.innerHTML = num1;
            oper = '*';
            num2 = null;
            isDecimal = getDecimalStatus(num1);
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
            num1 = squeezeCalc(operate(num1, oper, num2));
            screen.innerHTML = num1;
            oper = '/';
            num2 = null;
            isDecimal = getDecimalStatus(num1);
        }
    }
    current = 'op';
});
const eq = document.querySelector('#eq');
eq.addEventListener('mouseup', function(e) {
    if (oper != null) {
        if (num2 != null) {
            num1 = squeezeCalc(operate(num1, oper, num2));
            screen.innerHTML = num1;
            oper = null;
            num2 = null;
        } else {
            num2 = num1;
            num1 = operate(num1, oper, num2);
            screen.innerHTML = num1;
            oper = null;
            num2 = null;
        }
    }
    current = 'num1';
    isDecimal = getDecimalStatus(num1);
})

const dot = document.querySelector('#dot');
dot.addEventListener('mouseup', function(e) {
    if (isDecimal == false) {
        if (current == 'num1') {
            screen.innerHTML = num1 + '.';
            isFloating = true;
        } else if (current == 'num2') {
            screen.innerHTML = num2 + '.';
            isFloating = true;
        } else if (current == 'op') {
            num2 = 0;
            current = 'num2';
            screen.innerHTML = num2 + '.';
            isFloating = true;
        }
        isDecimal = true;
    }
});

function getDecimalStatus(num) {
    let numStr = num.toString();
    if (numStr.indexOf('.') < 0) {
        return false;
    }
    return true;
}

function squeezeCalc(num) {
    // screen displays a maximum length of 10
    // account for negative number possibility (max 9 digits + 1 possible negative sign)
    let numStr = num.toString();
    if (numStr.length > 9) {
        // if value bigger than 999999999, display no bigger
        if (num > 999999999) {
            // return max possible value
            return 999999999;
        } else if (num < -999999999) {
            // return min possible value
            return -999999999;
        }
        // if no decimal, splice so it's length 9 if positive, length 10 if negative (9 digits)
        else if (numStr.length > 9) { 
            if (num < 0) {
                return Number(numStr.substr(0, 10));
            } else {
                return Number(numStr.substr(0, 9));
            }
        }
    }
    return num;
}

function squeezeNum(num) {
    let numStr = num.toString();
    if (numStr.length > 9) {
        return Number(numStr.substr(0, 9));
    }
    return num;
}

