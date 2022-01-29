// getting elements by id's
const showPass = document.getElementById("hidden");
const small_length = document.getElementById("change-label-length"); // range of password shower label
const slider_value = document.querySelector(".slider-range"); // password length selector
const settings = document.querySelector(".settings"); // setting label

// from function component
const upper = document.getElementById("upper_L");
const lower = document.getElementById("lower_L");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");

// functions
function rangeValue(e) {
    small_length.innerText = e.target.value;
}
// generate alphabet
function randomChars(lb, hb) {
    return String.fromCharCode(Math.round(Math.random() * (hb - lb)) + lb);
}

// generate numbers
function randomNums(lb, hb) {
    return Math.floor(Math.random() * (hb - lb)) + lb;
}

let arrayUpper = [];
let arrayLower = [];
let arrayNumber = [];
// make duplicate for more occurence of characters
let arraySymbol = ["@", "#", "$", "&"];

// creating flag variable to check if options are selected or not with special symbols
let upper_flag = false;
let lower_flag = false;
let number_flag = false;
let symbol_flag = false;

// for upper case letters
upper.addEventListener("click", (e) => {
    if (e.target.checked) {
        for (let i = 0; i < 10; i++) {
            arrayUpper.push(randomChars(65, 90));
            upper_flag = true;
        }
    } else {
        arrayUpper = [];
        upper_flag = false;
    }
});
// for lower case letters
lower.addEventListener("click", (e) => {
    if (e.target.checked) {
        for (let i = 0; i < 10; i++) {
            arrayLower.push(randomChars(97, 122));
            lower_flag = true;
        }
    } else {
        arrayLower = [];
        lower_flag = false;
    }
});
// for numbers
number.addEventListener("click", (e) => {
    if (e.target.checked) {
        for (let i = 0; i < 9; i++) {
            arrayNumber.push(randomNums(0, 10));
            number_flag = true;
        }
    } else {
        arrayNumber = [];
        number_flag = false;
    }
});
// for special characters
symbol.addEventListener("click", (e) => {
    if (e.target.checked) {
        symbol_flag = true;
    } else {
        symbol_flag = false;
    }
});

slider_value.addEventListener("change", rangeValue);
const generate = document.getElementById("generate");

generate.addEventListener("click", (e) => {
    let array = [...arrayUpper, ...arrayLower, ...arrayNumber];
    if (symbol.checked) {
        array = [...arrayUpper, ...arrayLower, ...arrayNumber, ...arraySymbol];
    }
    if (array.length) {
        console.log(!symbol_flag);
        if (number_flag || lower_flag || upper_flag) {
            setPass(array);
        } else if (!symbol_flag && (number_flag || lower_flag || upper_flag)) {
            setPass(array);
        } else alert("Select one more option with Special Symbol");
    } else alert("Select options to generate password");
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    array = [];
    showPass.innerText = "Click Generate";
});

// setting data on tag
function setPass(array) {
    const len = parseInt(small_length.innerText);

    let str = [];
    // for setting first char of pass non special char
    let idx = 0;
    for (let i = 0; i < len; i++) {
        idx = randomNums(1, array.length - 1);
        str[i] = array[idx];
    }
    showPass.innerText = str.join("");
}