let gender = prompt("Enter your gender (male/female): ");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
} else {
    alert("Invalid gender entered");
}

let city = prompt("Enter city name: ");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let operator = prompt("Enter operator (+, -, *, /, %): ");

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else if (operator === "%") {
    result = num1 % num2;
} else {
    alert("Invalid operator entered");
}