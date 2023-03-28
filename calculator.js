const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let decimal = []
let accumulativeCalculation

function calculate(button) {
    const value = button.textContent
    if(value === 'RESET'){
        calculation = []
        decimal = []
        screenDisplay.textContent = '0'
    } else if(value === 'DEL') {
        calculation.pop()
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation || '0'
    } else if(value === '.'){
        if (!decimal.includes('.')) {
            decimal.push('.');
            calculation.push('.');
            accumulativeCalculation = calculation.join('');
            screenDisplay.textContent = accumulativeCalculation;
          }
    } else if(value === '='){
        screenDisplay.textContent = eval(accumulativeCalculation)
    }else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))