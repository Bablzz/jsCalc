'use strict';

let digit = '';
let resultTag = document.getElementById('resultTag');
let oper = [];
let compiledButton = require('../templates/button-template.jade');


module.exports = class Calculate {
    constructor(options) {
        this._el = options.element;
        
        this._calc = [1,2,3,4,5,6,7,8,9,0];
        
        this._oper = ['-','+','*', '/', '='];
        
        this._el.innerHTML = compiledButton({
            button: this._calc
        });
        
        this._compileOper = compiledButton({button: this._oper});
        
        this._el.insertAdjacentHTML('beforeEnd', this._compileOper);
        
        debugger;

        this._el.addEventListener('click', this._onClick.bind(this));
    }
    
    _onClick(event) {
        let target = event.target;
        
        if (target.tagName != 'BUTTON') {
            return false;
        }
        
        if (target.tagName == 'BUTTON' && target.innerText == '=') {
            this._finalCompute();
            digit = '';
            return;
        }
        
        function compute() {
            digit += target.innerText;
        } 
        compute();
        resultTag.value = digit;
        
    };
    
    _finalCompute() {
        //TODO
        let numeric; 
        let result;
        
        if (~digit.indexOf('+')) {
            numeric = digit.split('+');
            result = numeric.reduce(function(result, current) {
                return Number(result) + Number(current); 
            }, 0);
        } else if (~digit.indexOf('-')) {
            numeric = digit.split('-');
            result = Number(numeric[0]) - Number(numeric[1]);
        } else if(~digit.indexOf('*')) {
            numeric = digit.split('*');
            result = Number(numeric[0]) * Number(numeric[1]);         
        } else {
            numeric = digit.split('/');
            result = Number(numeric[0]) / Number(numeric[1]);
        }

        
        resultTag.value = result;
        
    }; 
}