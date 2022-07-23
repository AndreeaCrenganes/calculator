let display = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName("button"))

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "C":
                display.innerText = '';
                break;
            case "←":
                if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                }    catch {
                    display.innerText = "Error"
                }
                  break;
                  default:
                    display.innerText += e.target.innerText;
        }
    })
})

// DOM elements 

// const numberButton = document.querySelectorAll('number');
// const operatorButton = document.querySelectorAll('operator');
// const clearButton = document.querySelector('clear');

// const showResult = document.querySelector('display');
// const currentOperand = document.querySelector('current-operand');
// const previousOperand = document.querySelector('previous-operand');
// const equalsKey = document.querySelector('equal');


// currentOperand.textContent = 0;
// previousOperand.textContent = 0;


// function add(a, b) {
//   return a + b;
// };


// function subtract(a, b) {
//   return a - b;
// };


// function multiply(a, b) {
//   return a * b;
// };

 
// function divide(a, b) {
//   return a / b;
// };


// function operate(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return add(num1, num2);
//     case "-":
//       return subtract(num1, num2);
//     case "*":
//       return multiply(num1, num2);
//     case "/":
//       return divide(num1, num2);
//   }
// };


// function operate(num1, num2, operator) {
//     switch (operator) {
//       case "+":
//         return add(num1, num2);
//       case "-":
//         return subtract(num1, num2);
//       case "*":
//         return multiply(num1, num2);
//       case "/":
//         return divide(num1, num2);
//     }
//   };
  
  
//   let storedNumber = '';
//   let clickedOperator = '';
//   let firstNumber = '';
//   let result = '';
//   currentOperand.textContent = 0;
  
  
//   numberButton.forEach((number) => {
//     number.addEventListener('click', function() {
//       storedNumber += number.value;
//       currentOperand.textContent = storedNumber;
//     })
//   });
  
//   operatorButton.forEach((operator => {
//     operator.addEventListener('click', function() {
//       if (firstNumber && storedNumber) {
//         displayResult();
//       }
      
//       firstNumber = storedNumber;
  
      
//       clickedOperator = operator.textContent;
//       previousOperand.textContent = storedNumber + clickedOperator;
//       storedNumber = '';
  
//       console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
//       console.log(clickedOperator);
  
//     })
//   }));
 
//   $(document).ready(function() {
//   equalsKey.addEventListener('click', function() {
//     displayResult();
//   });
// });
  
//   function displayResult() {
//     result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
//     currentOperand.textContent = result;
//     previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
//     storedNumber = result;
//     console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);
//   }






  