const input = document.querySelector('.calc');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
let check = false;

let x;
let arg;

numbers.forEach((el) => {
  el.addEventListener('click', () => {
    input.value += el.innerText;
    check = true;
  });
});

operators.forEach((el) => {
  el.addEventListener('click', () => {
    if (check == true) {
      input.value += el.innerText;
      check = false;
    }
  });
});

equal.addEventListener('click', () => {
  input.value = eval(input.value);
});

clear.addEventListener('click', () => {
  input.value = 00;
});

del.addEventListener('click', () => {
  arg = input.value.split('');
  arg.pop();
  x = arg.join('');
  input.value = x;
});
