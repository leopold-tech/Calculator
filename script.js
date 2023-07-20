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
    }

    allClear() {
        this.dataPreviousButton = '';
        this.dataCurrentButton = '';
    } 

    delete() 

    appendNumber(number)

    chooseOperation(operation)

    compute()

    updateDisplay()
}