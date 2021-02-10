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
const btnDot = document.querySelector("#btn-dot");
const btnEqual = document.querySelector("#btn-equal");
const btnAdd = document.querySelector("#btn-add");
const btnSub = document.querySelector("#btn-sub");
const btnDivide = document.querySelector("#btn-divide");
const btnMulti = document.querySelector("#btn-multi");
const display = document.querySelector("#display");
const btnClear = document.querySelector("#btn-clear");


const values = {
    num1: "",
    num2: "",
    operator: "",
    result: "",
};

//All the individual number button eventlisteners

btnOne.addEventListener('click', () => {
    display.innerText += 1;
});
btnTwo.addEventListener('click', () => {
    display.innerText += 2;
});
btnThree.addEventListener('click', () => {
    display.innerText += 3;
});
btnFour.addEventListener('click', () => {
    display.innerText += 4;
});
btnFive.addEventListener('click', () => {
    display.innerText += 5;
});
btnSix.addEventListener('click', () => {
    display.innerText += 6;
});
btnSeven.addEventListener('click', () => {
    display.innerText += 7;
});
btnEight.addEventListener('click', () => {
    display.innerText += 8;
});
btnNine.addEventListener('click', () => {
    display.innerText += 9;
});
btnZero.addEventListener('click', () => {
    display.innerText += 0;
});

//Misc buttons

btnClear.addEventListener('click', () => {
    display.innerText = '';
    values.num1 = "";
    values.num2 = "";
    values.operator = '';
    values.result = "";
    console.log("Clear");
    console.log(values);
});

btnDot.addEventListener('click', () => {
    if (!display.innerText.includes(".")) {
        display.innerText += ".";   
    } else {
        return;
    }
});

// "Operate" button

btnEqual.addEventListener('click', operate);

function operate() {
    if (values.operator === "+") {
        values.num2 = parseFloat(display.innerText);
        values.result = values.num1 + values.num2;
        values.num1 = values.result;
        display.innerText = values.result;
        console.log("=");
        console.log(values);
    } else if (values.operator === "-") {
        values.num2 = parseFloat(display.innerText);
        values.result = values.num1 - values.num2;
        values.num1 = values.result;
        display.innerText = values.result;
        console.log("=");
        console.log(values);
    } else if (values.operator === "/") {
        if (values.num2 === 0) {
            display.innerText = "ERROR - Can't divide by 0"
        } else {
            values.num2 = parseFloat(display.innerText);
            values.result = values.num1 / values.num2;
            values.num1 = values.result;
            display.innerText = values.result;
            console.log("=");
            console.log(values);
        }
    } else if (values.operator === "*") {
        values.num2 = parseFloat(display.innerText);
        values.result = values.num1 * values.num2;
        values.num1 = values.result;
        display.innerText = values.result;
        console.log("=");
        console.log(values);
    }
};

//Operators

btnAdd.addEventListener('click', add);

function add() {
    if (values.operator === "") {
        values.num1 = parseFloat(display.innerText);
        values.operator = "+";
        console.log("+");
    } else {
        values.num2 = parseFloat(display.innerText);
        operate();
        values.operator = "+";
        console.log("+"); 
    }
    display.innerText = "";
    // console.log(values);
};

btnSub.addEventListener('click', sub);

function sub() {
    if (values.num1 === "") {
        values.num1 = parseFloat(display.innerText);
        values.operator = "-";
        console.log("-");
    } else {
        values.num2 = parseFloat(display.innerText);
        operate();
        values.operator = "-";
        console.log("-");
    }
    display.innerText = "";
    console.log(values);
};

btnDivide.addEventListener('click', divide);

function divide() {
    if (values.num1 === "") {
        values.num1 = parseFloat(display.innerText);
        values.operator = "/";
        console.log("/");
    } else {
        values.num2 = parseFloat(display.innerText);
        operate();
        values.operator = "/";
        console.log("/");
    }
    display.innerText = "";
    console.log(values);
};

btnMulti.addEventListener('click', multi);

function multi() {
    if (values.num1 === "") {
        values.num1 = parseFloat(display.innerText);
        values.operator = "*";
        console.log("*");
    } else {
        values.num2 = parseFloat(display.innerText);
        operate();
        values.operator = "*";
        console.log("*");
    }
    display.innerText = "";
    console.log(values);
};



