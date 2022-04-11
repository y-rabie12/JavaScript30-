'use strict';



// Select all the all the numbers using the 'data-number' attribute
const numbers = document.querySelectorAll('[data-number]');

// Select all the operation buttons using the 'data-operation' attribute
const operations = document.querySelectorAll('[data-operation]')

// Select the  clear button
const clearBtn = document.querySelector('[data-clear]')

// Select the delete button
const deleteBtn = document.querySelector('[data-delete]')


// Select the equal button
const equalBtn = document.querySelector('[data-equals]')


// Select both the  current operand and the previous operand

const previousOperandText= document.querySelector('[data-previous-operand]')

const currentOperandText = document.querySelector('[data-current-operand]')


// Main approach is using OOP


class Calculator{
       constructor(previousOperandText,currentOperandText){
           this.previousOperandText= previousOperandText
           this.currentOperandText = currentOperandText
           this.clear()
       }


       // Clear method 
       clear(){
           this.currentOperand = ''
           this.previousOperand = ''
           this.operation = undefined
       }

       // delete a number 

       delete(){
           this.currentOperand = this.currentOperand.toString().slice(0,-1)
       }

       appendNumber(number){
           // guard clause since we only want one decimal to appear
            if(number === '.' && this.currentOperand.includes('.')) return
            this.currentOperand = this.currentOperand.toString() + number.toString()
       }

       chooseOperation( operation){

             // guard clause
             if(this.currentOperand === '') return

             // guard clause 

             if( this.previousOperand !== ''){
                 this.compute()
             }
             //set the operation
            this.operation = operation
            this.currentOperand+=operation
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
       }

       compute(){
           let computation = ''
           let prev = parseFloat(this.previousOperand)
           let curr = parseFloat(this.currentOperand)

           if(isNaN(prev) || isNaN(curr)) return

           switch (this.operation){
                case '+': 
                    computation = prev + curr
                    break;
                case '*':
                    computation = prev * curr
                    break;
                case '/' :
                    computation = prev /curr
                    break;
                case '-':
                    computation = prev - curr
                    break;
                default:
                    return
           }
           this.operation = undefined
           this.currentOperand = computation
           this.previousOperand = ''
       }

       updateDisplay(){
            this.currentOperandText.innerText = this.currentOperand
            this.previousOperandText.innerText = this.previousOperand

       }

}

const calculator = new Calculator(previousOperandText,currentOperandText)

numbers.forEach( number => number.addEventListener('click', () => {
       calculator.appendNumber(number.innerText)
       calculator.updateDisplay()
}))

operations.forEach( operation => {
    operation.addEventListener('click', () =>{
        calculator.chooseOperation(operation.innerText);
        calculator.updateDisplay();
    })
} )

equalBtn.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

clearBtn.addEventListener( 'click' , () => {
    calculator.clear()
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})