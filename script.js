// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "gaming", "coding"]; // Array
let user = { name: "John", age: 25 }; // Object

// Log values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators - Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }
    
    alert(`Result: ${result}`);
}

// Call the calculator function
calculator();

// Functions - Greeting User
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
}

// Display greeting in dynamic content area
document.getElementById('dynamic-content').innerHTML += `<p>${greetUser(name)}</p>`;

// Part 2: JavaScript Control Structures

// If Statements - Check Voting Eligibility
let userAge = parseInt(prompt("What is your age?"));
if (userAge >= 18) {
    document.getElementById('dynamic-content').innerHTML += `<p>You are eligible to vote.</p>`;
} else {
    document.getElementById('dynamic-content').innerHTML += `<p>You are not eligible to vote.</p>`;
}

// Loops - Display Numbers from 1 to 10
let numberList = '<ol>';
for (let i = 1; i <= 10; i++) {
    numberList += `<li>${i}</li>`;
}
numberList += '</ol>';
document.getElementById('dynamic-content').innerHTML += numberList;

// Part 3: Introduction to the DOM

// Changing the text of the <h1> element
document.querySelector('h1').innerText = "JavaScript in Action!";

// Adding new content dynamically
document.getElementById('dynamic-content').innerHTML += `<p>This content was added dynamically using JavaScript.</p>`;
