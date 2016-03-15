'use strict';

let button = [1,2,3,4,5,6,7,8,9,0];
let operation = ['-','+','*', '/', '='];

let MyCalc = new Calculate({
    element: document.querySelector('[data-component="js-calc"]'),
    number: button,
    oper: operation
});