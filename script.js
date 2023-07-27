const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const dataPreviousButton = document.querySelector('[data-previous-operand]');
const dataCurrentButton = document.querySelector('[data-current-operand]');
const dataAllClearButton = document.querySelector('[data-allclear]');
const dataDeleteButton = document.querySelector('[data-delete]');
const dataEqualButton = document.querySelector('[data-equal]');

class Calculator {
    constructor(dataPreviousButton, dataCurrentButton) {
        this.dataPreviousButton = dataPreviousButton;
        this.dataCurrentButton = dataCurrentButton;
        allClear()
    }

    allClear() {
        this.dataPreviousButton = '';
        this.dataCurrentButton = '';
        this.operation = undefined;
    } 

    delete() {
        // this.dataCurrentButton = this.dataCurrentButton.toString().slice(0,-1);
    }

    appendNumber(number) {
        this.dataCurrentButton = this.dataCurrentButton.toString() + number.toString();
        // if (number === '.' && this.dataCurrentButton.includes('.')) return;
        // this.dataCurrentButton = this.dataCurrentButton.toString() + number.toString();
    }

    // chooseOperation(operation) {
    //     if (this.dataPreviousButton !== '') {
    //         this.compute();
    //     }
    //     if (this.dataCurrentButton === '') return;

    //     this.operation = operation;
    //     this.dataPreviousButton = this.dataCurrentButton;
    //     this.dataCurrentButton = '';
    // }

    compute()

    getDisplayNumber(number)

    updateDisplay() {
        this.dataCurrentButton.innerText = this.dataCurrentButton;
    }
}


const calculator = new Calculator(dataPreviousButton, dataCurrentButton);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})