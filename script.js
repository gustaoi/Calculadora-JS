//Script da Calculadora

let runningtotal = 0;
let buffer = "0";
let previosOperator;

const screen = document.querySelector('.screen');

function button(value) {
    if (isNaN(value)) {
        handleSymbol(value)
    }
}