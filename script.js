//Make the buttons active

const btnOne = document.querySelector("#btn-1");
const btnTwo = document.querySelector("#btn-2");
const btnThree = document.querySelector("#btn-3");
const btnFour = document.querySelector("#btn-4");
const btnFive = document.querySelector("#btn-5");
const btnSix = document.querySelector("#btn-6");
const btnSeven = document.querySelector("#btn-7");
const btnEight = document.querySelector("#btn-8");
const btnNine = document.querySelector("#btn-9");
const btnZero = document.querySelector("#btn-0");
const btnClear = document.querySelector("#btn-clear");
const btnDot = document.querySelector("#btn-dot");
const btnEqual = document.querySelector("#btn-equal");
const btnAdd = document.querySelector("#btn-add");
const btnSub = document.querySelector("#btn-sub");
const btnDivide = document.querySelector("#btn-divide");
const btnMulti = document.querySelector("#btn-multi");
const display = document.querySelector("output");

const values = {
    num1: 0,
    num2: 0,
    operator: "",
    result: 0,
};

//All the individual number button eventlisteners

btnOne.addEventListener('click', () => {
    display.innerHTML += 1;
});
btnTwo.addEventListener('click', () => {
    display.innerHTML += 2;
});
btnThree.addEventListener('click', () => {
    display.innerHTML += 3;
});
btnFour.addEventListener('click', () => {
    display.innerHTML += 4;
});
btnFive.addEventListener('click', () => {
    display.innerHTML += 5;
});
btnSix.addEventListener('click', () => {
    display.innerHTML += 6;
});
btnSeven.addEventListener('click', () => {
    display.innerHTML += 7;
});
btnEight.addEventListener('click', () => {
    display.innerHTML += 8;
});
btnNine.addEventListener('click', () => {
    display.innerHTML += 9;
});
btnZero.addEventListener('click', () => {
    display.innerHTML += 0;
});

//Misc buttons

btnClear.addEventListener('click', () => {
    display.innerHTML = '';
    values.num1 = 0;
    values.num2 = 0;
    values.operator = '';
    values.result = 0;
    console.log("Clear");
    console.log(values);
});

btnDot.addEventListener('click', () => {
    if (!display.innerHTML.includes(".")) {
        display.innerHTML += ".";   
    } else {
        return;
    }
});

// "Operate" button

btnEqual.addEventListener('click', () => {
    if (values.operator === "+") {
        values.num2 = parseFloat(display.innerHTML);
        values.result = values.num1 + values.num2;
        display.innerHTML = values.result;
        console.log("=");
        console.log(values);
    }
    if (values.operator === "-") {
        values.num2 = parseFloat(display.innerHTML);
        values.result = values.num1 - values.num2;
        display.innerHTML = values.result;
        console.log("=");
        console.log(values);
    }
    if (values.operator === "/") {
        if (values.num2 === 0) {
            display.innerHTML = "ERROR - Can't divide by 0"
        } else {
            values.num2 = parseFloat(display.innerHTML);
            values.result = values.num1 / values.num2;
            display.innerHTML = values.result;
            console.log("=");
            console.log(values);
        }
    }
    if (values.operator === "*") {
        values.num2 = parseFloat(display.innerHTML);
        values.result = values.num1 * values.num2;
        display.innerHTML = values.result;
        console.log("=");
        console.log(values);
    }
});

//Operators

btnAdd.addEventListener('click', () => {
    if (values.num1 === 0) {
        values.num1 = parseFloat(display.innerHTML);
        values.operator = "+";
        console.log("+");
    } else {
        values.num2 = parseFloat(display.innerHTML);
        values.operator = "+";
        console.log("+"); 
    }
    display.innerHTML = "";
    console.log("+");
    console.log(values);
});

btnSub.addEventListener('click', () => {
    if (values.num1 === 0) {
        values.num1 = parseFloat(display.innerHTML);
        values.operator = "-";
        console.log("-");
    } else {
        values.num2 = parseFloat(display.innerHTML);
        values.operator = "-";
        console.log("-");
    }
    display.innerHTML = "";
    console.log(values);
    console.log("-");
});

btnDivide.addEventListener('click', () => {
    if (values.num1 === 0) {
        values.num1 = parseFloat(display.innerHTML);
        values.operator = "/";
        console.log("/");
    } else {
        values.num2 = parseFloat(display.innerHTML);
        values.operator = "/";
        console.log("/");
    }
    display.innerHTML = "";
    console.log("/");
    console.log(values);
});

btnMulti.addEventListener('click', () => {
    if (values.num1 === 0) {
        values.num1 = parseFloat(display.innerHTML);
        values.operator = "*";
        console.log("*");
    } else {
        values.num2 = parseFloat(display.innerHTML);
        values.operator = "*";
        console.log("*");
    }
    display.innerHTML = "";
    console.log("*");
    console.log(values);
});

