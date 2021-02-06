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

//All the individual number button eventlisteners

btnOne.addEventListener('click', () => {
    console.log(1);
});
btnTwo.addEventListener('click', () => {
    console.log(2);
});
btnThree.addEventListener('click', () => {
    console.log(3);
});
btnFour.addEventListener('click', () => {
    console.log(4);
});
btnFive.addEventListener('click', () => {
    console.log(5);
});
btnSix.addEventListener('click', () => {
    console.log(6);
});
btnSeven.addEventListener('click', () => {
    console.log(7);
});
btnEight.addEventListener('click', () => {
    console.log(8);
});
btnNine.addEventListener('click', () => {
    console.log(9);
});
btnZero.addEventListener('click', () => {
    console.log(0);
});

//Misc buttons

btnClear.addEventListener('click', () => {
    console.clear();
});
btnDot.addEventListener('click', () => {
    console.log(".");
});

// "Operate" button

btnEqual.addEventListener('click', () => {
    console.log("=");
});

//Operators

btnAdd.addEventListener('click', () => {
    console.log("+");
});
btnSub.addEventListener('click', () => {
    console.log("-");
});
btnDivide.addEventListener('click', () => {
    console.log("/");
});
btnMulti.addEventListener('click', () => {
    console.log("*");
});

