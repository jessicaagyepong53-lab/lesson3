// console.log("Hello, T4G Scholars!");

// let username = "Jessica";
// console.log(username); // Jessica

// console.log("What is your age?");
// let age = prompt("What is your age?");
// console.log(age);

// let num1 = 50;
// let num2 = 150;
// let sum = num1 + num2;
// console.log(sum); // 200

// console.log(num1 + num2); // 200
// console.log(num2 - num1); // 100
// console.log(num2 / num1); // 3
// console.log(num1 * num2); // 7500
// console.log(15 % 4); // 3 what is left after dividing 15 by 4

// let h = true;
// console.log(h); // true

// let j = false;
// console.log(j); // false

// let k = 20
// typeof k; // number
// console.log(typeof k); // number

// let m = ("30")
// typeof m; // string
// console.log(typeof m); // string
// // Promt the user to enter a number
// let answer = prompt ("Enter a number");
// Check if the number is even or odd
// if (number%2 == 0)
// {alert(`$(number) is even`);}

// // Display that the number the user entered is even or odd

// if (number%2 == 0) {
//     alert(`${number} is even`);
// } else {
//     alert(`${number} is odd`);
// }

//     Take the users name
//     And also ask for the age
//     If they are 18 or above display or tell them that they can sign up for your application.
// IF they are less than 18 years old tell them that they can’t signup for the application
// let zage = prompt("What is your age?");
// if (zage >= 18) {
//     alert(`hello ${username}, you can sign up for this website!`);
// } else {
//     alert(`Sorry ${username}, you can not sign up for this website!`);
// }
let username = prompt("What is your name?");
let yage = prompt("How old are you?");
let email = prompt("Enter your email address");
if (yage < 12) {
    alert(`Hi ${username}, you are ${yage} years old and you are too young to register. Sorry😞😞!`); // If the user is less than 12 years old, display they are too young to register for the application
} else if (yage >= 12 && yage < 18) {
    alert(`Hi ${username}, you are ${yage} years old and you have limited options to register for. We will keep in touch via your email: ${email}👋🏽👋🏽!`); // If the user is less than 18 and 12 years old or older, display they can register but they will need parental consent
} else if (yage >= 18) {
    alert(`Hi ${username}, you are ${yage} years old and you can register for any options of your choice. We will keep in touch via your email: ${email}👋🏽👋🏽!`); // If the user is 18 years old and above
} else {
    alert(`Hi ${username}, you must be ${yage} years old. We will keep in touch via your email: ${email}👋🏽👋🏽!`); // If the user is 12 years old
}