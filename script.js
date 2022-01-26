const showPass = document.getElementById("hidden");
const small_length = document.getElementById("change-label-length");
const slider_value = document.querySelector(".slider-range");
const settings = document.querySelector(".settings");
const select_label = document.querySelector(".select-label");

// from function component
const upper = document.getElementById("upper_L");
const lower = document.getElementById("lower_L");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");

let arrayUpper = [];
let arrayLower = [];
let arrayNumber = [];
let arraySymbol = ["@", "#", "$", "&", "@", "#", "$", "&", "@"];

let flag_for_symbol_check = false;

// for upper case letters
upper.addEventListener("click", (e) => {
  if (e.target.checked) {
    for (let i = 0; i < 10; i++) {
      arrayUpper.push(randomChars(65, 90));
    }
  } else {
    arrayUpper = [];
  }
  flag_for_symbol_check = true;
});
// for lower case letters
lower.addEventListener("click", (e) => {
  if (e.target.checked) {
    for (let i = 0; i < 10; i++) {
      arrayLower.push(randomChars(97, 122));
    }
  } else {
    arrayLower = [];
  }
  flag_for_symbol_check = true;
});
// for numbers
number.addEventListener("click", (e) => {
  if (e.target.checked) {
    for (let i = 0; i < 9; i++) {
      arrayNumber.push(randomNums(0, 10));
    }
  } else {
    arrayNumber = [];
  }
  flag_for_symbol_check = true;
});

slider_value.addEventListener("change", rangeValue);

const generate = document.getElementById("generate");

generate.addEventListener("click", (e) => {
  let array = [...arrayUpper, ...arrayLower, ...arrayNumber];
  if (symbol.checked) {
    array = [...arrayUpper, ...arrayLower, ...arrayNumber, ...arraySymbol];
  }
  if (array.length) {
    if (flag_for_symbol_check) {
      setPass(array);
    }
  }
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
  // console.log(str);
  showPass.innerText = str.join("");
}

// functions
function rangeValue(e) {
  small_length.innerText = e.target.value;
}

function randomChars(lb, hb) {
  return String.fromCharCode(Math.round(Math.random() * (hb - lb)) + lb);
}
function randomNums(lb, hb) {
  return Math.floor(Math.random() * (hb - lb)) + lb;
}
