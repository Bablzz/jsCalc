'use strict';

let Calculate = require('./calculate.js'); 

let MyCalc = new Calculate({
    element: document.querySelector('[data-component="js-calc"]')
});