//Make the buttons active

const btnDot = document.querySelector("#btn-dot");
const btnEqual = document.querySelector("#btn-equal");
const btnAdd = document.querySelector("#btn-add");
const btnSub = document.querySelector("#btn-sub");
const btnDivide = document.querySelector("#btn-divide");
const btnMulti = document.querySelector("#btn-multi");
const display = document.querySelector("#display");
const output = document.querySelector("#output");
const btnClear = document.querySelector("#btn-clear");
const btns = document.querySelectorAll('.btn-num');


const values = {
    num1: "",
    num2: "",
    operator: "",
    result: "",
    test: "",
};


//Make buttons work

for (let btn of btns) {
    btn.addEventListener('click', () => {
        display.innerText += btn.innerText;
    })
}


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
    console.log(values);
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



