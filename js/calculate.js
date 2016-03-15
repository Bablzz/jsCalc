'use strict';

let digit = '';

class Calculate {
    constructor(options) {
        this._el = options.element;
        this._calc = options.number;
        this._oper = options.oper;
        
        this._createCalcButton();
        this._createCalcOper();
        
        this._el.addEventListener('click', this._compute.bind(this));
    }
    
    _compute(event) {
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
        
        console.log(digit);  
        
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
        
        alert(result);
    };
    
    _createCalcButton() {
        this._calc.forEach(buttonData => {
            let buttonHtml = `
                <button>
                    ${buttonData}
                </button>    
            `;
            
            this._el.insertAdjacentHTML('beforeEnd', buttonHtml);
        });
    };
        
    _createCalcOper() {
        this._oper.forEach(operButtonHtml => {
            let operHtml = `
                <button>
                    ${operButtonHtml}
                </button>    
            `;
            
            this._el.insertAdjacentHTML('beforeEnd', operHtml);
        });
    };
    

}