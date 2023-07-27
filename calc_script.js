
class Calc {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    append(num) {
        // this.currentOperandTextElement.innerText = num.innerText;
        if (num === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + num.toString();
    }

    opBtn(operation) {
        if (this.currentOperand === '') return;
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    display() {
        // this.currentOperandTextElement.innerText = num.innerText;
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }

    // calculate()

    // updateDisplay() 
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const allClearButton = document.querySelector('[data-allclear]');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');

const calculator = new Calc(previousOperandTextElement, currentOperandTextElement);

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.opBtn(button.innerText);
        calculator.display(button);
        // calculator.updateDisplay();
    })
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        calculator.append(button.innerText);
        calculator.display(button);
        // calculator.updateDisplay();
    })
})


// console.log(this.currentOperand);  ==> This is undefined, where HTML button was being turned into a dom object HTML element
